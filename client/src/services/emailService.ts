import { Actor, HttpAgent } from "@dfinity/agent";
import type { ActorSubclass } from "@dfinity/agent";
import { AnonymousIdentity } from "@dfinity/agent";
import { idlFactory } from "../../declarations/backend";
import type { _SERVICE } from "../../declarations/backend/backend.did";

// Constants for the agent setup - using Vite's environment variables
const isDevelopment = import.meta.env.DEV; // DEV is true in development mode
const HOST = isDevelopment ? "http://127.0.0.1:8080" : "https://icp-api.io";
const FETCH_ROOT_KEY = isDevelopment;

/**
 * Sets up an HttpAgent with anonymous identity
 */
async function setupAgent(): Promise<HttpAgent> {
    const agent = new HttpAgent({
        host: HOST,
        identity: new AnonymousIdentity(),
    });

    // When not on IC, we need to fetch the root key
    if (FETCH_ROOT_KEY) {
        try {
            await agent.fetchRootKey();
        } catch (err) {
            console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
            console.error(err);
        }
    }

    return agent;
}

/**
 * Sets up an actor for interacting with the backend canister
 */
async function setupActor(): Promise<ActorSubclass<_SERVICE>> {
    try {
        const agent = await setupAgent();

        // Get canisterId from the imported module or from environment variables
        const canisterIdFromEnv = import.meta.env.VITE_CANISTER_ID_BACKEND;

        // Import canisterId dynamically from backend module as fallback
        const { canisterId } = await import("../../declarations/backend");

        if (!canisterId) {
            throw new Error("Canister ID is not available");
        }

        const actor = Actor.createActor<_SERVICE>(idlFactory, {
            canisterId,
            agent,
        });

        return actor;
    } catch (error) {
        console.error("Failed to setup actor:", error);
        throw error;
    }
}

// Cache the actor instance promise
let actorPromise: Promise<ActorSubclass<_SERVICE>> | null = null;

/**
 * Get or create the actor instance
 */
const getBackendActor = async (): Promise<ActorSubclass<_SERVICE>> => {
    if (!actorPromise) {
        actorPromise = setupActor();
    }
    return actorPromise;
};

/**
 * Subscribe an email to the newsletter
 * @param email Email address to subscribe
 * @returns Promise with the result
 */
export const subscribeEmail = async (email: string): Promise<{ success: boolean; message: string }> => {
    try {
        // Validate email format
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return { success: false, message: "Invalid email format" };
        }

        // Get the actor and call the subscribe_email method
        const actor = await getBackendActor();
        const result = await actor.subscribe_email(email);

        // Handle the result
        if ('ok' in result) {
            return { success: true, message: "Thank you for subscribing!" };
        } else {
            return { success: false, message: result.err || "Failed to subscribe" };
        }
    } catch (error) {
        console.error("Error subscribing email:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unknown error occurred"
        };
    }
};

/**
 * Get all subscribed emails (admin function)
 * @returns Promise with all the subscribed emails
 */
export const getAllEmails = async (): Promise<string[]> => {
    try {
        const actor = await getBackendActor();
        return await actor.get_all_emails();
    } catch (error) {
        console.error("Error fetching emails:", error);
        throw error;
    }
};

/**
 * Get the total count of subscribers
 * @returns Promise with the count of subscribers
 */
export const getSubscriberCount = async (): Promise<number> => {
    try {
        const actor = await getBackendActor();
        const count = await actor.get_subscriber_count();
        return Number(count);
    } catch (error) {
        console.error("Error fetching subscriber count:", error);
        throw error;
    }
}; 