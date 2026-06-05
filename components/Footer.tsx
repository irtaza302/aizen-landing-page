import React from "react";

export default function Footer() {
  return (
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
            Features
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
  );
}
