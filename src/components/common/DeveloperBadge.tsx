"use client";

import { motion } from "framer-motion";

interface DeveloperBadgeProps {
  skill: string;
}

export default function DeveloperBadge({ skill }: DeveloperBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="glass px-3.5 py-1.5 rounded-full text-xs font-outfit text-white font-semibold border border-gold/15 hover:border-gold/45 hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] hover:text-gold transition-colors duration-300 cursor-default select-none inline-block"
    >
      {skill}
    </motion.span>
  );
}
