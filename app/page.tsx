"use client";
import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { InstallationGuide } from "@/components/installation-guide";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";

export default function IntervaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-zinc-950">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero />
        <Features />
        <InstallationGuide />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
