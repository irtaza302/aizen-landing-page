"use client";

import React, { useState } from "react";

export default function Home() {
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
    <div className="selection:bg-primary-container selection:text-on-primary-container min-h-screen bg-terminal-black text-on-surface">
      {/* Background Noise & Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.02]"></div>

      {/* Top Navigation Bar */}
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

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-margin-mobile md:px-margin-desktop py-20 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh pointer-events-none"></div>
          <div className="max-w-container-max mx-auto text-center relative z-10">
            <h1 className="font-headline-lg text-headline-lg md:text-[64px] md:leading-none mb-6 tracking-tight">
              Aether: Your Terminal, <span className="text-primary italic">Reimagined.</span>
            </h1>
            <p className="font-body-md text-body-md text-text-dim max-w-2xl mx-auto mb-10">
              The sleek, intelligent AI agent that lives in your CLI. Engineered for performance, designed for the modern developer workflow.
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
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-border-muted bg-surface-container-lowest shadow-2xl terminal-glow">
              <div className="bg-surface-container flex items-center px-4 py-2 border-b border-border-muted">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/40"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
                </div>
                <div className="mx-auto font-code-sm text-code-sm text-text-dim">aether — zsh — 80x24</div>
              </div>
              <div className="p-6 text-left font-code-md text-code-md min-h-[400px] bg-terminal-black overflow-x-auto whitespace-pre">
                <div className="mb-4">
                  <span className="text-primary">➜</span> <span className="text-secondary">~</span> aether --init
                </div>
                <div className="text-primary mb-6">
                  <pre className="leading-tight font-mono text-xs sm:text-sm">
{`   ___         _   _               
  / _ \\  ___  | |_| |__   ___ _ __ 
 / /_\\ \\/ _ \\ | __| '_ \\ / _ \\ '__|
/ /_\\\\ \\  __/ | |_| | | |  __/ |   
\\____/ \\___|  \\__|_| |_|\\___|_|   
                                   `}
                  </pre>
                </div>
                <div className="mb-4 text-on-surface-variant">
                  <span className="text-primary">[SYSTEM]</span> Initializing Aether AI v2.4.1...<br />
                  <span className="text-primary">[SYSTEM]</span> Model: OpenRouter/Nemotron-120B<br />
                  <span className="text-primary">[SYSTEM]</span> Context loaded from <span className="text-secondary">./src/core</span>
                </div>
                <div className="mb-4">
                  <span className="text-primary">➜</span> <span className="text-secondary">~</span> <span className="text-on-surface">Explain the current architecture and suggest a fix for the memory leak in the buffer handler.</span>
                </div>
                <div className="text-primary-fixed-dim whitespace-normal">
                  <span className="text-primary">AETHER:</span> Analyzing repository structure... Found issue in <span className="underline">handler.rs:142</span>. The heap-allocated buffer is not being cleared on dropout. Suggesting fix...
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-primary">&gt;</span>
                  <span className="w-2 h-5 bg-primary ml-1 cursor-blink"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface" id="features">
          <div className="max-w-container-max mx-auto">
            <div className="mb-12">
              <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">Core Capabilities</h2>
              <h3 className="font-headline-md text-headline-md text-on-surface">Precision Built Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Feature 1 */}
              <div className="md:col-span-8 bg-surface-raised border border-border-muted p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Context Awareness</h4>
                  <p className="font-body-md text-body-md text-text-dim max-w-md">
                    Automatically injects relevant project files into the context window. No more manual copy-pasting code snippets; Aether understands your entire workspace. Just type <code className="text-primary font-mono text-sm">@filename</code>.
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    folder_zip
                  </span>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="md:col-span-4 bg-surface-raised border border-border-muted p-8 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  terminal
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Tool Integration</h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Run shell commands, edit/create files, and execute custom scripts directly. Aether is a fully empowered terminal agent.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="md:col-span-4 bg-surface-raised border border-border-muted p-8 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  hub
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">OpenRouter Powered</h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Connects to state-of-the-art models like Nemotron, GPT-4, and Claude using a unified configuration endpoint.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="md:col-span-8 bg-surface-raised border border-border-muted p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 hover:border-primary/50 transition-colors overflow-hidden">
                <div className="flex-1">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Sub-Millisecond Response</h4>
                  <p className="font-body-md text-body-md text-text-dim">
                    Optimized streaming protocols ensure that your agent responds at the speed of thought, minimizing latency in high-stakes environments.
                  </p>
                </div>
                <div className="w-full sm:w-48 h-24 bg-terminal-black border border-border-muted relative flex items-center justify-center">
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                  <div className="font-code-sm text-primary">0.042ms latency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop bg-terminal-black border-y border-border-muted" id="installation">
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
                    onClick={() => copyToClipboard("pip", "pipx install aether-cli")}
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
                    <span className="text-primary">$</span> pipx install aether-cli
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

        {/* Usage section matching requested schema */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface" id="usage">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">Developer Workflow</h2>
              <h3 className="font-headline-md text-headline-md text-on-surface">How to Use Aether</h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-8 font-body-md text-body-md">
              <div className="border border-border-muted bg-surface-raised p-6 rounded-lg">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">1. Launch the Agent</h4>
                <p className="text-text-dim">
                  Simply open your terminal and type <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">aether</code>. You will be prompted to supply your OpenRouter API key on your first start.
                </p>
              </div>
              <div className="border border-border-muted bg-surface-raised p-6 rounded-lg">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">2. Attach Context</h4>
                <p className="text-text-dim">
                  Mention files directly in your query by prefixing them with the <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">@</code> symbol. Aether will scan the files in your workspace and inject their content into the conversation.
                </p>
              </div>
              <div className="border border-border-muted bg-surface-raised p-6 rounded-lg">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">3. Automate Execution</h4>
                <p className="text-text-dim">
                  Ask Aether to create files, debug script executions, or write standard libraries. Aether requests execution permission before running operations, guaranteeing you maintain complete control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary CTA / Status Area */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface relative">
          <div className="max-w-container-max mx-auto border border-primary/20 bg-magenta-glow p-12 text-center relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]"></div>
            <h2 className="font-headline-lg text-headline-lg mb-6">Ready to upgrade your workflow?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <div className="flex items-center gap-2 font-code-md text-code-md">
                <span className="w-3 h-3 bg-tertiary rounded-full animate-pulse"></span>
                Status: v2.4.1 Operational
              </div>
              <div className="h-px w-12 bg-border-muted hidden md:block"></div>
              <div className="flex items-center gap-2 font-code-md text-code-md">
                <span className="material-symbols-outlined text-secondary">group</span>
                42k Active Sessions
              </div>
            </div>
            <a
              href="#installation"
              className="inline-block mt-10 bg-primary text-on-primary px-10 py-4 font-code-md text-code-md font-bold hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all cursor-pointer text-center"
            >
              Initiate Download
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-terminal-black border-t border-border-muted w-full py-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-gutter max-w-container-max mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-label-caps text-label-caps text-primary mb-2">AETHER AI</div>
            <p className="font-code-sm text-code-sm text-text-dim">
              © {new Date().getFullYear()} Aether AI. Engineered for performance.
            </p>
          </div>
          <div className="flex gap-8 font-code-sm text-code-sm my-6 md:my-0">
            <a className="text-text-dim hover:text-primary transition-colors duration-200" href="#features">
              Documentation
            </a>
            <a className="text-text-dim hover:text-primary transition-colors duration-200" href="https://github.com/irtaza302/aether-agent" target="_blank" rel="noopener noreferrer">
              Changelog
            </a>
            <a className="text-text-dim hover:text-primary transition-colors duration-200" href="https://github.com/irtaza302/aether-agent" target="_blank" rel="noopener noreferrer">
              Security
            </a>
            <a className="text-text-dim hover:text-primary transition-colors duration-200" href="https://github.com/irtaza302/aether-agent" target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
          </div>
          <div className="flex gap-4">
            <a className="text-text-dim hover:text-primary transition-colors duration-200" href="https://github.com/irtaza302/aether-agent" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">terminal</span>
            </a>
            <a className="text-text-dim hover:text-primary transition-colors duration-200" href="https://github.com/irtaza302/aether-agent" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">data_object</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
