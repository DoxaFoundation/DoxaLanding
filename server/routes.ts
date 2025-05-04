import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Please provide a valid email address")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = subscribeSchema.parse(req.body);
      
      // In a real application, this would store the email in a database
      // and potentially integrate with an email service
      console.log(`Newsletter subscription received for: ${email}`);
      
      // Return success
      return res.status(200).json({ success: true, message: "Subscription successful" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your subscription"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
