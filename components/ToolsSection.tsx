"use client";

import React from "react";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const tools = [
  { name: "read_file", desc: "Read file contents before making changes." },
  { name: "write_file", desc: "Create new files or overwrite entirely (with preview)." },
  { name: "replace_file_content", desc: "Surgical search-and-replace on existing files with diff." },
  { name: "multi_replace_file_content", desc: "Perform multiple, non-adjacent surgical edits sequentially." },
  { name: "run_terminal_command", desc: "Execute shell commands in a persistent stateful bash session." },
  { name: "check_background_task", desc: "Check status and read output of background tasks." },
  { name: "kill_background_task", desc: "Kill any active background task." },
  { name: "list_directory", desc: "List files and folders, respecting .gitignore rules." },
  { name: "grep_search", desc: "Search for text or regex patterns across the codebase." },
  { name: "find_files", desc: "Find files by glob pattern (e.g. *.py, Dockerfile)." },
  { name: "get_file_outline", desc: "Extract AST outline of a Python file." },
  { name: "web_search", desc: "Search the web for current information, docs, or APIs." },
  { name: "remember_fact", desc: "Store a fact in persistent memory (used autonomously)." },
];

const commands = [
  { name: "/help", desc: "Show all available commands." },
  { name: "/auto [task]", desc: "Enter a fully autonomous agentic loop." },
  { name: "/model [name]", desc: "View or switch the active AI model." },
  { name: "/clear", desc: "Clear conversation history." },
  { name: "/drop", desc: "Drop attached context to save tokens." },
  { name: "/save [name]", desc: "Save conversation to SQLite database." },
  { name: "/load [name]", desc: "Load a previously saved conversation." },
  { name: "/checkpoint [name]", desc: "Save a snapshot to memory." },
  { name: "/restore [name]", desc: "Revert to a checkpoint or list them." },
  { name: "/search [query]", desc: "Perform semantic search across codebase." },
  { name: "/reindex [dir]", desc: "Manually trigger local semantic search indexing." },
  { name: "/usage", desc: "Show token usage and session cost." },
  { name: "/stats", desc: "Cross-session usage summary and chart." },
  { name: "/budget [amt]", desc: "Enforce session spending limits." },
  { name: "/commit", desc: "Auto-generate message and commit." },
  { name: "/pr [title]", desc: "Create a GitHub PR with an AI description." },
  { name: "/branch, /log", desc: "Full AI-assisted git workflow." },
  { name: "/diff", desc: "Show all uncommitted changes." },
  { name: "/compact", desc: "Summarize old messages to save tokens." },
  { name: "/remember <fact>", desc: "Store a fact in persistent memory." },
  { name: "/memory", desc: "View all stored memories." },
  { name: "/forget <id>", desc: "Remove a specific memory." },
  { name: "/undo", desc: "Undo the last file modification." },
  { name: "/retry", desc: "Retry the last message." },
  { name: "/copy", desc: "Copy last AI response to clipboard." },
  { name: "/export [file]", desc: "Export conversation to Markdown." },
  { name: "/config", desc: "View current configuration." },
  { name: "/mcp", desc: "View configured MCP servers & status." },
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
              Aizen empowers your AI with 12 built-in tools and comprehensive
              slash commands to control the environment.
            </p>
          </div>
        </FadeInOnScroll>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-gutter" staggerDelay={0.15}>
          {/* Tools List */}
          <StaggerItem className="lg:col-span-5">
            <div className="glass-card gradient-border p-6 rounded-lg h-full">
              <h4 className="font-code-md text-code-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">build</span> Core Tools
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] lg:grid-cols-1 xl:grid-cols-[max-content_1fr] gap-y-4 sm:gap-x-4 font-body-md text-body-md text-text-dim">
                {tools.map((tool) => (
                  <li key={tool.name} className="flex flex-col gap-1 sm:contents lg:flex lg:flex-col xl:contents group">
                    <code className="text-secondary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-fit max-w-full overflow-hidden text-ellipsis group-hover:text-primary transition-colors duration-200 self-start">
                      {tool.name}
                    </code>
                    <span>{tool.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Commands List */}
          <StaggerItem className="lg:col-span-7">
            <div className="glass-card gradient-border p-6 rounded-lg h-full">
              <h4 className="font-code-md text-code-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">
                  keyboard_command_key
                </span>{" "}
                Slash Commands
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 font-body-md text-body-md text-text-dim">
                {commands.map((cmd) => (
                  <li key={cmd.name} className="flex flex-col gap-1 group">
                    <code className="text-tertiary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0 group-hover:text-primary transition-colors duration-200 text-left">
                      {cmd.name}
                    </code>
                    <span className="text-xs text-text-dim/80">{cmd.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
