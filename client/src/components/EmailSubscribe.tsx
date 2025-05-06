import { useState, FormEvent } from "react";
import { subscribeEmail } from "../services/emailService";
import { Button } from "@/components/ui/button";

type EmailSubscribeProps = {
  className?: string;
};

export default function EmailSubscribe({
  className = "",
}: EmailSubscribeProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Reset status and set to loading
    setStatus({ type: "loading", message: "Subscribing..." });

    try {
      const result = await subscribeEmail(email);

      if (result.success) {
        setStatus({ type: "success", message: result.message });
        setEmail(""); // Clear the input on success
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to subscribe",
      });
    }
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 border border-white/20 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
            disabled={status.type === "loading"}
            required
          />
          <Button
            type="submit"
            disabled={status.type === "loading"}
            className="bg-white hover:bg-gray-200 text-black font-medium rounded-lg"
          >
            {status.type === "loading" ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing
              </span>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>

        {status.message && (
          <div
            className={`text-sm ${
              status.type === "error"
                ? "text-red-400"
                : status.type === "success"
                ? "text-green-400"
                : "text-gray-400"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
