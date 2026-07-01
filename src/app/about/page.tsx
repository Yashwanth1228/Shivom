"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Flame, Quote } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import TiltCard from "@/components/common/TiltCard";
import SectionHeading from "@/components/common/SectionHeading";
import { PERSONAL_INFO } from "@/constants/danceData";

export default function About() {
  const [activeTab, setActiveTab] = useState<"summary" | "experience" | "education" | "strengths">("summary");

  const tabContent = {
    summary: {
      icon: <Award className="text-gold" size={20} />,
      title: "Professional Summary",
      content: (
        <div className="flex flex-col gap-4 text-zinc-300 text-sm md:text-base leading-relaxed">
          <p>
            {PERSONAL_INFO.bioLong}
          </p>
          <p>
            Through deep immersion in choreographic composition, Shivaraj specializes in mapping visual storyboards to audio sequences. His work is recognized for clean geometry, high synchronization, and an ability to make even novice dancers feel graceful and energetic on stage.
          </p>
        </div>
      ),
    },
    experience: {
      icon: <Briefcase className="text-gold" size={20} />,
      title: "Key Experience",
      content: (
        <div className="flex flex-col gap-6">
          {[
            {
              role: "Academy Director & Choreographer",
              place: "Shiv's Cultural Academy, Bangalore",
              duration: "2019 - Present",
              desc: "Lead instruction, curriculum design, and performance training for school programs, college competitions, and corporate shows. Choreographed over 100 grand sangeets.",
            },
            {
              role: "Television Choreographer & Performer",
              place: "Regional TV Channels (ETV, Zee, Star)",
              duration: "2018 - Present",
              desc: "Conceptualized and staged weekly competitive dance numbers. Trained celebrity contestants and managed troupe backup choreography under tight production schedules.",
            },
            {
              role: "Dance Instructor & Freelance Choreographer",
              place: "Various Schools & Studios, Bangalore",
              duration: "2014 - 2019",
              desc: "Trained students in modern Bollywood, contemporary basics, and folk dance forms. Developed high-intensity dance fitness masterclasses.",
            },
          ].map((exp, idx) => (
            <div key={idx} className="border-l-2 border-gold/30 pl-4 relative">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold glow-gold-sm" />
              <h4 className="font-outfit text-white font-bold text-base md:text-lg">{exp.role}</h4>
              <div className="flex justify-between text-zinc-400 text-xs md:text-sm font-medium mb-2">
                <span>{exp.place}</span>
                <span className="text-gold">{exp.duration}</span>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    education: {
      icon: <GraduationCap className="text-gold" size={20} />,
      title: "Training & Education",
      content: (
        <div className="flex flex-col gap-6">
          {[
            {
              course: "Professional Acting & Method Training",
              academy: "Renowned Acting Academy, Bangalore",
              year: "2019",
              details: "Studied body language, facial expression, voice modulation, and stage presence, seamlessly integrating character performance with dance.",
            },
            {
              course: "Advanced Contemporary & Jazz Intensive",
              academy: "Distinguished Dance Studios",
              year: "2016",
              details: "Completed masterclasses in contact improvisation, floor-work, lyrical contemporary, and jazz alignment fundamentals.",
            },
            {
              course: "Traditional Folk & Bollywood Styles",
              academy: "Under Veteran Masters",
              year: "2012 - 2015",
              details: "Rigorous foundational training in classical Indian postures, regional folk forms (Dandia, Garba, Yakshagana fusion), and commercial cinematic style.",
            },
          ].map((edu, idx) => (
            <div key={idx} className="border-l-2 border-gold/30 pl-4 relative">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold glow-gold-sm" />
              <h4 className="font-outfit text-white font-bold text-base md:text-lg">{edu.course}</h4>
              <div className="flex justify-between text-zinc-400 text-xs md:text-sm font-medium mb-2">
                <span>{edu.academy}</span>
                <span className="text-gold">{edu.year}</span>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      ),
    },
    strengths: {
      icon: <Flame className="text-gold" size={20} />,
      title: "Core Strengths",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Cinematic Choreography", desc: "Expert at crafting visually stunning stage entry concepts and emotional storyboards." },
            { name: "Versatile Acting & Expressions", desc: "Infuses dramatic characterizations and high emotive quality into dance sequences." },
            { name: "Elite Coaching", desc: "Patiently guides clients of all ages and capabilities, simplifying complex steps." },
            { name: "Group Coordination", desc: "Specializes in managing massive sync troupes (100+ performers) with precise staging." },
            { name: "Show Directing", desc: "Handles music editing, prop sourcing, and overall backstage execution seamlessly." },
            { name: "Adaptability", desc: "Fluent in Bollywood, Western, Lyrical Contemporary, and Indian Folk fusions." },
          ].map((str, idx) => (
            <div key={idx} className="glass p-4 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300">
              <h4 className="font-outfit text-gold font-bold text-sm uppercase tracking-wider mb-1">{str.name}</h4>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{str.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="relative overflow-hidden bg-dark-bg min-h-screen">
      {/* Background Orbits */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-gold/3 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/4 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Page Header */}
      <PageBanner
        title="My Journey"
        subtitle="Dancer. Choreographer. Actor. A decade of rhythm, television stages, and creative storytelling."
        badge="About Shivaraj S"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Biography & Info */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Bio Title / Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="The Spirit of Motion"
                subtitle="Fusing cinematic character with physical grace."
                align="left"
                badge="Biography"
                className="mb-6!"
              />
            </motion.div>

            {/* Dance Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-gold relative overflow-hidden"
            >
              <Quote className="absolute top-3 right-4 text-gold/10 w-16 h-16 pointer-events-none" />
              <h3 className="font-outfit text-gold font-extrabold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                Dance Philosophy
              </h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic font-light relative z-10">
                "{PERSONAL_INFO.philosophy}"
              </p>
            </motion.div>

            {/* Interactive Tab Headers */}
            <div className="flex flex-wrap gap-2.5 border-b border-white/10 pb-4">
              {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map((tabKey) => {
                const isActive = activeTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`px-4 py-2.5 rounded-full font-outfit text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-gold text-dark-bg glow-gold-sm shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-gold"
                        : "bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10"
                    }`}
                  >
                    {tabContent[tabKey].icon}
                    <span>{tabContent[tabKey].title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab content panel */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="min-h-[300px]"
            >
              <h3 className="font-outfit text-white font-black text-xl md:text-2xl mb-4 border-b border-gold/10 pb-2">
                {tabContent[activeTab].title}
              </h3>
              {tabContent[activeTab].content}
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Sticky Portrait Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[2/3]">
              {/* Premium Gradient Shadow Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5 rounded-2xl filter blur-xl -z-10 animate-pulse" />
              
              {/* Image Frame */}
              <TiltCard className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-gold/20 glow-gold-sm">
                <Image
                  src="/assets/about-portrait.jpg"
                  alt="Shivaraj S standing in ethnics next to a column"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </TiltCard>

              {/* Decorative side tags */}
              <div className="absolute -bottom-6 -right-4 glass px-4 py-2.5 rounded-xl border border-gold/20 flex flex-col items-center justify-center text-center shadow-lg pointer-events-none">
                <span className="font-outfit font-black text-gold text-lg leading-none">12+</span>
                <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-1">Years Active</span>
              </div>

              <div className="absolute -top-6 -left-4 glass px-4 py-2 rounded-xl border border-gold/20 flex flex-col items-center justify-center text-center shadow-lg pointer-events-none">
                <span className="font-outfit font-black text-gold text-base leading-none">SHIV'S</span>
                <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">Cultural Academy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
