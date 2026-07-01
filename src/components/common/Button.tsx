"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from cursor to center of button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Scale down force for smooth magnetic effect (max pull around 12px)
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative px-8 py-3.5 rounded-full font-outfit text-xs md:text-sm font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 inline-flex items-center justify-center text-center select-none cursor-pointer";
  
  const variants = {
    primary: "bg-gold text-dark-bg border border-gold hover:bg-gold-hover hover:border-gold-hover hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]",
    secondary: "bg-white text-dark-bg border border-white hover:bg-zinc-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]",
    outline: "bg-transparent text-white border border-gold/40 hover:border-gold hover:text-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]",
  };

  const elementContent = (
    <motion.span
      className="relative z-10 flex items-center justify-center gap-2 pointer-events-none"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.1 }}
    >
      {children}
    </motion.span>
  );

  const eventHandlers = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
  };

  if (href) {
    if (external) {
      return (
        <a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(baseClasses, variants[variant], className)}
          {...eventHandlers}
        >
          {elementContent}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={clsx(baseClasses, variants[variant], className)}
        {...eventHandlers}
      >
        {elementContent}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      className={clsx(baseClasses, variants[variant], className)}
      {...eventHandlers}
    >
      {elementContent}
    </button>
  );
}
