import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Cog,
  TrendingUp,
  Shield,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: <Globe className="text-2xl" />,
    title: "Cross-Border Remittances",
    description: "Send money instantly, without the fees.",
  },
  {
    icon: <ShoppingCart className="text-2xl" />,
    title: "E-Commerce Ready",
    description: "Stable payments for global businesses.",
  },
  {
    icon: <Smartphone className="text-2xl" />,
    title: "Microtransactions",
    description: "Enable tiny payments for big ideas.",
  },
  {
    icon: <Cog className="text-2xl" />,
    title: "dApp Integration",
    description: "Plug Doxa into any Web3 app.",
  },
  {
    icon: <TrendingUp className="text-2xl" />,
    title: "Trading",
    description: "Use USDx as a reliable base asset across chains.",
  },
  {
    icon: <Shield className="text-2xl" />,
    title: "Security & Transparency",
    description: "Auditable, decentralized, trustworthy.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            <span className="inline-block border-b-2 border-white pb-1">Built for Real Impact</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">Your money. Your way. Anywhere.</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1}
              className="feature-card bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-white/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      <div className="mt-24 relative overflow-hidden py-8 bg-white/5">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array(2).fill("").map((_, i) => (
            <div key={i} className="flex">
              <span className="text-4xl font-bold opacity-20 mx-4">TRANSPARENT</span>
              <span className="text-4xl font-bold opacity-20 mx-4">DECENTRALIZED</span>
              <span className="text-4xl font-bold opacity-20 mx-4">AUDITABLE</span>
              <span className="text-4xl font-bold opacity-20 mx-4">SECURE</span>
              <span className="text-4xl font-bold opacity-20 mx-4">FAST</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
