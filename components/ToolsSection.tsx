"use client";

import React from "react";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const tools = [
  { name: "edit_file", desc: "Surgical search-and-replace on existing files with diff preview." },
  { name: "run_command", desc: "Execute shell commands safely; supports async background execution." },
  { name: "grep_search", desc: "Search for text or regex patterns across the entire codebase." },
  { name: "check_task", desc: "Check status and read stdout/stderr of background commands." },
];

const commands = [
  { name: "/checkpoint", desc: "Save a conversation snapshot to memory to revert back later." },
  { name: "/compact", desc: "Summarize older messages using AI to save context window tokens." },
  { name: "/usage", desc: "Show real-time token usage and estimated session cost in USD." },
  { name: "/mcp", desc: "View configured Model Context Protocol servers and status." },
];

export default function ToolsSection() {
  return (
    <section
      className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-border-muted"
      id="tools"
    >
      <div className="max-w-container-max mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">
              Extensible Interface
            </h2>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              Powerful Tools & Commands
            </h3>
            <p className="font-body-md text-body-md text-text-dim max-w-2xl mx-auto">
              Aether empowers your AI with 9 built-in tools and comprehensive
              slash commands to control the environment.
            </p>
          </div>
        </FadeInOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-gutter" staggerDelay={0.15}>
          {/* Tools List */}
          <StaggerItem>
            <div className="glass-card gradient-border p-6 rounded-lg h-full">
              <h4 className="font-code-md text-code-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">build</span> Core
                Tools
              </h4>
              <ul className="space-y-4 font-body-md text-body-md text-text-dim">
                {tools.map((tool) => (
                  <li key={tool.name} className="flex gap-4 group">
                    <code className="text-secondary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0 group-hover:text-primary transition-colors duration-200">
                      {tool.name}
                    </code>
                    <span>{tool.desc}</span>
                  </li>
                ))}
                <li className="flex gap-4 text-primary text-sm mt-4">
                  Plus: read_file, write_file, kill_task, list_directory,
                  find_files
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Commands List */}
          <StaggerItem>
            <div className="glass-card gradient-border p-6 rounded-lg h-full">
              <h4 className="font-code-md text-code-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">
                  keyboard_command_key
                </span>{" "}
                Slash Commands
              </h4>
              <ul className="space-y-4 font-body-md text-body-md text-text-dim">
                {commands.map((cmd) => (
                  <li key={cmd.name} className="flex gap-4 group">
                    <code className="text-tertiary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0 group-hover:text-primary transition-colors duration-200">
                      {cmd.name}
                    </code>
                    <span>{cmd.desc}</span>
                  </li>
                ))}
                <li className="flex gap-4 text-primary text-sm mt-4">
                  Plus: /undo, /model, /save, /load, /export, /config, and more
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
