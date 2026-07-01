"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { clsx } from "clsx";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(212, 175, 55, 0.25)"
}

export default function TiltCard({
  children,
  className,
  glowColor = "rgba(212, 175, 55, 0.25)",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for x/y rotation (Framer Motion springs for performance)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.2 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  // Position of glow highlight
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinate from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    // Set rotation degrees (max 10 degrees tilt)
    x.set(relativeX * 10);
    y.set(-relativeY * 10);

    // Glow position (percentage: 0 to 100)
    setGlowPos({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={clsx(
        "relative select-none transform-gpu group transition-shadow duration-300",
        className
      )}
    >
      {/* 3D Glass Glow effect */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent)`,
          mixBlendMode: "screen",
        }}
      />
      
      {/* Inner wrapper to add depth to children */}
      <div className="h-full w-full rounded-[inherit] overflow-hidden border border-gold/10 group-hover:border-gold/30 transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  );
}
