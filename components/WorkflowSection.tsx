import React from "react";

export default function WorkflowSection() {
  return (
    <>
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface border-t border-border-muted" id="usage">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">Developer Workflow</h2>
            <h3 className="font-headline-md text-headline-md text-on-surface">How to Use Aether</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-8 font-body-md text-body-md">
            <div className="border border-border-muted bg-surface-raised p-6 rounded-lg">
              <h4 className="font-headline-md text-headline-md text-primary mb-2">1. Launch the Agent</h4>
              <p className="text-text-dim">
                Simply open your terminal and type <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">aether</code>. You will be prompted to supply your OpenRouter API key on your first start, which is securely saved to <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">~/.aether_config.json</code>.
              </p>
            </div>
            <div className="border border-border-muted bg-surface-raised p-6 rounded-lg">
              <h4 className="font-headline-md text-headline-md text-primary mb-2">2. Attach Context</h4>
              <p className="text-text-dim">
                Mention files directly in your query by prefixing them with the <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">@</code> symbol. Aether provides smart tab-completion that filters out <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">.gitignore</code>d files.
              </p>
            </div>
            <div className="border border-border-muted bg-surface-raised p-6 rounded-lg">
              <h4 className="font-headline-md text-headline-md text-primary mb-2">3. MCP Server Integration</h4>
              <p className="text-text-dim">
                Aether supports Model Context Protocol (MCP). Configure custom local servers in your config to let the AI connect to local SQLite databases, explore the web, or run custom company workflows.
              </p>
            </div>
            <div className="border border-border-muted bg-surface-raised p-6 rounded-lg">
              <h4 className="font-headline-md text-headline-md text-primary mb-2">4. Build and Monitor</h4>
              <p className="text-text-dim">
                Let Aether spin up a long-running background task while you continue talking. Read-only commands execute automatically, while destructive commands always require your explicit confirmation (unless you enable <code className="text-primary font-mono bg-terminal-black px-1.5 py-0.5 rounded text-sm">--yolo</code> mode).
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <span className="material-symbols-outlined text-secondary">terminal</span>
              Built for the CLI
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
    </>
  );
}
