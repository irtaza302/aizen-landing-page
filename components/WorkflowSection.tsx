"use client";

import React from "react";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const steps = [
  {
    number: "1",
    title: "Launch the Agent",
    description: (
      <>
        Simply open your terminal and type{" "}
        <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">
          aether
        </code>
        . You will be prompted to supply your OpenRouter API key on your first
        start, which is securely saved to{" "}
        <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">
          ~/.aether_config.json
        </code>
        .
      </>
    ),
  },
  {
    number: "2",
    title: "Attach Context",
    description: (
      <>
        Mention files directly in your query by prefixing them with the{" "}
        <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">
          @
        </code>{" "}
        symbol. Aether provides smart tab-completion that filters out{" "}
        <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">
          .gitignore
        </code>
        d files.
      </>
    ),
  },
  {
    number: "3",
    title: "MCP Server Integration",
    description:
      "Aether supports Model Context Protocol (MCP). Configure custom local servers in your config to let the AI connect to local SQLite databases, explore the web, or run custom company workflows.",
  },
  {
    number: "4",
    title: "Build and Monitor",
    description: (
      <>
        Let Aether spin up a long-running background task while you continue
        talking. Read-only commands execute automatically, while destructive
        commands always require your explicit confirmation (unless you enable{" "}
        <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">
          --yolo
        </code>{" "}
        mode).
      </>
    ),
  },
];

export default function WorkflowSection() {
  return (
    <>
      <section
        className="py-20 px-margin-mobile md:px-margin-desktop bg-surface border-t border-border-muted"
        id="usage"
      >
        <div className="max-w-container-max mx-auto">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">
                Developer Workflow
              </h2>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                How to Use Aether
              </h3>
            </div>
          </FadeInOnScroll>

          <StaggerContainer className="max-w-3xl mx-auto space-y-6 font-body-md text-body-md" staggerDelay={0.12}>
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="glass-card gradient-border p-6 rounded-lg group flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    <span className="font-code-md text-primary font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-fixed-dim transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-text-dim">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
        {/* Background effects */}
        <div className="orb orb-magenta" style={{ top: "-20%", right: "-10%" }}></div>
        <div className="orb orb-cyan" style={{ bottom: "-20%", left: "-10%" }}></div>
        <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

        <FadeInOnScroll>
          <div className="max-w-container-max mx-auto glass-card border border-primary/20 p-12 md:p-16 text-center relative z-10 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-headline-lg text-[36px] md:text-[48px] leading-tight font-bold mb-6">
                Ready to upgrade your workflow?
              </h2>

              <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-10">
                <div className="flex items-center gap-2 font-code-md text-code-md">
                  <span className="w-3 h-3 bg-tertiary rounded-full animate-pulse"></span>
                  Status: v2.4.1 Operational
                </div>
                <div className="h-px w-12 bg-border-muted hidden md:block"></div>
                <div className="flex items-center gap-2 font-code-md text-code-md">
                  <span className="material-symbols-outlined text-secondary">
                    terminal
                  </span>
                  Built for the CLI
                </div>
              </div>

              {/* Terminal-style preview */}
              <div className="inline-block bg-terminal-black border border-border-muted rounded-lg px-6 py-3 font-code-md text-code-md mb-10">
                <span className="text-primary">$</span>{" "}
                <span className="text-on-surface">pipx install aether-ai-cli</span>
              </div>

              <div className="block">
                <a
                  href="#installation"
                  className="shimmer-btn inline-block bg-primary text-on-primary px-12 py-4 font-code-md text-code-md font-bold hover:shadow-[0_0_40px_rgba(255,0,255,0.6)] transition-all cursor-pointer text-center active:scale-95"
                >
                  Initiate Download
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
    </>
  );
}
