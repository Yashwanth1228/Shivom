"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MessageCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { developer } from "@/data/developer";
import DeveloperHeader from "./DeveloperHeader";
import DeveloperBadge from "./DeveloperBadge";
import DeveloperContactCard from "./DeveloperContactCard";
import DeveloperCTA from "./DeveloperCTA";

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Click outside handler
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex justify-center items-start md:items-center p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container Card */}
          <motion.div
            ref={modalRef}
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="relative w-full max-w-[520px] max-h-[90vh] md:max-h-[85vh] bg-dark-bg/95 border border-gold/20 rounded-[24px] shadow-[0_10px_50px_rgba(0,0,0,0.85)] p-6 md:p-8 overflow-y-auto! my-auto scrollbar-thin scrollbar-thumb-gold/20 select-text"
          >
            {/* Backdrop gold corner blurs */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-gold/5 rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gold/5 rounded-full filter blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-gold transition-colors duration-300 p-2 rounded-full hover:bg-white/5 cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* 1. Header Area */}
            <DeveloperHeader name={developer.name} role={developer.role} />

            {/* Content container */}
            <div>
              
              {/* 2. About Section */}
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 text-center font-medium">
                {developer.bio}
              </p>

              {/* 3. Specialization (Badges) */}
              <div className="mb-6">
                <h4 className="font-outfit text-[10px] font-extrabold uppercase tracking-widest text-zinc-300 mb-3 text-center">
                  Specialization
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {developer.skills.map((skill, idx) => (
                    <DeveloperBadge key={idx} skill={skill} />
                  ))}
                </div>
              </div>

              {/* 4. Contact Cards */}
              <div className="mb-6">
                <h4 className="font-outfit text-[10px] font-extrabold uppercase tracking-widest text-zinc-300 mb-3 text-center">
                  Get in Touch
                </h4>
                <div className="flex flex-col gap-3">
                  <DeveloperContactCard
                    icon={FaLinkedin}
                    title="LinkedIn"
                    value="Yashwanth Suresh"
                    href={developer.linkedin}
                    external
                  />
                  <DeveloperContactCard
                    icon={FaGithub}
                    title="GitHub"
                    value="Yashwanth1228"
                    href={developer.github}
                    external
                  />
                  <DeveloperContactCard
                    icon={Mail}
                    title="Email"
                    value={developer.email}
                    href={`mailto:${developer.email}`}
                  />
                  <DeveloperContactCard
                    icon={Phone}
                    title="Phone"
                    value={developer.phone}
                    href={`tel:${developer.phone.replace(/\s+/g, "")}`}
                  />
                  <DeveloperContactCard
                    icon={MessageCircle}
                    title="WhatsApp"
                    value={developer.whatsapp}
                    href={`https://wa.me/${developer.whatsapp.replace(/[^0-9]/g, "")}`}
                  />
                </div>
              </div>

              {/* 5. Bottom CTA Area */}
              <DeveloperCTA
                portfolioUrl={developer.portfolio}
                whatsappUrl={`https://wa.me/${developer.whatsapp.replace(/[^0-9]/g, "")}`}
              />

              {/* 6. Availability Status */}
              <div className="text-center mt-2">
                <span className="font-outfit text-[10px] md:text-xs font-extrabold tracking-wider text-gold bg-gold/5 border border-gold/15 px-4 py-1.5 rounded-full select-none inline-block shadow-sm">
                  {developer.status}
                </span>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
