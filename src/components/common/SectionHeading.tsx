"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  badge?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  badge,
  className,
}: SectionHeadingProps) {
  // Staggered letter variants for typing title
  const letters = Array.from(title);
  
  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut" as const,
      },
    },
  };

  // Word reveal for subtitle
  const words = subtitle ? subtitle.split(" ") : [];

  const subtitleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: title.length * 0.03 + 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div
      className={clsx(
        "flex flex-col gap-3 mb-10 md:mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center items-center justify-center",
        align === "left" && "text-left items-start",
        align === "right" && "ml-auto text-right items-end",
        className
      )}
    >
      {/* Small badge */}
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[10px] md:text-xs font-outfit font-extrabold tracking-[0.25em] uppercase text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 glow-gold-sm"
        >
          {badge}
        </motion.span>
      )}

      {/* Typing title */}
      <motion.h2
        variants={titleContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="font-outfit text-3xl md:text-4.5xl font-extrabold tracking-tight text-white flex flex-wrap gap-y-1"
        style={{ justifyContent: align === "center" ? "center" : "flex-start" }}
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Underline decorative bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "65px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-0.5 bg-gradient-to-r from-gold to-gold-hover rounded-full glow-gold-sm mt-1 mb-2"
      />

      {/* Subtitle / Paragraph with smooth word reveal */}
      {subtitle && (
        <motion.p
          variants={subtitleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="text-zinc-400 text-sm md:text-base leading-relaxed flex flex-wrap gap-x-1.5 gap-y-0.5 justify-center"
          style={{ justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start" }}
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.p>
      )}
    </div>
  );
}
