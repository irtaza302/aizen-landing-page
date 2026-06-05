"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Tools", href: "#tools" },
  { label: "Installation", href: "#installation" },
  { label: "Usage", href: "#usage" },
  { label: "GitHub", href: "https://github.com/irtaza302/aether-agent", external: true },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-terminal-black/90 backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,255,0.08)]"
          : "bg-terminal-black/50 backdrop-blur-md"
      }`}
    >
      <div className="nav-glow-line"></div>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto w-full">
        <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            terminal
          </span>
          Aether AI
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center font-code-md text-code-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-on-surface-variant hover:text-primary transition-colors duration-250 relative group"
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#installation"
            className="shimmer-btn bg-primary-container text-on-primary-container px-6 py-2 font-code-md text-code-md border border-primary hover:bg-magenta-glow hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] transition-all duration-200 active:scale-95 text-center hidden sm:inline-block"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-surface-container/95 backdrop-blur-xl border-t border-border-muted"
          >
            <div className="flex flex-col px-margin-mobile py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-on-surface-variant hover:text-primary hover:bg-surface-raised transition-all duration-200 py-3 px-4 font-code-md text-code-md rounded-lg"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#installation"
                onClick={() => setMobileOpen(false)}
                className="shimmer-btn bg-primary-container text-on-primary-container px-6 py-3 font-code-md text-code-md font-bold border border-primary text-center mt-2 rounded-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
