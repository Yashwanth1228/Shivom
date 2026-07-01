"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = ["Actor", "Dance Instructor", "Choreographer"];

export default function HeroTypewriter() {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[index];
    let timer: any;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 45);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === fullText) {
      // Pause when the word is fully typed
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  return (
    <div className="h-12 md:h-16 flex items-center">
      <span className="text-2xl md:text-4.5xl font-outfit font-extrabold text-gold tracking-wide glow-text-gold">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="w-0.75 h-7 md:h-10 bg-gold ml-1 inline-block glow-gold-sm"
      />
    </div>
  );
}
