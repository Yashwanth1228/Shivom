"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, BookOpen, Music, Check, ChevronDown, ChevronUp } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { SERVICES, SERVICES_GALLERY } from "@/constants/danceData";
import TrainingBranches from "@/components/services/TrainingBranches";

export default function ServicesPage() {
  const [showAllShowcase, setShowAllShowcase] = useState(false);

  // Performance Images (using decoupled services gallery)
  const displayedShowcase = showAllShowcase ? SERVICES_GALLERY : SERVICES_GALLERY.slice(0, 6);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "srv-wedding":
        return <Music className="text-gold" size={24} />;
      case "srv-corporate":
        return <Calendar className="text-gold" size={24} />;
      case "srv-school":
        return <Sparkles className="text-gold" size={24} />;
      case "srv-workshop":
        return <BookOpen className="text-gold" size={24} />;
      default:
        return <Sparkles className="text-gold" size={24} />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-dark-bg min-h-screen">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-gold/4 rounded-full filter blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-gold/3 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Banner */}
      <PageBanner
        title="Choreography Services"
        subtitle="Immersive wedding sangeets, synchronized corporate team-builders, school productions, and elite masterclasses."
        badge="Packages & Bookings"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-24">
        
        {/* 1. SERVICES GRID */}
        <section>
          <SectionHeading
            title="Premium Coaching & Staging"
            subtitle="Tailored concepts, high synchronization, and professional coaching for stages of all scales."
            badge="Offerings"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {SERVICES.map((srv, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={srv.id}
                className="glass p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center border border-gold/15 group-hover:border-gold/25 transition-colors duration-300">
                      {getServiceIcon(srv.id)}
                    </div>
                    <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                      Premium Service
                    </span>
                  </div>

                  {/* Title and Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                    {/* Text block */}
                    <div className="md:col-span-7 flex flex-col gap-2">
                      <h3 className="font-outfit text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                        {srv.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    {/* Image block */}
                    <div className="md:col-span-5 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-gold/10">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  <hr className="border-gold/10 my-4" />

                  {/* Key Deliverables Bullet Points */}
                  <div>
                    <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-zinc-300 mb-3">
                      What's Included:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {srv.details.map((detail, id) => (
                        <li key={id} className="flex items-center gap-2.5 text-zinc-400 text-xs md:text-sm">
                          <div className="w-4 h-4 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                            <Check size={10} className="text-gold" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action button inside card */}
                <div className="mt-8 text-left">
                  <Button href="/contact" variant="outline" className="w-full sm:w-auto">
                    Inquire Packages
                  </Button>
                </div>

              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* 2. SHIVOM CULTURAL ACADEMY */}
      <TrainingBranches />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        {/* 3. PERFORMANCE SHOWCASE */}
        <section className="bg-dark-card border border-gold/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gold/3 rounded-full filter blur-[80px]" />

          <SectionHeading
            title="Show & Performance Gallery"
            subtitle="Action shots of group synchronization, corporate masterclasses, and theatrical wedding sequences."
            badge="Performance Captures"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {displayedShowcase.map((img, idx) => (
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
                  alt={`Service performance ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/35 rounded-2xl pointer-events-none transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => setShowAllShowcase(!showAllShowcase)}
              variant="outline"
              className="gap-2"
            >
              {showAllShowcase ? (
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
