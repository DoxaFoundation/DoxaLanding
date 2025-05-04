import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl transform translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-8" delay={0.1}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="animate-pulse mr-2 h-2 w-2 bg-white rounded-full"></span>
              <span>Launching Soon</span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-heading font-bold leading-tight tracking-tight"
              id="hero-title"
            >
              <span>Doxa, The future of</span>
              <div className="relative group">
                <span className="inline-block bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                  Stablecoins
                </span>
                <span className="absolute bottom-2 left-0 w-full h-1 bg-white transform group-hover:scale-x-110 origin-left transition-transform duration-300"></span>
              </div>
            </motion.h1>

            <p className="text-xl md:text-2xl text-gray-300 mt-6">
              Create, own and earn with a multi-stablecoin platform with the
              Doxa USD.
            </p>

            <div className="border border-white/20 rounded-lg p-5 backdrop-blur-sm bg-white/5">
              <p className="font-medium">
                No banks. No middlemen. No central point of failure.
              </p>
              <p className="text-gray-400 mt-2">
                Just programmable money—backed, secure, fast.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                className="bg-white hover:bg-gray-200 text-black px-6 py-6 h-auto rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://i7m4z-gqaaa-aaaak-qddtq-cai.icp0.io/",
                    "_blank"
                  )
                }
              >
                <span>Get Early Access</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="border border-white hover:bg-white/10 text-white px-6 py-6 h-auto rounded-full font-medium transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://sgv54-gyaaa-aaaag-qngxa-cai.icp0.io/",
                    "_blank"
                  )
                }
              >
                <span>Read Whitepaper</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="perspective relative">
            <div className="w-full h-96 rounded-3xl relative overflow-hidden animate-float border border-white/20 bg-gradient-to-br from-black to-gray-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0))] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="p-8 text-center">
                  <div className="text-8xl font-bold mb-2">USDx</div>
                  <div className="text-xl">Doxa USD Stablecoin</div>
                  <div className="mt-8 inline-block bg-white/10 px-4 py-2 backdrop-blur-md rounded-lg">
                    <span className="text-sm">1 USDx = $1.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center transform rotate-12 animate-pulse-slow">
              <span className="text-black font-bold text-sm">MINT NOW</span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToFeatures}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <ChevronDown className="text-white" />
      </motion.div>
    </section>
  );
}
