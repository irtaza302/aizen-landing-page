import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-terminal-black/80 backdrop-blur-md border-b border-border-muted shadow-[0_0_15px_rgba(255,0,255,0.1)]">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto w-full">
        <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            terminal
          </span>
          Aether AI
        </div>
        <div className="hidden md:flex gap-8 items-center font-code-md text-code-md">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-250" href="#features">
            Features
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-250" href="#tools">
            Tools
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-250" href="#installation">
            Installation
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-250" href="#usage">
            Usage
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-250" href="https://github.com/irtaza302/aether-agent" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <a
          href="#installation"
          className="bg-primary-container text-on-primary-container px-6 py-2 font-code-md text-code-md border border-primary hover:bg-magenta-glow hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] transition-all duration-200 active:scale-95 text-center"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
