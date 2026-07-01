"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageBanner({ title, subtitle, badge }: PageBannerProps) {
  return (
    <section className="relative min-h-[42vh] flex items-center justify-center pt-28 pb-14 overflow-hidden bg-dark-bg border-b border-gold/10">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold/4 rounded-full filter blur-[130px] pointer-events-none" />
      
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-8 md:left-24 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-8 md:right-24 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none" />

      {/* Floating abstract gold border rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -top-16 -left-16 w-72 h-72 border border-gold/5 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 border border-gold/5 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] md:text-xs font-outfit font-extrabold tracking-[0.3em] uppercase text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 glow-gold-sm mb-4"
          >
            {badge}
          </motion.span>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-outfit text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase"
        >
          {title}
        </motion.h1>

        {/* Dynamic separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-[1px] w-28 bg-gradient-to-r from-transparent via-gold to-transparent my-1"
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-xs md:text-sm font-medium tracking-wide max-w-xl mt-2 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.35 }}
          className="flex items-center gap-2 mt-5 text-[10px] text-zinc-500 font-outfit uppercase tracking-widest"
        >
          <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">{title}</span>
        </motion.div>
      </div>
    </section>
  );
}
