"use client";

import React, { useState } from "react";

export default function InstallationSection() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({
    pip: false,
    npm: false,
    brew: false,
  });

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-terminal-black" id="installation">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Zero Configuration Setup</h2>
          <p className="font-body-md text-body-md text-text-dim">Get up and running in seconds with your favorite package manager.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* PIP */}
          <div className="bg-surface-container-lowest border border-border-muted rounded-lg group">
            <div className="p-3 border-b border-border-muted flex justify-between items-center bg-surface-container">
              <span className="font-label-caps text-label-caps text-text-dim">PYTHON (PIPX / PIP)</span>
              <button
                onClick={() => copyToClipboard("pip", "pipx install aether-ai-cli")}
                className="text-text-dim hover:text-primary transition-colors cursor-pointer flex items-center"
                title="Copy command"
              >
                <span className={`material-symbols-outlined text-sm transition-all duration-200 ${copiedStates.pip ? "text-tertiary" : ""}`}>
                  {copiedStates.pip ? "check" : "content_copy"}
                </span>
              </button>
            </div>
            <div className="p-6 font-code-md text-code-md flex justify-between items-center">
              <div>
                <span className="text-primary">$</span> pipx install aether-ai-cli
              </div>
            </div>
          </div>
          {/* NPM */}
          <div className="bg-surface-container-lowest border border-border-muted rounded-lg group">
            <div className="p-3 border-b border-border-muted flex justify-between items-center bg-surface-container">
              <span className="font-label-caps text-label-caps text-text-dim">NODE.JS (NPM)</span>
              <button
                onClick={() => copyToClipboard("npm", "npm install -g aether-ai-cli")}
                className="text-text-dim hover:text-primary transition-colors cursor-pointer flex items-center"
                title="Copy command"
              >
                <span className={`material-symbols-outlined text-sm transition-all duration-200 ${copiedStates.npm ? "text-tertiary" : ""}`}>
                  {copiedStates.npm ? "check" : "content_copy"}
                </span>
              </button>
            </div>
            <div className="p-6 font-code-md text-code-md flex justify-between items-center">
              <div>
                <span className="text-primary">$</span> npm install -g aether-ai-cli
              </div>
            </div>
          </div>
          {/* Homebrew */}
          <div className="bg-surface-container-lowest border border-border-muted rounded-lg group">
            <div className="p-3 border-b border-border-muted flex justify-between items-center bg-surface-container">
              <span className="font-label-caps text-label-caps text-text-dim">MACOS (HOMEBREW)</span>
              <button
                onClick={() => copyToClipboard("brew", "brew tap irtaza302/aether-agent && brew install aether")}
                className="text-text-dim hover:text-primary transition-colors cursor-pointer flex items-center"
                title="Copy command"
              >
                <span className={`material-symbols-outlined text-sm transition-all duration-200 ${copiedStates.brew ? "text-tertiary" : ""}`}>
                  {copiedStates.brew ? "check" : "content_copy"}
                </span>
              </button>
            </div>
            <div className="p-6 font-code-md text-code-md flex justify-between items-center">
              <div className="whitespace-normal leading-relaxed">
                <span className="text-primary">$</span> brew tap irtaza302/aether-agent && brew install aether
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
