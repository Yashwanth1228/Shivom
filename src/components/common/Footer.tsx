"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/danceData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-card border-t border-gold/10 pt-16 pb-8 relative overflow-hidden mt-auto">
      {/* Background Decorative Glows */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gold/3 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                <Image
                  src="/assets/logo.jpg"
                  alt="Shivaraj S Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-extrabold text-xl tracking-wider text-white">
                  SHIVARAJ S
                </span>
                <span className="text-[10px] text-gold tracking-widest uppercase -mt-0.5">
                  Artistry In Motion
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm italic font-light mt-2 max-w-[280px]">
              "Bringing Rhythm To Life Through Dance"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-outfit text-sm font-semibold tracking-wider text-white uppercase mb-6 border-b border-gold/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Achievements", href: "/achievements" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-gold text-sm tracking-wider hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-outfit text-sm font-semibold tracking-wider text-white uppercase mb-6 border-b border-gold/20 pb-2 inline-block">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918217705531" className="hover:text-white transition-colors duration-300">
                    +91 82177 05531
                  </a>
                  <a href="tel:+919980455040" className="hover:text-white transition-colors duration-300">
                    +91 99804 55040
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors duration-300 break-all">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  #26, 1st main, 2nd cross Ashwath Nagar,<br />
                  Sunkadakatte, Bangalore-91
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-outfit text-sm font-semibold tracking-wider text-white uppercase mb-6 border-b border-gold/20 pb-2 inline-block">
              Social Media
            </h3>
            <div className="flex gap-4 items-center">
              {[
                {
                  icon: <FaInstagram size={18} />,
                  href: SOCIAL_LINKS.instagram,
                  label: "Instagram",
                },
                {
                  icon: <FaFacebookF size={18} />,
                  href: SOCIAL_LINKS.facebook,
                  label: "Facebook",
                },
                {
                  icon: <FaYoutube size={18} />,
                  href: "https://www.youtube.com/@shivsculturalacademy9885",
                  label: "YouTube",
                },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-zinc-400 hover:text-dark-bg hover:bg-gold hover:border-gold hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gold/10 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; 2026 Shivaraj S. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Designed & Developed by</span>
            <span className="text-gold font-semibold tracking-wide">Yashwanth Suresh</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:text-white hover:border-gold hover:bg-gold/10 transition-all duration-300 group shadow-[0_0_8px_rgba(212,175,55,0.05)]"
            title="Back to Top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
