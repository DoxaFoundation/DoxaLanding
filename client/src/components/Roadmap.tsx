import AnimatedSection from "./AnimatedSection";

const phases = [
  {
    number: 1,
    title: "Phase 1: Foundation & MVP",
    timeline: "(Completed/Ongoing 2025)",
    items: [
      "Protocol design & technical architecture",
      "Core team assembly",
      "Initial capital raised",
      "Smart contract development",
      "Security audits (first round)",
    ],
    position: "left", // For alternate layout
  },
  {
    number: 2,
    title: "Phase 2: Expansion & Integration",
    timeline: "(Next 6 months)",
    items: [
      "Wallet integrations",
      "Exchange listings & partnerships",
      "Cross-chain functionality",
      "Marketing & community growth",
      "Developer SDK release",
    ],
    position: "right",
  },
  {
    number: 3,
    title: "Phase 3: Growth & Ecosystem Development",
    timeline: "(Following 6 months)",
    items: [
      "Advanced staking mechanisms",
      "Governance token distribution",
      "DAO transition",
      "Additional collateral types",
      "Enterprise partner adoption",
    ],
    position: "left",
  },
  {
    number: 4,
    title: "Phase 4: Maturity & Scaling",
    timeline: "(Long-term, within the next 12 months)",
    items: [
      "Global regulatory compliance",
      "Institutional adoption strategy",
      "Advanced financial products",
      "Fully decentralized governance",
      "Enterprise-grade solutions",
    ],
    position: "right",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-black relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            <span className="inline-block border-b-2 border-white pb-1">Roadmap</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            From launch to full ecosystem — here's how we're building the next generation of decentralized money
          </p>
        </AnimatedSection>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-white/20 z-0"></div>
          
          {/* Phases */}
          <div className="relative z-10 space-y-24">
            {phases.map((phase, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.2}
                className="flex flex-col md:flex-row items-center justify-center"
              >
                {phase.position === "left" ? (
                  <>
                    <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right order-2 md:order-1">
                      <h3 className="text-2xl font-semibold mb-2">{phase.title}</h3>
                      <p className="text-gray-300">{phase.timeline}</p>
                      <ul className="mt-4 space-y-2 list-disc list-inside md:list-outside">
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
                      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl relative z-20">
                        {phase.number}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 flex justify-center order-1 mb-8 md:mb-0">
                      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl relative z-20">
                        {phase.number}
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0 order-2">
                      <h3 className="text-2xl font-semibold mb-2">{phase.title}</h3>
                      <p className="text-gray-300">{phase.timeline}</p>
                      <ul className="mt-4 space-y-2 list-disc list-inside">
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
