"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ACADEMY_GALLERY } from "@/constants/danceData";
import { TRAINING_BRANCHES } from "@/data/trainingBranches";
import Button from "@/components/common/Button";
import BranchCard from "./BranchCard";

export default function TrainingBranches() {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? ACADEMY_GALLERY : ACADEMY_GALLERY.slice(0, 3);

  return (
    <section className="bg-dark-bg py-20 border-y border-gold/10 relative overflow-hidden">
      {/* Background visual overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/2 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Logo beside */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 gap-4">
          
          {/* Logo and Badge Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3.5 mb-2 flex-wrap"
          >
            {/* Academy Logo */}
            <div className="relative w-28 h-20 rounded-xl overflow-hidden border border-gold/15 bg-white/5 shadow-md flex items-center justify-center p-1">
              <Image
                src="/assets/academy-logo.jpg"
                alt="Shivom Cultural Academy Logo"
                fill
                sizes="112px"
                className="object-contain"
                priority
              />
            </div>
            
            <span className="text-[10px] md:text-xs font-outfit font-extrabold tracking-[0.25em] uppercase text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 glow-gold-sm mt-2 sm:mt-0">
              Our Academy
            </span>
          </motion.div>

          {/* Heading Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit text-3xl md:text-5xl font-black tracking-tight text-white uppercase"
          >
            Shivom Cultural Academy
          </motion.h2>

          {/* Subtitle Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent my-1"
          />

          {/* Subtitle text */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-outfit text-gold text-xs md:text-sm font-extrabold tracking-widest uppercase"
          >
            Professional Dance Training • Creative Choreography • Performance Excellence
          </motion.h3>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-2xl mt-2 font-medium"
          >
            Shivom Cultural Academy is dedicated to nurturing dancers of all ages through professional training, creative choreography, and performance-based learning. With multiple training centers across Bengaluru, the academy provides students with opportunities to build confidence, master various dance styles, and perform on prestigious stages.
          </motion.p>
        </div>

        {/* Branch Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {TRAINING_BRANCHES.map((branch, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={branch.id}
              className="h-full"
            >
              <BranchCard branch={branch} />
            </motion.div>
          ))}
        </div>

        {/* Our Academy Spaces Gallery */}
        <div className="mt-20 pt-16 border-t border-gold/10 w-full">
          <div className="max-w-5xl mx-auto">
            {/* Gallery Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-outfit text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight leading-none mb-3"
              >
                Our Academy Spaces
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-400 text-xs md:text-sm font-medium"
              >
                Take a look inside our classroom studios, training workshops, and academy setups.
              </motion.p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedImages.map((img, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-gold/10 group cursor-pointer shadow-md"
                >
                  <Image
                    src={img}
                    alt={`Academy space photo ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Glow border overlay */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-gold/35 rounded-2xl pointer-events-none transition-colors duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Toggle See More Button */}
            {ACADEMY_GALLERY.length > 3 && (
              <div className="text-center mt-10">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(!showAll)}
                  className="mx-auto"
                >
                  {showAll ? (
                    <>
                      See Less <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      See More <ChevronDown size={16} />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
