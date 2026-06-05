"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedTerminal from "./AnimatedTerminal";

export default function HeroSection() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none"></div>
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      {/* Floating orbs */}
      <div className="orb orb-magenta" style={{ top: "10%", left: "-5%" }}></div>
      <div className="orb orb-cyan" style={{ top: "60%", right: "-10%" }}></div>
      <div className="orb orb-lime" style={{ bottom: "-10%", left: "30%" }}></div>

      <div className="max-w-container-max mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full font-code-sm text-code-sm text-text-dim mb-8"
        >
          <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
          v2.4.1 — Now with MCP Support
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-headline-lg text-headline-lg md:text-[64px] md:leading-none mb-6 tracking-tight"
        >
          Aether: Your Terminal,{" "}
          <span className="gradient-text italic">Reimagined.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body-md text-body-md text-text-dim max-w-2xl mx-auto mb-10"
        >
          The professional-grade AI coding assistant that lives in your CLI.
          Reads your code, edits files surgically, runs commands safely, and
          helps you build faster.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a
            href="#installation"
            className="shimmer-btn bg-primary text-on-primary px-8 py-3 font-code-md text-code-md font-bold border border-primary hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition-all active:scale-95 text-center"
          >
            Get Started
          </a>
          <a
            href="https://github.com/irtaza302/aether-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-primary px-8 py-3 font-code-md text-code-md font-bold border border-border-muted hover:border-primary hover:bg-primary/5 transition-all active:scale-95 text-center flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">code</span>
            View Repository
          </a>
        </motion.div>

        {/* Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AnimatedTerminal />
        </motion.div>
      </div>
    </section>
  );
}
