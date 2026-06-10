"use client";

import React from "react";
import { CountUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const stats = [
  { label: "GitHub Stars", value: 250, suffix: "+", icon: "star" },
  { label: "Built-in Tools", value: 12, suffix: "", icon: "build" },
  { label: "Slash Commands", value: 19, suffix: "", icon: "keyboard_command_key" },
  { label: "Install Methods", value: 4, suffix: "", icon: "download" },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="max-w-container-max mx-auto relative z-10">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-gutter" staggerDelay={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass-card gradient-border rounded-lg p-6 text-center group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
                <span
                  className="material-symbols-outlined text-primary text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {stat.icon}
                </span>
                <div className="font-headline-lg text-headline-lg text-on-surface mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="font-label-caps text-label-caps text-text-dim uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
