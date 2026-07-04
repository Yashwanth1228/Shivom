"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface DeveloperContactCardProps {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function DeveloperContactCard({
  icon: Icon,
  title,
  value,
  href,
  external = false,
}: DeveloperContactCardProps) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.a
      href={href}
      {...linkProps}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="glass p-4 rounded-xl border border-gold/10 hover:border-gold/30 hover:shadow-[0_4px_15px_rgba(212,175,55,0.1)] flex items-center justify-between group transition-all duration-300 w-full"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Icon wrapper with hover scale/rotate */}
        <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center border border-gold/15 group-hover:border-gold/25 transition-colors duration-300 flex-shrink-0">
          <div className="text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Icon size={18} />
          </div>
        </div>

        {/* Text values */}
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-outfit font-extrabold uppercase tracking-widest text-zinc-400 leading-none mb-1.5">
            {title}
          </span>
          <span className="text-xs md:text-sm font-semibold text-white truncate max-w-[180px] sm:max-w-[260px] leading-none">
            {value}
          </span>
        </div>
      </div>

      {/* Redirect arrow icon */}
      <ArrowUpRight
        size={16}
        className="text-zinc-500 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
      />
    </motion.a>
  );
}
