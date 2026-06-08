"use client";

import React, { useState } from "react";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const installMethods = [
  {
    key: "pip",
    label: "PYTHON (PIPX / PIP)",
    command: "pipx install aizen-ai-cli",
    display: (
      <>
        <span className="text-primary">$</span> pipx install aizen-ai-cli
      </>
    ),
  },
  {
    key: "npm",
    label: "NODE.JS (NPM / PNPM)",
    command: "npm install -g aizen-ai-cli\n# or\npnpm install -g aizen-ai-cli",
    display: (
      <>
        <span className="text-primary">$</span> npm install -g aizen-ai-cli<br />
        <span className="text-text-dim text-xs mt-2 mb-2 block"># or</span>
        <span className="text-primary">$</span> pnpm install -g aizen-ai-cli
      </>
    ),
  },
  {
    key: "brew",
    label: "MACOS (HOMEBREW)",
    command: "brew tap irtaza302/aizen && brew install aizen",
    display: (
      <span className="whitespace-normal leading-relaxed">
        <span className="text-primary">$</span> brew tap irtaza302/aizen
        && brew install aizen
      </span>
    ),
  },
  {
    key: "local",
    label: "LOCAL DEVELOPMENT",
    command: "git clone https://github.com/irtaza302/aizen-agent.git && cd aizen-agent && pip install -r requirements.txt && python aizen.py",
    display: (
      <span className="whitespace-normal leading-relaxed text-xs block font-mono text-left">
        <span className="text-primary">$</span> git clone https://github.com/irtaza302/aizen-agent.git<br />
        <span className="text-primary">$</span> cd aizen-agent<br />
        <span className="text-primary">$</span> pip install -r requirements.txt<br />
        <span className="text-primary">$</span> python aizen.py
      </span>
    ),
  },
];

export default function InstallationSection() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({
    pip: false,
    npm: false,
    brew: false,
    local: false,
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
    <section
      className="py-20 px-margin-mobile md:px-margin-desktop bg-terminal-black"
      id="installation"
    >
      <div className="max-w-container-max mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Zero Configuration Setup
            </h2>
            <p className="font-body-md text-body-md text-text-dim">
              Get up and running in seconds with your favorite package manager.
            </p>
          </div>
        </FadeInOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter" staggerDelay={0.12}>
          {installMethods.map((method) => (
            <StaggerItem key={method.key}>
              <div className="glass-card gradient-border rounded-lg group overflow-hidden">
                <div className="p-3 border-b border-border-muted flex justify-between items-center bg-surface-container/50">
                  <span className="font-label-caps text-label-caps text-text-dim">
                    {method.label}
                  </span>
                  <button
                    onClick={() => copyToClipboard(method.key, method.command)}
                    className="text-text-dim hover:text-primary transition-colors cursor-pointer flex items-center gap-1"
                    title="Copy command"
                  >
                    <span
                      className={`material-symbols-outlined text-sm transition-all duration-200 ${
                        copiedStates[method.key] ? "text-tertiary scale-110" : ""
                      }`}
                    >
                      {copiedStates[method.key] ? "check" : "content_copy"}
                    </span>
                    {copiedStates[method.key] && (
                      <span className="text-tertiary text-xs font-code-sm">Copied!</span>
                    )}
                  </button>
                </div>
                <div className="p-6 font-code-md text-code-md">
                  {method.display}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
