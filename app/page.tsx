import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import ToolsSection from "../components/ToolsSection";
import ComparisonSection from "../components/ComparisonSection";
import InstallationSection from "../components/InstallationSection";
import WorkflowSection from "../components/WorkflowSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container min-h-screen bg-terminal-black text-on-surface">
      {/* Background Noise & Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.02]"></div>

      <NavBar />

      <main className="pt-24">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ToolsSection />
        <ComparisonSection />
        <InstallationSection />
        <WorkflowSection />
      </main>

      <Footer />
    </div>
  );
}
