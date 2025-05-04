import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "DeFi Developer",
    quote: "The stability and transparency of Doxa's platform is remarkable. As a developer, I've integrated it into three applications already.",
    stars: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Cross-border Business Owner",
    quote: "Doxa has revolutionized how I manage international payments. No more waiting days for transfers or paying ridiculous fees.",
    stars: 4.5,
  },
  {
    name: "James Wilson",
    role: "Crypto Investor",
    quote: "After trying multiple stablecoins, I've finally found one that I can trust. The staking rewards are an excellent bonus too.",
    stars: 5,
  },
  {
    name: "Sarah Lee",
    role: "Finance Director",
    quote: "From a corporate treasury perspective, Doxa offers the stability and transparency we need with the flexibility of blockchain technology.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const testimonialCards = containerRef.current.querySelectorAll('.testimonial-card');
      if (testimonialCards[index]) {
        testimonialCards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  // Handle intersection observer to update active index based on visibility
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
        rootMargin: '0px'
      }
    );
    
    const testimonialCards = containerRef.current.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      testimonialCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-black relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            <span className="inline-block border-b-2 border-white pb-1">What People Say</span>
          </h2>
        </AnimatedSection>
        
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-8 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card flex-shrink-0 w-full md:w-96 snap-center"
                data-index={index}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-white/20 mr-4 flex items-center justify-center overflow-hidden">
                      <span className="text-lg font-medium">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`${i < Math.floor(testimonial.stars) ? 'text-white' : 'text-gray-500'} 
                                    ${testimonial.stars % 1 !== 0 && i === Math.floor(testimonial.stars) ? 'fill-white text-white' : ''}`}
                        fill={i < Math.floor(testimonial.stars) ? 'currentColor' : 'none'}
                        size={16}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
