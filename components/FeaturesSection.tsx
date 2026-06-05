import React from "react";

export default function FeaturesSection() {
  return (
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
                content_cut
              </span>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Surgical File Editing</h4>
              <p className="font-body-md text-body-md text-text-dim max-w-md">
                Instead of rewriting entire files, Aether uses precise search-and-replace edits with color-coded diff previews. Lightning fast modifications across your codebase.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                edit_document
              </span>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="md:col-span-4 bg-surface-raised border border-border-muted p-8 hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              sync_alt
            </span>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Asynchronous Architecture</h4>
            <p className="font-body-md text-body-md text-text-dim">
              Fully asynchronous operations leveraging asyncio. Run background tasks like tests or builds without blocking the chat.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="md:col-span-4 bg-surface-raised border border-border-muted p-8 hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              storage
            </span>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-3">SQLite Persistence</h4>
            <p className="font-body-md text-body-md text-text-dim">
              Conversations auto-save on exit. Seamlessly manage sessions with checkpoints and undo capability.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="md:col-span-8 bg-surface-raised border border-border-muted p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 hover:border-primary/50 transition-colors overflow-hidden">
            <div className="flex-1">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Project-Specific Context</h4>
              <p className="font-body-md text-body-md text-text-dim">
                Auto-loads <code className="text-primary font-mono text-sm bg-terminal-black px-1 py-0.5 rounded">.aether_rules</code> or <code className="text-primary font-mono text-sm bg-terminal-black px-1 py-0.5 rounded">.cursorrules</code> from your working directory. Use <code className="text-primary font-mono text-sm bg-terminal-black px-1 py-0.5 rounded">@</code> mentions with smart autocomplete for targeted context.
              </p>
            </div>
            <div className="w-full sm:w-48 h-24 bg-terminal-black border border-border-muted relative flex items-center justify-center">
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
              <div className="font-code-sm text-primary">Context Aware</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
