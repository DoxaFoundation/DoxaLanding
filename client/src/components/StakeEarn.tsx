import { Percent, Globe, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: <Percent className="w-6 h-6" />,
    title: "30% of all protocol fees",
    description: "Direct revenue sharing with stakers",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Yield from ICP Neuron staking",
    description: "Compound returns on your assets",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Passive income, powered by decentralization",
    description: "No intermediaries taking a cut",
  },
];

export default function StakeEarn() {
  return (
    <section
      id="stake-earn"
      className="py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      {/* Decorative elements for symmetry */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white pb-1 border-b-2 border-white/30">
              Stake. Earn. Grow.
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Doxa isn't just about spending—it's about growing your assets.
          </p>
          <p className="mb-6 max-w-2xl mx-auto">
            Stake and lock your DoxaUSD to earn real yield from protocol revenue
            and future staking rewards.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
