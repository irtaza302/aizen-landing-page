"use client";

import React, { useState, useEffect, useRef } from "react";

const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export default function AnimatedTerminal() {
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const [currentAction, setCurrentAction] = useState<{ type: 'typing', text: string } | { type: 'spinner', text: string } | null>(null);
  const [spinnerIdx, setSpinnerIdx] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, currentAction]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinnerIdx((i) => (i + 1) % SPINNER_FRAMES.length);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    
    const typeCommand = async (text: string, speed: number = 40) => {
      for (let i = 0; i <= text.length; i++) {
        if (isCancelled) break;
        setCurrentAction({ type: 'typing', text: text.slice(0, i) });
        await sleep(speed + Math.random() * speed);
      }
      if (!isCancelled) await sleep(300);
    };

    const pushHistory = (node: React.ReactNode) => {
      if (isCancelled) return;
      setHistory(prev => [...prev, node]);
      setCurrentAction(null);
    };

    const runAnimation = async () => {
      while (!isCancelled) {
        setHistory([]);
        setCurrentAction(null);
        await sleep(1000);
        if (isCancelled) break;
        
        await typeCommand('aizen', 80);
        pushHistory(
          <div key="cmd1" className="mb-4">
            <span className="text-primary">➜</span> <span className="text-secondary ml-1">~</span> <span className="text-on-surface ml-1">aizen</span>
          </div>
        );
        
        pushHistory(
          <div key="init" className="mb-6">
            <div className="text-primary mb-4 animate-[pulse_2s_ease-in-out_1]">
              <pre className="leading-tight font-mono text-xs sm:text-sm text-primary-fixed-dim">
                {"   ___         _   _               \n" +
                 "  / _ \\  ___  | |_| |__   ___ _ __ \n" +
                 " / /_\\ \\/ _ \\ | __| '_ \\ / _ \\ '__|\n" +
                 "/ /_\\\\ \\  __/ | |_| | | |  __/ |   \n" +
                 "\\____/ \\___|  \\__|_| |_|\\___|_|   "}
              </pre>
            </div>
            <div className="text-on-surface-variant font-code-sm">
              <span className="text-primary">[SYSTEM]</span> Initializing Aizen AI v2.4.1...<br />
              <span className="text-primary">[SYSTEM]</span> Model: anthropic/claude-3.7-sonnet<br />
              <span className="text-primary">[SYSTEM]</span> Project rules loaded from <span className="text-secondary">.cursorrules</span>
            </div>
          </div>
        );
        await sleep(1500);

        await typeCommand('Find the main layout and update it to support dark mode.', 40);
        pushHistory(
          <div key="cmd2" className="mb-4">
            <span className="text-primary">➜</span> <span className="text-secondary ml-1">~</span> <span className="text-on-surface ml-1">Find the main layout and update it to support dark mode.</span>
          </div>
        );

        setCurrentAction({ type: 'spinner', text: 'Analyzing workspace...' });
        await sleep(2000);
        pushHistory(
          <div key="aizen1" className="text-primary-fixed-dim whitespace-normal mb-2">
            <span className="text-primary font-bold">AETHER:</span> Invoking <span className="underline decoration-secondary underline-offset-2">grep_search</span> for &quot;layout&quot;...
          </div>
        );

        await sleep(800);
        pushHistory(
          <div key="grep" className="bg-surface-container border border-border-muted rounded p-3 mb-4 font-mono text-xs sm:text-sm text-text-dim animate-[fadeIn_0.3s_ease-out_forwards]">
            <div className="text-secondary mb-1">$ grep_search &quot;layout&quot;</div>
            app/layout.tsx:1: export default function RootLayout()<br/>
            app/page.tsx:12: className=&quot;layout-container&quot;
          </div>
        );

        setCurrentAction({ type: 'spinner', text: 'Reading app/layout.tsx...' });
        await sleep(1500);
        pushHistory(
          <div key="aizen2" className="text-primary-fixed-dim whitespace-normal mb-2">
            <span className="text-primary font-bold">AETHER:</span> Making surgical edits to <span className="text-on-surface">app/layout.tsx</span> to inject NextThemeProvider.
          </div>
        );

        await sleep(1000);
        pushHistory(
          <div key="diff" className="bg-surface-container border border-border-muted rounded p-3 mb-4 font-mono text-xs sm:text-sm animate-[fadeIn_0.3s_ease-out_forwards]">
            <div className="text-secondary mb-1">[DIFF] app/layout.tsx</div>
            <div className="text-error bg-error/10 px-1">- &lt;html lang=&quot;en&quot;&gt;</div>
            <div className="text-tertiary bg-tertiary/10 px-1">+ &lt;html lang=&quot;en&quot; suppressHydrationWarning&gt;</div>
            <div className="text-tertiary bg-tertiary/10 px-1">+   &lt;body className=&quot;bg-background text-foreground&quot;&gt;</div>
            <div className="text-tertiary bg-tertiary/10 px-1">+     &lt;ThemeProvider attribute=&quot;class&quot; defaultTheme=&quot;system&quot;&gt;</div>
            <div className="text-text-dim px-1">        {"{children}"}</div>
            <div className="text-tertiary bg-tertiary/10 px-1">+     &lt;/ThemeProvider&gt;</div>
            <div className="text-error bg-error/10 px-1">-   &lt;/body&gt;</div>
            <div className="text-tertiary bg-tertiary/10 px-1">+   &lt;/body&gt;</div>
            <div className="text-text-dim px-1">  &lt;/html&gt;</div>
          </div>
        );

        setCurrentAction({ type: 'spinner', text: 'Running background verification...' });
        await sleep(2500);
        pushHistory(
          <div key="aizen3" className="text-primary-fixed-dim whitespace-normal mb-2">
            <span className="text-primary font-bold">AETHER:</span> Started background task <span className="text-secondary bg-surface px-1 py-0.5 rounded border border-border-muted">bg_lint_8x9</span> for \`npm run lint\`.
          </div>
        );

        await sleep(1500);
        pushHistory(
          <div key="task" className="bg-surface-container border border-border-muted rounded p-3 mb-4 font-mono text-xs sm:text-sm text-text-dim animate-[fadeIn_0.3s_ease-out_forwards]">
            <div className="text-secondary mb-1">[bg_lint_8x9] Running...</div>
            <div className="text-tertiary">✓ Linting passed successfully. 0 errors, 0 warnings.</div>
          </div>
        );

        setCurrentAction({ type: 'spinner', text: 'Finalizing...' });
        await sleep(1000);
        pushHistory(
          <div key="aizen4" className="text-primary-fixed-dim whitespace-normal mb-4">
            <span className="text-primary font-bold">AETHER:</span> <span className="text-tertiary">✓</span> All done! Dark mode support has been implemented safely.
          </div>
        );

        await sleep(8000);
      }
    };

    runAnimation();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-border-muted bg-surface-container-lowest shadow-2xl glow-pulse w-full relative">
      {/* CRT Scanline overlay */}
      <div className="scanlines rounded-lg"></div>

      {/* Terminal chrome */}
      <div className="bg-surface-container flex items-center px-4 py-2.5 border-b border-border-muted relative">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-error/60 hover:bg-error transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-tertiary/60 hover:bg-tertiary transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-secondary/60 hover:bg-secondary transition-colors"></div>
        </div>
        <div className="mx-auto font-code-sm text-code-sm text-text-dim">aizen — zsh — 80×24</div>
      </div>

      {/* Terminal body */}
      <div 
        ref={terminalRef}
        className="p-6 text-left font-code-md text-code-md h-[440px] bg-terminal-black overflow-y-auto whitespace-pre hide-scrollbar relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        {history}
        
        {currentAction?.type === 'typing' && (
          <div className="mb-4">
            <span className="text-primary">➜</span> <span className="text-secondary ml-1">~</span> <span className="text-on-surface ml-1">{currentAction.text}</span>
            <span className="w-2 h-5 bg-primary ml-1 inline-block align-middle cursor-blink"></span>
          </div>
        )}

        {currentAction?.type === 'spinner' && (
          <div className="text-primary-fixed-dim whitespace-normal mb-4">
            <span className="text-secondary font-bold mr-2">{SPINNER_FRAMES[spinnerIdx]}</span> 
            {currentAction.text}
          </div>
        )}

        {!currentAction && history.length > 0 && (
          <div className="mt-4 flex items-center">
            <span className="text-primary">➜</span> <span className="text-secondary ml-2">~</span>
            <span className="w-2 h-5 bg-primary ml-2 inline-block align-middle cursor-blink"></span>
          </div>
        )}
      </div>
    </div>
  );
}
