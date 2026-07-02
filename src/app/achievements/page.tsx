"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Award, Star, Tv, Heart, Users, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import {
  TIMELINE_MILESTONES,
  REALITY_SHOWS,
  GALLERY_IMAGES,
} from "@/constants/danceData";

export default function Achievements() {
  const [showAllGallery, setShowAllGallery] = useState(false);
  
  // Timeline container ref for scroll-drawing line
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Toggle see more gallery
  const displayedGallery = showAllGallery ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 6);

  return (
    <div className="relative overflow-hidden bg-dark-bg min-h-screen">
      {/* Background Orbits */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-gold/3 rounded-full filter blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-gold/4 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Banner */}
      <PageBanner
        title="Landmarks & Achievements"
        subtitle="A vertical timeline of career milestones, reality television training, and live gallery showcases."
        badge="Accolades & Milestones"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-24">
        
        {/* 1. PROFESSIONAL TIMELINE */}
        <section>
          <SectionHeading
            title="The Career Timeline"
            subtitle="Follow the step-by-step evolution of Shivaraj S from foundational student to academy director."
            badge="Career Journey"
          />

          <div ref={timelineRef} className="relative w-full max-w-4xl mx-auto mt-16 pb-12">
            {/* Center Line for Desktop, Left Line for Mobile */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
            
            {/* Drawing Line */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold-hover to-gold/40 origin-top -translate-x-1/2 glow-gold-sm"
            />

            {/* Milestones Loop */}
            <div className="flex flex-col gap-12 md:gap-20">
              {TIMELINE_MILESTONES.map((milestoneItem, idx) => {
                const milestone = milestoneItem as any;
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-gold -translate-x-1/2 top-1.5 z-10 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                    </div>

                    {/* Timeline Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 35 : -35, y: 15 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        boxShadow: "0px 4px 20px rgba(212, 175, 55, 0.12)",
                        borderColor: "rgba(212, 175, 55, 0.35)",
                      }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.6, delay: 0.05 }}
                      className="ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[45%] glass p-6 rounded-2xl border border-gold/10 hover:border-gold/50 hover:shadow-[0_0_22px_rgba(212,175,55,0.22)] transition-all duration-500 shadow-md group relative"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-outfit text-gold font-extrabold text-lg tracking-wider">
                          {milestone.year}
                        </span>
                        <span className="text-[10px] text-zinc-400 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {milestone.badge}
                        </span>
                      </div>

                      <h3 className="font-outfit text-white font-bold text-lg md:text-xl mb-1 group-hover:text-gold transition-colors duration-300">
                        {milestone.title}
                      </h3>

                      {milestone.subtitle && (
                        <h4 className="text-gold text-xs font-semibold mb-3 tracking-wide uppercase">
                          {milestone.subtitle}
                        </h4>
                      )}

                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {milestone.website && (
                        <a
                          href={milestone.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-wider hover:text-white transition-colors duration-300"
                        >
                          <span>Visit Website</span>
                          <span className="text-[10px]">&rarr;</span>
                        </a>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 2. REALITY SHOWS TIMELINE */}
        <section className="bg-dark-card border-y border-gold/10 py-16 -mx-6 md:-mx-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Reality Television & Award Shows"
              subtitle="Highlight reels of choreography and live performances on South India's largest television stages."
              badge="TV Appearances"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {REALITY_SHOWS.map((show, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  key={idx}
                  className="glass p-5 rounded-2xl flex flex-col sm:flex-row gap-5 hover:border-gold/30 transition-all duration-300 group shadow-md"
                >
                  {/* Show image */}
                  <div className="relative w-full sm:w-36 h-40 sm:h-auto aspect-video sm:aspect-square rounded-xl overflow-hidden flex-shrink-0 border border-gold/10">
                    <Image
                      src={show.image}
                      alt={show.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 144px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Show info */}
                  <div className="flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Tv size={16} className="text-gold" />
                        <span className="text-[10px] text-gold font-bold uppercase tracking-widest">
                          {show.role}
                        </span>
                      </div>
                      <h3 className="font-outfit text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                        {show.name}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                        {show.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ADDITIONAL SERVICES / SPECIALIZATIONS */}
        <section>
          <SectionHeading
            title="Premium Performance Areas"
            subtitle="Providing choreography and coordination excellence across selective high-tier niches."
            badge="Performance Domains"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart size={32} className="text-gold" />,
                title: "Wedding Choreography",
                desc: "High-end designer sangeets, bridal entries, and custom-edited couple soundtracks.",
              },
              {
                icon: <Briefcase size={32} className="text-gold" />,
                title: "Corporate Shows",
                desc: "Polished routines for business galas, executive entries, and team builder flashmobs.",
              },
              {
                icon: <Users size={32} className="text-gold" />,
                title: "School Programs",
                desc: "Theme-based choreography scripts for annual days, fests, and cultural medleys.",
              },
              {
                icon: <Star size={32} className="text-gold" />,
                title: "Celebrity Training",
                desc: "One-on-one personal style workshops and acting/expression guides for film auditions.",
              },
            ].map((area, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                key={idx}
                className="glass p-6 rounded-2xl text-left border border-gold/10 hover:border-gold/30 hover:scale-102 transition-all duration-300 flex flex-col gap-4 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center border border-gold/10 group-hover:border-gold/20 transition-colors duration-300">
                  {area.icon}
                </div>
                <div>
                  <h3 className="font-outfit text-white font-bold text-base md:text-lg mb-1 group-hover:text-gold transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. PERFORMANCE GALLERY */}
        <section className="bg-dark-card border border-gold/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/3 rounded-full filter blur-[80px]" />
          
          <SectionHeading
            title="Performance Gallery"
            subtitle="Visual showcases of dance sequences, academy workshops, and television recordings."
            badge="Visual Gallery"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {displayedGallery.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                key={idx}
                className="relative aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-gold/10 group cursor-pointer shadow-md"
              >
                <Image
                  src={img}
                  alt={`Performance photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Glow border overlay */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/35 rounded-2xl pointer-events-none transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => setShowAllGallery(!showAllGallery)}
              variant="outline"
              className="gap-2"
            >
              {showAllGallery ? (
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
        </section>

      </div>
    </div>
  );
}
