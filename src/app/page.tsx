"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Sparkles, Activity } from "lucide-react";
import HeroTypewriter from "@/components/home/HeroTypewriter";
import Counter from "@/components/common/Counter";
import SectionHeading from "@/components/common/SectionHeading";
import TiltCard from "@/components/common/TiltCard";
import Button from "@/components/common/Button";
import {
  PERSONAL_INFO,
  STATISTICS,
  DANCE_STYLES,
  FEATURED_ACHIEVEMENTS,
  SERVICES,
} from "@/constants/danceData";
import TrustedSchools from "@/components/home/TrustedSchools";

export default function Home() {
  // Tagline word reveal animation
  const taglineWords = PERSONAL_INFO.tagline.split(" ");
  const taglineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-dark-bg pt-20">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-87.5 h-87.5 bg-gold/3 rounded-full filter blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5"
            >
              <span className="h-[4px] w-20 bg-gold glow-gold-sm" />
              <span className="font-outfit text-xl md:text-3xl font-black tracking-[0.25em] text-gold uppercase">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-outfit text-5xl md:text-7xl font-black tracking-tight text-white uppercase -mt-2 leading-none"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <HeroTypewriter />
            </motion.div>

            {/* Tagline word reveal */}
            <motion.div
              variants={taglineVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-zinc-300 text-base md:text-lg leading-relaxed flex flex-wrap gap-x-2 my-2 font-medium"
            >
              {taglineWords.map((word, idx) => (
                <motion.span key={idx} variants={wordVariants}>
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              <Button href="/achievements" variant="primary">
                Explore My Journey <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="outline">
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-105 aspect-4/5">
              {/* Abstract decorative floating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-36 h-36 border border-gold/15 rounded-full pointer-events-none z-0"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-44 h-44 border border-gold/10 rounded-full pointer-events-none z-0"
              />

              {/* Premium Gradient Background Blur */}
              <div className="absolute inset-0 bg-linear-to-tr from-gold/10 via-transparent to-gold/5 rounded-2xl filter blur-xl -z-10" />

              {/* 3D Tilt Card containing Hero Portrait */}
              <TiltCard className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gold/15 glow-gold-sm">
                <Image
                  src="/assets/checked-portrait.jpg"
                  alt="Shivaraj S Portrait holding a glowing sphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </TiltCard>

              {/* Floating micro badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-12 -left-8 glass px-4 py-2 rounded-xl border border-gold/20 flex items-center gap-2.5 shadow-lg z-20"
              >
                <Sparkles size={16} className="text-gold" />
                <span className="font-outfit text-xs font-bold tracking-wider text-white">
                  CHOREOGRAPHER
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-16 -right-6 glass px-4 py-2 rounded-xl border border-gold/20 flex items-center gap-2.5 shadow-lg z-20"
              >
                <Award size={16} className="text-gold animate-pulse" />
                <span className="font-outfit text-xs font-bold tracking-wider text-white">
                  ACTOR
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="bg-dark-card border-y border-gold/10 py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Biography Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <SectionHeading
                title="Who is Shivaraj S?"
                subtitle="Unveiling the artistry, vision, and dedication behind the performance."
                align="left"
                badge="Biography Preview"
                className="mb-6!"
              />

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                {PERSONAL_INFO.bioShort}
              </p>

              <div className="my-4">
                <Button href="/about" variant="outline">
                  Read Full Biography <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>

            {/* Counters / Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-gold/5 rounded-2xl filter blur-xl pointer-events-none -z-10" />
              {STATISTICS.map((stat, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="glass p-6 rounded-2xl text-center flex flex-col gap-2 hover:border-gold/30 hover:scale-102 transition-all duration-300 shadow-md group"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="text-zinc-400 text-xs font-outfit uppercase tracking-widest group-hover:text-gold transition-colors duration-300">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY LEADING SCHOOLS */}
      <TrustedSchools />

      {/* 3. DANCE STYLES SECTION */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          title="Curated Dance Styles"
          subtitle="Explore the signature vocabularies of rhythm, motion, and storytelling."
          badge="Specializations"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DANCE_STYLES.map((style, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={style.id}
              className="relative rounded-2xl overflow-hidden aspect-4/5 border border-gold/15 group shadow-lg cursor-pointer"
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-dark-bg/40 to-transparent z-10 transition-colors duration-300 group-hover:from-dark-bg/95 group-hover:via-dark-bg/70" />

              {/* Background Image */}
              <Image
                src={style.image}
                alt={style.title}
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Text Info */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <span className="text-xs font-outfit text-gold uppercase tracking-widest font-extrabold mb-1">
                  Style
                </span>
                <h3 className="font-outfit text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {style.title}
                </h3>
                {/* Description reveal on hover */}
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {style.description}
                </p>
              </div>

              {/* Border Glow Reflection */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 rounded-2xl pointer-events-none transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED ACHIEVEMENTS */}
      <section className="bg-dark-card border-y border-gold/10 py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Television & Stage Landmarks"
            subtitle="Highlights of national choreography awards, star training, and milestone events."
            badge="Milestones"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {FEATURED_ACHIEVEMENTS.map((ach, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={ach.id}
                className="glass rounded-2xl overflow-hidden flex flex-col hover:border-gold/30 transition-all duration-300 group shadow-lg"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden border-b border-gold/10">
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full border border-gold/25 text-[10px] font-outfit uppercase tracking-wider text-gold font-bold z-10">
                    {ach.badge}
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-outfit text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                    {ach.title}
                  </h3>
                  <h4 className="text-gold text-xs font-semibold mb-3 tracking-wide">
                    {ach.subtitle}
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed grow">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/achievements" variant="outline">
              View More Milestones <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. FEATURED SERVICES */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          title="Choreography Services"
          subtitle="Explore bespoke training packages, elite stage choreography, and conceptual coordination."
          badge="Our Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.slice(0, 2).map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={service.id}
              className="glass p-6 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-gold/30 transition-all duration-300 group shadow-md"
            >
              {/* Image */}
              <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden shrink-0 border border-gold/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="192px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text info */}
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-outfit text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.details.slice(0, 3).map((item, id) => (
                    <span
                      key={id}
                      className="text-[10px] text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="primary">
            Explore All Services <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>
      </section>
    </div>
  );
}
