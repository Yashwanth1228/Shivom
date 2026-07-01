"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-7 z-40 w-11 h-11 rounded-full bg-dark-card/90 backdrop-blur border border-gold/30 flex items-center justify-center text-gold hover:text-white hover:border-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* SVG Progress Circle */}
          <svg className="absolute w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              stroke="rgba(212, 175, 55, 0.08)"
              strokeWidth="2"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              stroke="#D4AF37"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 19}
              strokeDashoffset={2 * Math.PI * 19 - (scrollProgress / 100) * (2 * Math.PI * 19)}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
