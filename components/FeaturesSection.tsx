"use client";

import React from "react";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./AnimationWrapper";


export default function FeaturesSection() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface" id="features">
      <div className="max-w-container-max mx-auto">
        <FadeInOnScroll>
          <div className="mb-12">
            <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">
              Core Capabilities
            </h2>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Precision Built Features
            </h3>
          </div>
        </FadeInOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-gutter" staggerDelay={0.12}>
          {/* Feature 1: Surgical File Editing */}
          <StaggerItem className="md:col-span-8">
            <div className="glass-card gradient-border p-8 relative overflow-hidden group rounded-lg h-full flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="relative z-10 flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  content_cut
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Surgical File Editing
                </h4>
                <p className="font-body-md text-body-md text-text-dim max-w-md">
                  Instead of rewriting entire files, Aizen makes precise
                  search-and-replace edits with color-coded diff previews.
                  Ensures lightning-fast modifications across your codebase.
                </p>
              </div>
              <div className="w-full sm:w-64 h-28 bg-terminal-black border border-border-muted relative flex flex-col justify-center rounded-lg overflow-hidden p-3 shrink-0 z-10 mt-auto sm:mt-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                <div className="font-code-sm text-primary text-[10px] mb-2 text-center uppercase">Diff Preview</div>
                <div className="font-mono text-[9px] w-full flex flex-col gap-1">
                  <div className="bg-red-500/10 text-red-400 px-2 py-1 rounded border border-red-500/20 truncate">- const tools = [9]</div>
                  <div className="bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20 truncate">+ const tools = [12]</div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none">
                <span
                  className="material-symbols-outlined text-[200px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  edit_document
                </span>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 2: Async Architecture */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  sync_alt
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Asynchronous Architecture
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Fully asynchronous operations leveraging asyncio and AsyncOpenAI. Run concurrent tasks, stream fluidly, and manage background runs in parallel.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0 mt-auto">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-2 uppercase">Async Queue</div>
                <div className="flex flex-col gap-1 w-full font-mono text-[9px]">
                  <div className="flex justify-between text-text-dim bg-surface/30 px-2 py-0.5 rounded"><span>Task A</span> <span className="text-secondary">Done</span></div>
                  <div className="flex justify-between text-on-surface bg-surface border border-border-muted px-2 py-0.5 rounded"><span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-secondary animate-pulse"></span> Task B</span> <span>Running</span></div>
                  <div className="flex justify-between text-text-dim/50 px-2 py-0.5 rounded"><span>Task C</span> <span>Pending</span></div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 3: Streaming & Live Preview */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Streaming & Live Preview
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Watch AI responses render in real-time inside a styled panel with an animated thinking spinner and rich Markdown formatting.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-start justify-center rounded-lg overflow-hidden p-3 shrink-0 mt-auto">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-tertiary shadow-[0_0_10px_rgba(157,0,255,1)]"></div>
                <div className="font-code-sm text-tertiary text-[10px] mb-2 uppercase w-full text-center">Live Output</div>
                <div className="w-full font-mono text-[9px] text-text-dim leading-relaxed bg-surface/50 p-2 rounded border border-border-muted flex-1">
                  <span className="text-tertiary">❯</span> Generating plan...<br/>
                  <span className="text-tertiary">❯</span> <span className="animate-pulse bg-text-dim text-transparent">██████</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 4: SQLite Persistence */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  storage
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  SQLite Persistence
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Session storage is powered by SQLite. Revert history with memory checkpoints and restore any modified files easily using /undo.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0 mt-auto">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                <div className="font-code-sm text-primary text-[10px] mb-2 uppercase">Sessions DB</div>
                <div className="w-full flex items-center gap-2 font-mono text-[10px] text-text-dim bg-surface px-2 py-1.5 rounded border border-border-muted">
                  <span className="material-symbols-outlined text-[14px] text-primary">database</span>
                  <span>aizen.db</span>
                  <span className="ml-auto text-primary">2.4MB</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 5: Smart Autocomplete */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  terminal
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Smart Autocomplete
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Use @-mentions to attach files, directories, URLs, or commands with Tab completion that respects gitignore rules.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col justify-center rounded-lg overflow-hidden p-3 shrink-0 mt-auto">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-2 uppercase text-center">Mentions</div>
                <div className="w-full font-mono text-[10px]">
                  <div className="text-text-dim/60 px-2 py-0.5 truncate">@mai<span className="text-text-dim/30">n.py</span></div>
                  <div className="text-on-surface bg-secondary/10 border border-secondary/30 px-2 py-1.5 rounded my-0.5 flex items-center justify-between">
                    <span>@main.py</span>
                    <span className="text-[8px] font-bold bg-secondary/20 text-secondary border border-secondary/50 px-1 rounded">TAB</span>
                  </div>
                  <div className="text-text-dim/60 px-2 py-0.5 truncate">@mockup.png</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 6: Project-Specific Rules */}
          <StaggerItem className="md:col-span-6">
            <div className="glass-card gradient-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 overflow-hidden rounded-lg group h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    rule
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    Project Rules
                  </h4>
                </div>
                <p className="font-body-md text-body-md text-text-dim">
                  Automatically customizes behavior per repository by loading{" "}
                  <code className="text-primary font-mono text-sm bg-terminal-black px-1.5 py-0.5 rounded">.aizen_rules</code>{" "}
                  or{" "}
                  <code className="text-primary font-mono text-sm bg-terminal-black px-1.5 py-0.5 rounded">.cursorrules</code>.
                </p>
              </div>
              <div className="w-full sm:w-40 h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                <div className="font-code-sm text-primary text-[10px] mb-1">RULES DETECTED</div>
                <div className="font-mono text-xs text-text-dim bg-surface/50 w-full text-center py-1 rounded border border-border-muted mb-1">
                  ✓ .aizen_rules
                </div>
                <div className="font-mono text-xs text-text-dim/40 w-full text-center py-1 rounded border border-dashed border-border-muted/40">
                  .cursorrules
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 7: Cost Tracking & Token Usage */}
          <StaggerItem className="md:col-span-6">
            <div className="glass-card gradient-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 overflow-hidden rounded-lg group h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    payments
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    Cost Tracking
                  </h4>
                </div>
                <p className="font-body-md text-body-md text-text-dim">
                  Live tracking of token usage, estimated USD session cost, and statistics for transparency over model usage costs.
                </p>
              </div>
              <div className="w-full sm:w-40 h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-1">ESTIMATED COST</div>
                <div className="font-mono text-lg font-bold text-on-surface">$0.0142</div>
                <div className="font-code-sm text-[10px] text-text-dim mt-1">Tokens: 6.4k</div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 8: MCP Support */}
          <StaggerItem className="md:col-span-6">
            <div className="glass-card gradient-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 overflow-hidden rounded-lg group h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    api
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    MCP Integration
                  </h4>
                </div>
                <p className="font-body-md text-body-md text-text-dim">
                  Connect local databases, web search, or custom APIs via the Model Context Protocol to infinitely extend Aizen's capabilities.
                </p>
              </div>
              <div className="w-full sm:w-40 h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-tertiary shadow-[0_0_10px_rgba(157,0,255,1)]"></div>
                <div className="font-code-sm text-tertiary text-[10px] mb-1">MCP SERVERS</div>
                <div className="flex flex-col gap-1 w-full mt-1">
                  <div className="font-mono text-[10px] text-text-dim bg-surface/50 w-full text-center py-1 rounded border border-border-muted">sqlite-mcp</div>
                  <div className="font-mono text-[10px] text-text-dim bg-surface/50 w-full text-center py-1 rounded border border-border-muted">everything</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 9: Background Tasks */}
          <StaggerItem className="md:col-span-6">
            <div className="glass-card gradient-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 overflow-hidden rounded-lg group h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    move_to_inbox
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    Background Tasks
                  </h4>
                </div>
                <p className="font-body-md text-body-md text-text-dim">
                  Run test suites, local servers, or builds asynchronously. Continue chatting and coding with Aizen while tasks run in parallel.
                </p>
              </div>
              <div className="w-full sm:w-40 h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-1">ACTIVE TASKS</div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-on-surface bg-surface w-full px-2 py-1.5 rounded border border-border-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  npm run test
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 10: Vision Support */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  visibility
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Vision Support
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Attach images natively (e.g., @mockup.png) and Aizen will automatically encode them for Vision APIs like GPT-4o or Claude 3.5.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                <div className="font-code-sm text-primary text-[10px] mb-2 uppercase">ATTACHMENT</div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-on-surface bg-surface w-full px-2 py-1.5 rounded border border-border-muted">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">image</span>
                  <span className="truncate">@mockup.png</span>
                  <span className="ml-auto text-primary shrink-0">1.2MB</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 11: Smart Context Pruning */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  compress
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Smart Pruning
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Automatically drops old, large file attachments first when hitting the context limit before resorting to LLM summarization.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-tertiary shadow-[0_0_10px_rgba(157,0,255,1)]"></div>
                <div className="font-code-sm text-tertiary text-[10px] mb-1">CONTEXT WINDOW</div>
                <div className="w-full flex flex-col gap-1 mt-1">
                  <div className="flex justify-between items-center font-mono text-[9px] text-text-dim/40 bg-surface/30 px-2 py-1.5 rounded border border-dashed border-border-muted/40 line-through">
                    <span className="truncate">@old_logs.txt</span>
                    <span className="shrink-0 text-red-400/50">Dropped</span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-[9px] text-on-surface bg-surface px-2 py-1.5 rounded border border-border-muted">
                    <span className="truncate">@main.py</span>
                    <span className="text-secondary shrink-0">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 12: Autonomous Mode */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  smart_toy
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Autonomous Loop
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Enter a fully autonomous agentic loop to execute complex tasks step-by-step with a strict step limit to prevent infinite loops.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-2">AUTONOMOUS RUN</div>
                <div className="w-full bg-surface/50 rounded-full h-2 mb-3 overflow-hidden border border-border-muted">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "24%" }}></div>
                </div>
                <div className="flex justify-between w-full font-mono text-[9px] text-on-surface">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Running...</span>
                  <span className="text-text-dim">Step 6 / 25</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 13: Stateful Terminal Session */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  terminal
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Stateful Terminal
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Commands execute in a persistent Bash shell. Environment variables and directory changes persist naturally across all tool calls.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-start justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                <div className="font-code-sm text-primary text-[10px] mb-2 uppercase w-full text-center">BASH SESSION</div>
                <div className="w-full font-mono text-[9px] text-text-dim bg-surface/50 p-2 rounded border border-border-muted flex-1">
                  <span className="text-primary">$</span> export API_KEY=xxx<br/>
                  <span className="text-primary">$</span> cd src/<br/>
                  <span className="text-primary">$</span> npm start<br/>
                  <span className="text-green-400">Ready on port 3000</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 14: Persistent Memory */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  memory
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Persistent Memory
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Aizen learns your preferences across sessions using local SQLite memory and autonomously remembers architectural decisions.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-1">FACT STORED</div>
                <div className="w-full font-mono text-[9px] text-on-surface bg-surface px-2 py-1.5 rounded border border-border-muted mt-1 break-words">
                  "User prefers async/await over promises in TypeScript."
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 15: Semantic Codebase Search */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  manage_search
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Semantic Search
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Fast local RAG (Retrieval-Augmented Generation) codebase search using the `/search` command to instantly find relevant code snippets.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col justify-center rounded-lg overflow-hidden p-3 shrink-0 mt-auto">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-tertiary shadow-[0_0_10px_rgba(157,0,255,1)]"></div>
                <div className="font-code-sm text-tertiary text-[10px] mb-2 uppercase text-center">LOCAL RAG</div>
                <div className="w-full font-mono text-[9px]">
                  <div className="text-on-surface bg-surface border border-border-muted px-2 py-1 rounded mb-1">
                    <span className="text-tertiary">/search</span> payment gateway
                  </div>
                  <div className="text-text-dim/80 px-2 py-0.5 truncate">→ src/stripe.ts (98% match)</div>
                  <div className="text-text-dim/60 px-2 py-0.5 truncate">→ src/billing.ts (85% match)</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 16: Custom Plugin System */}
          <StaggerItem className="md:col-span-6">
            <div className="glass-card gradient-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 overflow-hidden rounded-lg group h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    extension
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    Custom Plugin System
                  </h4>
                </div>
                <p className="font-body-md text-body-md text-text-dim">
                  Easily extend Aizen by dropping Python scripts into <code className="text-primary font-mono text-sm bg-terminal-black px-1.5 py-0.5 rounded">~/.aizen/plugins/</code> to register custom AI tools and integrations.
                </p>
              </div>
              <div className="w-full sm:w-40 h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                <div className="font-code-sm text-primary text-[10px] mb-1">PLUGINS DIRECTORY</div>
                <div className="flex flex-col gap-1 w-full mt-1">
                  <div className="font-mono text-[10px] text-text-dim bg-surface/50 w-full text-center py-1 rounded border border-border-muted">github_tool.py</div>
                  <div className="font-mono text-[10px] text-text-dim bg-surface/50 w-full text-center py-1 rounded border border-border-muted">jira_tool.py</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 17: Real-time Command Streaming */}
          <StaggerItem className="md:col-span-6">
            <div className="glass-card gradient-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 overflow-hidden rounded-lg group h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stream
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    Real-time Streaming
                  </h4>
                </div>
                <p className="font-body-md text-body-md text-text-dim">
                  Long-running shell commands stream their output live to the terminal instead of freezing with a spinner, so you always know what's happening.
                </p>
              </div>
              <div className="w-full sm:w-40 h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-1 uppercase">LIVE LOGS</div>
                <div className="w-full font-mono text-[9px] text-text-dim bg-surface/30 px-2 py-1.5 rounded border border-border-muted mt-1 h-full overflow-hidden flex flex-col justify-end">
                  <div>Building module...</div>
                  <div>Optimizing assets...</div>
                  <div className="text-secondary flex items-center gap-1"><span className="w-1 h-1 bg-secondary rounded-full animate-pulse"></span> webpack compiling</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 18: Universal AST Parsing */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_tree
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Universal AST Parsing
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Uses tree-sitter for flawless codebase outlines and surgical syntax-tree-level edits across Python, JS, TS, JSX, and TSX.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                <div className="font-code-sm text-primary text-[10px] mb-2 uppercase text-center">TREE-SITTER</div>
                <div className="w-full font-mono text-[9px] text-text-dim bg-surface/50 p-2 rounded border border-border-muted flex-1 flex flex-col justify-center">
                  <div className="text-secondary">FunctionDeclaration</div>
                  <div className="pl-2">Identifier: <span className="text-on-surface">main</span></div>
                  <div className="pl-2 text-primary">Block</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 19: Headless Browser Automation */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  web
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Headless Browser
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Built-in Playwright integration allows Aizen to navigate web pages, evaluate JS, click elements, and take screenshots for visual QA.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(0,219,233,1)]"></div>
                <div className="font-code-sm text-secondary text-[10px] mb-2 uppercase text-center">PLAYWRIGHT</div>
                <div className="w-full font-mono text-[9px] text-text-dim bg-surface/50 p-2 rounded border border-border-muted flex-1 flex flex-col justify-center gap-1">
                   <div><span className="text-secondary">browser_goto</span>("https...")</div>
                   <div><span className="text-secondary">browser_screenshot</span>()</div>
                   <div className="text-green-400">Captured UI state</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Feature 20: Multi-Agent Orchestration */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 flex flex-col gap-6 rounded-lg group h-full">
              <div className="flex-1">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  groups
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Multi-Agent Sync
                </h4>
                <p className="font-body-md text-body-md text-text-dim">
                  Aizen acts as a Manager Agent, using `delegate_task` to spawn background sub-agents and execute complex tasks concurrently.
                </p>
              </div>
              <div className="w-full h-28 bg-terminal-black border border-border-muted relative flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 shrink-0">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-tertiary shadow-[0_0_10px_rgba(157,0,255,1)]"></div>
                <div className="font-code-sm text-tertiary text-[10px] mb-2 uppercase text-center">SUB-AGENTS</div>
                <div className="w-full font-mono text-[9px] text-text-dim flex flex-col justify-center gap-2 flex-1">
                  <div className="flex justify-between items-center bg-surface px-2 py-1 rounded border border-border-muted"><span>Agent 1: DB</span> <span className="text-secondary">Done</span></div>
                  <div className="flex justify-between items-center bg-surface px-2 py-1 rounded border border-border-muted"><span>Agent 2: UI</span> <span className="text-primary animate-pulse">Running</span></div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
