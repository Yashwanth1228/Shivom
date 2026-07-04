"use client";

import { motion } from "framer-motion";

interface DeveloperHeaderProps {
  name: string;
  role: string;
}

export default function DeveloperHeader({ name, role }: DeveloperHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      {/* Floating Circular Initials Avatar */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/30 via-gold to-gold-hover flex items-center justify-center border-2 border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.25)] relative overflow-hidden group mb-4 cursor-default select-none"
      >
        {/* Shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        <span className="font-outfit text-2xl font-black text-dark-bg tracking-wide uppercase select-none">
          YS
        </span>
      </motion.div>

      {/* Developer Identification */}
      <h3 className="font-outfit text-xl md:text-2xl font-black text-white leading-tight tracking-tight uppercase">
        {name}
      </h3>
      <span className="font-outfit text-[10px] md:text-xs font-bold tracking-[0.2em] text-gold uppercase mt-1 leading-none">
        {role}
      </span>
    </div>
  );
}
