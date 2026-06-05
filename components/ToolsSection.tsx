import React from "react";

export default function ToolsSection() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-border-muted" id="tools">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">Extensible Interface</h2>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Powerful Tools & Commands</h3>
          <p className="font-body-md text-body-md text-text-dim max-w-2xl mx-auto">
            Aether empowers your AI with 9 built-in tools and comprehensive slash commands to control the environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Tools List */}
          <div className="bg-surface border border-border-muted p-6 rounded-lg">
            <h4 className="font-code-md text-code-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">build</span> Core Tools
            </h4>
            <ul className="space-y-4 font-body-md text-body-md text-text-dim">
              <li className="flex gap-4"><code className="text-secondary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">edit_file</code> <span>Surgical search-and-replace on existing files with diff preview.</span></li>
              <li className="flex gap-4"><code className="text-secondary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">run_command</code> <span>Execute shell commands safely; supports async background execution.</span></li>
              <li className="flex gap-4"><code className="text-secondary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">grep_search</code> <span>Search for text or regex patterns across the entire codebase.</span></li>
              <li className="flex gap-4"><code className="text-secondary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">check_task</code> <span>Check status and read stdout/stderr of background commands.</span></li>
              <li className="flex gap-4 text-primary text-sm mt-4">Plus: read_file, write_file, kill_task, list_directory, find_files</li>
            </ul>
          </div>

          {/* Commands List */}
          <div className="bg-surface border border-border-muted p-6 rounded-lg">
            <h4 className="font-code-md text-code-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">keyboard_command_key</span> Slash Commands
            </h4>
            <ul className="space-y-4 font-body-md text-body-md text-text-dim">
              <li className="flex gap-4"><code className="text-tertiary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">/checkpoint</code> <span>Save a conversation snapshot to memory to revert back later.</span></li>
              <li className="flex gap-4"><code className="text-tertiary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">/compact</code> <span>Summarize older messages using AI to save context window tokens.</span></li>
              <li className="flex gap-4"><code className="text-tertiary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">/usage</code> <span>Show real-time token usage and estimated session cost in USD.</span></li>
              <li className="flex gap-4"><code className="text-tertiary font-mono bg-terminal-black px-1.5 py-0.5 rounded w-32 shrink-0">/mcp</code> <span>View configured Model Context Protocol servers and status.</span></li>
              <li className="flex gap-4 text-primary text-sm mt-4">Plus: /undo, /model, /save, /load, /export, /config, and more</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
