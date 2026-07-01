"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { PERSONAL_INFO } from "@/constants/danceData";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hello%20Shivaraj,%20I'd%20love%20to%20discuss%20booking%20a%20performance/choreography%20slot!`;

  return (
    <div className="relative overflow-hidden bg-dark-bg min-h-screen">
      {/* Background Orbits */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-gold/4 rounded-full filter blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-gold/3 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Banner */}
      <PageBanner
        title="Get in Touch"
        subtitle="Book custom wedding choreographies, corporate masterclasses, and visual stage performances."
        badge="Contact Details"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col gap-16">
        
        {/* 1. CINEMA GROUP LANDSCAPE IMAGE */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gold/15 glow-gold-sm group"
        >
          {/* Cinema style overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/40 z-10" />
          <Image
            src="/assets/contact-group.jpg"
            alt="Shivaraj S with troupe stage performance holding trophies"
            fill
            sizes="100vw"
            priority
            className="object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
          />
          {/* Absolute title banner overlays */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
            <span className="text-[10px] md:text-xs font-outfit font-extrabold tracking-[0.25em] text-gold uppercase bg-dark-bg/60 backdrop-blur px-3 py-1 rounded border border-gold/15">
              Live Showcase
            </span>
            <h2 className="font-outfit text-xl md:text-3.5xl font-black text-white uppercase mt-2 leading-none text-shadow-md">
              Shiv's Cultural Academy Ensemble
            </h2>
          </div>
        </motion.section>

        {/* 2. CONTACT DETAILS CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Phone size={24} className="text-gold" />,
              title: "Call Direct",
              value: PERSONAL_INFO.phone,
              href: `tel:+918217705531`,
              label: "Make a Call",
            },
            {
              icon: <Mail size={24} className="text-gold" />,
              title: "Email Inquiries",
              value: PERSONAL_INFO.email,
              href: `mailto:${PERSONAL_INFO.email}`,
              label: "Send Email",
            },
            {
              icon: <MapPin size={24} className="text-gold" />,
              title: "Academy Address",
              value: PERSONAL_INFO.address,
              href: `https://wa.me/${PERSONAL_INFO.whatsappNumber}`,
              label: "Chat for Directions",
            },
          ].map((card, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="glass p-6 rounded-2xl flex flex-col gap-4 border border-gold/10 hover:border-gold/30 hover:scale-102 transition-all duration-300 shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center border border-gold/15 group-hover:border-gold/25 transition-colors duration-300">
                {card.icon}
              </div>
              <div>
                <h3 className="font-outfit text-zinc-400 font-extrabold text-xs uppercase tracking-widest mb-1.5">
                  {card.title}
                </h3>
                <p className="font-outfit text-white font-bold text-base md:text-lg mb-4 group-hover:text-gold transition-colors duration-300">
                  {card.value}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1 text-xs text-gold font-bold uppercase tracking-wider hover:text-white transition-colors duration-300"
                >
                  <span>{card.label}</span>
                  <span className="text-[10px]">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* 3. BOOKING CTA BLOCK */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-14 rounded-3xl text-center flex flex-col items-center justify-center border border-gold/20 relative overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-gold/2 rounded-full filter blur-[50px] pointer-events-none" />

          <Calendar size={42} className="text-gold mb-6 animate-pulse" />

          <SectionHeading
            title="Book Your Performance"
            subtitle="Let's bring custom routines, cinematic choreographies, or intensive workshops to your event."
            align="center"
            className="mb-8!"
          />

          <p className="text-zinc-400 text-xs md:text-sm max-w-xl -mt-6 mb-8 leading-relaxed">
            We schedule premium wedding couples, corporate acts, and masterclass sessions 3-6 months in advance. Reach out with your tentative dates to secure a slot in Shivaraj's itinerary.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button href={whatsappUrl} external variant="primary" className="gap-2">
              <MessageSquare size={16} /> Chat on WhatsApp
            </Button>
            <Button href={`mailto:${PERSONAL_INFO.email}`} variant="outline">
              Email to Book
            </Button>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
