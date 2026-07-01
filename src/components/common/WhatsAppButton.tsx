"use client";

import { FaWhatsapp } from "react-icons/fa";
import { PERSONAL_INFO } from "@/constants/danceData";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hello%20Shivaraj,%20I%27d%20love%20to%20discuss%20a%20choreography%20or%20performance%20project!`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-gold hover:to-gold-hover text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 group select-none hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] border border-white/10"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping group-hover:bg-gold/20" />
      <FaWhatsapp size={32} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
}
