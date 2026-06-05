import React from "react";
import AnimatedTerminal from "./AnimatedTerminal";

export default function HeroSection() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none"></div>
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <h1 className="font-headline-lg text-headline-lg md:text-[64px] md:leading-none mb-6 tracking-tight">
          Aether: Your Terminal, <span className="text-primary italic">Reimagined.</span>
        </h1>
        <p className="font-body-md text-body-md text-text-dim max-w-2xl mx-auto mb-10">
          The professional-grade AI coding assistant that lives in your CLI. Reads your code, edits files surgically, runs commands safely, and helps you build faster.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href="#installation"
            className="bg-primary text-on-primary px-8 py-3 font-code-md text-code-md font-bold border border-primary hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition-all active:scale-95 text-center"
          >
            Get Started
          </a>
          <a
            href="https://github.com/irtaza302/aether-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-primary px-8 py-3 font-code-md text-code-md font-bold border border-border-muted hover:border-primary transition-all active:scale-95 text-center"
          >
            View Repository
          </a>
        </div>

        {/* Terminal Mockup */}
        <AnimatedTerminal />
      </div>
    </section>
  );
}
