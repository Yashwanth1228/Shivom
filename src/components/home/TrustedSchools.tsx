"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TRUSTED_SCHOOLS } from "@/data/trustedSchools";
import SectionHeading from "@/components/common/SectionHeading";
import { GraduationCap } from "lucide-react";

export default function TrustedSchools() {
  return (
    <section className="bg-dark-bg py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold/2 rounded-full filter blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Trusted by Leading Schools"
          subtitle="Proudly mentoring and inspiring students across reputed educational institutions through professional dance training and choreography."
          badge="Educational Partners"
        />

        {/* Schools Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TRUSTED_SCHOOLS.map((school, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              key={school.id}
              className="glass rounded-3xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-[0_15px_30px_rgba(212,175,55,0.12)] transition-all duration-500 flex flex-col group h-full shadow-md relative"
            >
              {/* Card Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between relative z-10 h-full">
                <div>
                  {/* Logo and School Name header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    {school.logo && (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={school.logo}
                          alt={school.name}
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <h3 className="font-outfit text-base md:text-lg font-bold text-white transition-colors duration-300 group-hover:text-gold">
                      {school.name}
                    </h3>
                  </div>
                  
                  {/* School Description */}
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                    {school.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
