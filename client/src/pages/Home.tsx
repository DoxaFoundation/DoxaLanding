import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import StakeEarn from "@/components/StakeEarn";
import Roadmap from "@/components/Roadmap";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <StakeEarn />
      <Roadmap />
      <Testimonials />
      <CallToAction />
      <Newsletter />
      <Footer />
    </div>
  );
}
