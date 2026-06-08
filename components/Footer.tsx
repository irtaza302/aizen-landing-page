"use client";

import React from "react";
import { FadeInOnScroll } from "./AnimationWrapper";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Changelog", href: "https://github.com/irtaza302/aizen-agent", external: true },
  { label: "Security", href: "https://github.com/irtaza302/aizen-agent", external: true },
  { label: "Privacy", href: "https://github.com/irtaza302/aizen-agent", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-terminal-black border-t border-border-muted w-full py-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50"></div>
      <FadeInOnScroll>
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-label-caps text-label-caps text-primary mb-2">
              AIZEN AI
            </div>
            <p className="font-code-sm text-code-sm text-text-dim">
              © {new Date().getFullYear()} Aizen AI. Engineered for
              performance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-code-sm text-code-sm my-6 md:my-0">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                className="text-text-dim hover:text-primary transition-colors duration-200"
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              className="text-text-dim hover:text-primary hover:scale-110 transition-all duration-200"
              href="https://github.com/irtaza302/aizen-agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">terminal</span>
            </a>
            <a
              className="text-text-dim hover:text-primary hover:scale-110 transition-all duration-200"
              href="https://github.com/irtaza302/aizen-agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">data_object</span>
            </a>
          </div>
        </div>
      </FadeInOnScroll>
    </footer>
  );
}
