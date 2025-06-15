"use client";
import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";

export default function IntervaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero />
        <Features />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
