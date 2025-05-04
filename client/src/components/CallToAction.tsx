import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  "Create your own stablecoin",
  "Stake and earn yield",
  "Join a decentralized movement",
  "Own a piece of the protocol",
];

export default function CallToAction() {
  return (
    <section id="cta" className="py-24 bg-black relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Be an Early Minter. Be a Pioneer.</h2>
            <p className="text-xl mb-8">
              This is your chance to help shape the next generation of global finance.
            </p>
            
            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center mr-3 text-xs">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-white hover:bg-gray-200 text-black px-6 py-8 h-auto rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => console.log("Get Early Access clicked")}
              >
                <span className="text-lg">🚀 Get Early Access</span>
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-8 h-auto rounded-full font-medium transition-all duration-300"
                onClick={() => console.log("Read Whitepaper clicked")}
              >
                <span className="text-lg">📖 Read the Whitepaper</span>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
