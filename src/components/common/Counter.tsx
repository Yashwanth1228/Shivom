"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number; // duration in seconds
  suffix?: string;
}

export default function Counter({ value, duration = 2, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, count, duration]);

  return (
    <span ref={ref} className="font-outfit font-extrabold text-white text-4xl md:text-5xl tracking-tight">
      {displayValue}
      {suffix}
    </span>
  );
}
