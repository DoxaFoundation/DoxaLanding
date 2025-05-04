import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "./AnimatedSection";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/subscribe', { email });
      
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-black relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Be Early. Be First.</h2>
          <p className="text-xl mb-10">
            Don't just watch the future happen — help build it. Join thousands already signed up for early access, launch updates, staking rewards, and more.
          </p>
          
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/20 rounded-full px-6 py-6 h-auto text-white placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-gray-200 text-black px-8 py-6 h-auto rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              By subscribing, you agree to receive updates and marketing communications. You can unsubscribe at any time.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
