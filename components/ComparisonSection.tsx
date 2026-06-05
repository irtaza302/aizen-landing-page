"use client";

import React from "react";
import { FadeInOnScroll } from "./AnimationWrapper";

const features = [
  "MCP Server Integration",
  "Background Task Execution",
  "SQLite Session Persistence",
  "Live Cost Tracking (USD)",
  "File Backup & /undo",
  "Smart @-mention Autocomplete",
  "Surgical Diff Editing",
  "Project-Specific Rules",
  "--yolo Auto-Approve Mode",
];

const comparisonData = [
  { feature: "Runs 100% in Terminal", aizen: true, others: "Partial" },
  { feature: "MCP Server Support", aizen: true, others: false },
  { feature: "Async Background Tasks", aizen: true, others: false },
  { feature: "Session Persistence (SQLite)", aizen: true, others: false },
  { feature: "Live Cost Tracking", aizen: true, others: "Partial" },
  { feature: "Surgical File Edits with Diff", aizen: true, others: "Partial" },
  { feature: "File Backup & Undo", aizen: true, others: false },
  { feature: "Project-Specific Rules", aizen: true, others: true },
  { feature: "Open Source", aizen: true, others: "Partial" },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface border-y border-border-muted">
      <div className="max-w-container-max mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase">
              Why Aizen
            </h2>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              Built Different from the Ground Up
            </h3>
            <p className="font-body-md text-body-md text-text-dim max-w-2xl mx-auto">
              Aizen isn&apos;t another wrapper around an API. It&apos;s a purpose-built CLI agent with features that professional developers actually need.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature pills */}
          <FadeInOnScroll direction="left" delay={0.1}>
            <div>
              <h4 className="font-code-md text-code-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">verified</span> What You Get
              </h4>
              <div className="flex flex-wrap gap-3">
                {features.map((feat, i) => (
                  <span
                    key={feat}
                    className="glass-card px-4 py-2 font-code-sm text-code-sm text-on-surface-variant rounded-full hover:text-primary transition-colors cursor-default"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* Comparison table */}
          <FadeInOnScroll direction="right" delay={0.2}>
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full font-code-sm text-code-sm">
                  <thead>
                    <tr className="border-b border-border-muted bg-surface-container/50">
                      <th className="text-left p-4 text-text-dim font-normal">Feature</th>
                      <th className="p-4 text-primary font-bold text-center">Aizen</th>
                      <th className="p-4 text-text-dim font-normal text-center">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-border-muted/50 hover:bg-surface-container/30 transition-colors"
                      >
                        <td className="p-4 text-on-surface-variant">{row.feature}</td>
                        <td className="p-4 text-center">
                          <span className="material-symbols-outlined comparison-check text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                            check_circle
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          {row.others === true ? (
                            <span className="material-symbols-outlined text-text-dim text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                              check_circle
                            </span>
                          ) : row.others === false ? (
                            <span className="material-symbols-outlined comparison-cross text-lg">
                              cancel
                            </span>
                          ) : (
                            <span className="text-text-dim text-xs">Partial</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
