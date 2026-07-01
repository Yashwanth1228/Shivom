"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-gold/10"
            : "bg-transparent py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/35 group-hover:border-gold transition-colors duration-300">
              <Image
                src="/assets/logo.jpg"
                alt="Shivaraj S Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-bold text-lg tracking-wider text-white group-hover:text-gold transition-colors duration-300">
                SHIVARAJ S
              </span>
              <span className="text-[10px] text-zinc-400 tracking-widest uppercase -mt-1 group-hover:text-white transition-colors duration-300">
                Choreographer & Actor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "relative font-outfit text-sm tracking-widest uppercase transition-colors duration-300 py-2",
                    isActive
                      ? "text-gold font-semibold"
                      : "text-zinc-300 hover:text-white",
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold glow-gold-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call To Action Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative px-6 py-2.5 rounded-full font-outfit text-xs tracking-widest uppercase border border-gold/40 text-white hover:text-dark-bg overflow-hidden group transition-all duration-500"
            >
              <span className="absolute inset-0 bg-gold translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10">Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold transition-colors p-2 z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden border-b border-gold/15"
          >
            <div className="flex flex-col gap-6 mt-12">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    key={item.name}
                  >
                    <Link
                      href={item.href}
                      className={clsx(
                        "font-outfit text-2xl tracking-widest uppercase transition-colors duration-300 block py-2",
                        isActive
                          ? "text-gold font-bold"
                          : "text-zinc-400 hover:text-white",
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.05 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-full font-outfit text-sm tracking-widest uppercase bg-gold text-dark-bg font-bold glow-gold-sm hover:glow-gold transition-all duration-300"
                >
                  Book Performance
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
