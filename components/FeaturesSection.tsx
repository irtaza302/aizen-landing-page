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
            <div className="glass-card gradient-border p-8 relative overflow-hidden group rounded-lg h-full">
              <div className="relative z-10">
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
            <div className="glass-card gradient-border p-8 rounded-lg group h-full">
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
          </StaggerItem>

          {/* Feature 3: Streaming & Live Preview */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 rounded-lg group h-full">
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
          </StaggerItem>

          {/* Feature 4: SQLite Persistence */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 rounded-lg group h-full">
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
          </StaggerItem>

          {/* Feature 5: Smart Autocomplete */}
          <StaggerItem className="md:col-span-4">
            <div className="glass-card gradient-border p-8 rounded-lg group h-full">
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
        </StaggerContainer>
      </div>
    </section>
  );
}
