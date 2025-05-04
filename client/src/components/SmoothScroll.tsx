import { useEffect, ReactNode } from "react";
import { useScrollAnimations } from "@/lib/useScrollAnimations";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { initializeAnimations } = useScrollAnimations();
  
  // Initialize smooth scrolling
  useEffect(() => {
    // Initialize scroll animations and smooth scrolling
    initializeAnimations();
  }, [initializeAnimations]);

  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}
