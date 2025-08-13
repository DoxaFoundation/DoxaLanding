import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: 1,
    title: "Stablecoin Minter",
    description:
      "You deposit collateral (ICP, ckBTC, ckETH) into the protocol.",
  },
  {
    number: 2,
    title: "Reserve Pool",
    description:
      "Collateral is converted to ckUSDC and locked securely in the protocol.",
  },
  {
    number: 3,
    title: "DoxaUSD (DUSD)",
    description:
      "DUSD is instantly minted and sent to your wallet, ready to use.",
  },
];

const transparencyPoints = [
  "Real-Time Reserve Dashboards",
  "Regular Security Audits",
  "Open-Source Smart Contracts",
  "DAO Governance via SNS",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            <span className="inline-block border-b-2 border-white pb-1">
              How It Works
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            One protocol. Three core canisters.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="relative"
            >
              <div className="absolute -left-4 top-0 text-9xl font-bold opacity-10">
                {step.number}
              </div>
              <div className="relative z-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-black/20"
          delay={0.4}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">And the peg?</h3>
              <p className="text-lg text-gray-300">
                Maintained 24/7 by an intelligent ckUSDC pool.
              </p>
              <ul className="mt-6 space-y-3">
                {transparencyPoints.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center mr-3 text-xs">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-medium italic">
                You deserve to see what backs your money. With Doxa, you do.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="w-full h-64 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0))] bg-cover bg-center rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <motion.div
                      className="text-3xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Transparent.
                    </motion.div>
                    <motion.div
                      className="text-3xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Auditable.
                    </motion.div>
                    <motion.div
                      className="text-3xl font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Decentralized.
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
