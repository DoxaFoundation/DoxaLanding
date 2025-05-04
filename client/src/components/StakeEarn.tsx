import { Percent, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: <Percent className="text-lg" />,
    title: "30% of all protocol fees",
    description: "Direct revenue sharing with stakers",
  },
  {
    icon: <Globe className="text-lg" />,
    title: "Yield from ICP Neuron staking",
    description: "Compound returns on your assets",
  },
  {
    icon: <TrendingUp className="text-lg" />,
    title: "Passive income, powered by decentralization",
    description: "No intermediaries taking a cut",
  },
];

export default function StakeEarn() {
  return (
    <section id="stake-earn" className="py-24 bg-black relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              <span className="inline-block border-b-2 border-white pb-1">
                Stake. Earn. Grow.
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Doxa isn't just about spending—it's about growing your assets.
            </p>
            <p className="mb-6">
              Stake and lock your DoxaUSD to earn real yield from protocol
              revenue and future staking rewards.
            </p>

            <div className="space-y-4 mt-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white/10 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{benefit.title}</h4>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="mt-10 bg-white hover:bg-gray-200 text-black px-6 py-6 h-auto rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                alert("Staking calculator coming soon after platform launch!")
              }
            >
              <span>Calculator Coming Soon</span>
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
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="perspective relative">
            <div className="w-full aspect-square rounded-2xl relative overflow-hidden border border-white/20 bg-gradient-to-br from-black to-gray-900 animate-float">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0))] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                <div className="text-xl mb-4">Staking Calculator</div>

                <div className="w-full max-w-sm space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                    <span className="animate-pulse mr-2 h-2 w-2 bg-white rounded-full"></span>
                    <span>Coming Soon</span>
                  </div>

                  <p className="text-center text-gray-300 mb-6">
                    Our staking calculator will be available once the platform
                    launches.
                    <br />
                    <br />
                    Get ready to earn rewards with flexible staking options from
                    3 to 12 months.
                  </p>

                  <div className="space-y-2 opacity-50">
                    <label className="text-sm text-gray-400">
                      Amount to Stake (USDx)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value="10,000"
                        disabled
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white cursor-not-allowed"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                        USDx
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 opacity-50">
                    <label className="text-sm text-gray-400">
                      Staking Period
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value="12 Months"
                        disabled
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 opacity-50">
                    <label className="text-sm text-gray-400">
                      Estimated Annual Yield
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value="Coming Soon"
                        disabled
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
