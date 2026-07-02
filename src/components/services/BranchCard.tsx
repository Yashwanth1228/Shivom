"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { TrainingBranch } from "@/data/trainingBranches";
import Button from "@/components/common/Button";

interface BranchCardProps {
  branch: TrainingBranch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass p-6 md:p-8 rounded-3xl border border-gold/10 hover:border-gold/30 hover:shadow-[0_15px_30px_rgba(212,175,55,0.12)] transition-all duration-500 flex flex-col justify-between h-full group relative overflow-hidden"
    >
      {/* Decorative backdrop glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-gold/2 rounded-full filter blur-2xl group-hover:bg-gold/5 transition-colors duration-500 pointer-events-none" />
      
      <div>
        {/* Logo and Academy Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-white/5 bg-white/5 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
            <Image
              src={branch.logo}
              alt={branch.academyName}
              fill
              sizes="64px"
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest leading-none">
              {branch.academyName}
            </span>
            <h3 className="font-outfit text-lg md:text-xl font-bold text-white mt-1.5 transition-colors duration-300 group-hover:text-gold">
              {branch.branchName}
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
          {branch.description}
        </p>
      </div>

      {/* Location and CTA Button */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 text-zinc-400 text-xs md:text-sm mb-6 font-medium">
          <MapPin size={16} className="text-gold" />
          <span>Bengaluru, Karnataka, India</span>
        </div>

        <Button
          href={branch.mapLink}
          external
          variant="outline"
          className="w-full justify-center gap-2 hover:bg-gold! hover:text-dark-bg! hover:border-gold! hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]!"
        >
          <Navigation size={14} className="transition-transform duration-300 group-hover:rotate-12" />
          Get Directions
        </Button>
      </div>
    </motion.div>
  );
}
