"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Timer,
  Palette,
  Volume2,
  Download,
  Github,
  Twitter,
  Mail,
  Settings,
  Zap,
  Shield,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IntervaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/images/interva-logo.svg"
                alt="interva logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">interva</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#download"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Download
              </Link>
              <Link
                href="https://github.com/username/interva"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white"
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 bg-gray-900 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="#download"
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  Download
                </Link>
                <Link
                  href="https://github.com/username/interva"
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  GitHub
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge
                variant="secondary"
                className="mb-6 bg-orange-900/30 text-orange-300 hover:bg-orange-900/30 border-orange-500/50"
              >
                <Zap className="mr-1 h-3 w-3" />
                Now Available for Windows
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Study Smarter with{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Focus
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                Transform your productivity with interva - a beautifully
                designed Pomodoro timer that eliminates distractions and keeps
                you in the zone. Customizable themes, smart notifications, and
                automatic updates included.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Windows
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-400">
                Free and open source • Automatic updates • No account required
              </p>
            </div>
          </div>

          {/* Hero Images/Screenshots */}
          <div className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Main timer interface */}
              <div className="relative mb-12">
                <div className="mx-auto max-w-md">
                  <Image
                    src="/images/interva-main.png"
                    alt="interva main timer interface"
                    width={400}
                    height={600}
                    className="rounded-2xl shadow-2xl mx-auto"
                  />
                </div>
              </div>

              {/* Settings and themes showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <Image
                    src="/images/interva-settings.png"
                    alt="interva timer settings"
                    width={350}
                    height={500}
                    className="rounded-2xl shadow-xl mx-auto"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    Customizable Timer Settings
                  </h3>
                  <p className="text-gray-400">
                    Adjust focus, break, and long break durations to fit your
                    workflow
                  </p>
                </div>

                <div className="text-center">
                  <Image
                    src="/images/interva-themes.png"
                    alt="interva theme options"
                    width={350}
                    height={500}
                    className="rounded-2xl shadow-xl mx-auto"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    Beautiful Themes
                  </h3>
                  <p className="text-gray-400">
                    Choose from multiple themes including Light, Dark,
                    Synthwave, and Halloween
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-32 bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to stay focused
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Built with productivity in mind, interva combines the proven
                Pomodoro Technique with modern design and smart features.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Feature cards with dark theme */}
                <Card className="border-gray-700 bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 mb-4">
                      <Timer className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Pomodoro Timer
                    </h3>
                    <p className="text-gray-300">
                      Proven 25-minute focus sessions with customizable work and
                      break intervals to maximize your productivity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-700 bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                      <Palette className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Custom Themes
                    </h3>
                    <p className="text-gray-300">
                      Personalize your workspace with beautiful themes that
                      match your style and reduce eye strain during long study
                      sessions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-700 bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-500 mb-4">
                      <Volume2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Smart Notifications
                    </h3>
                    <p className="text-gray-300">
                      Gentle sound effects and visual cues that alert you when
                      it's time to take a break or start your next session.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-700 bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Flexible Settings
                    </h3>
                    <p className="text-gray-300">
                      Adjust timer durations, notification preferences, and app
                      behavior to create the perfect study environment for you.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mx-auto mt-16 max-w-4xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Automatic Updates
                    </h4>
                    <p className="text-gray-300">
                      Stay up-to-date with the latest features and improvements
                      automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-500">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Privacy First</h4>
                    <p className="text-gray-300">
                      No data collection, no accounts required. Your focus time
                      stays private.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section id="download" className="py-20 sm:py-32 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to boost your productivity?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Join thousands of students and professionals who have
                transformed their study habits with interva.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Windows
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Download className="mr-1 h-4 w-4" />
                  Free Download
                </div>
                <div className="flex items-center">
                  <Shield className="mr-1 h-4 w-4" />
                  Open Source
                </div>
                <div className="flex items-center">
                  <Zap className="mr-1 h-4 w-4" />
                  Auto Updates
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/interva-logo.svg"
                  alt="interva logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-white">interva</span>
              </div>
              <p className="text-gray-400 max-w-md">
                A modern Pomodoro timer designed to help you study more
                efficiently with less distractions. Built with focus and
                productivity in mind.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#download"
                    className="hover:text-white transition-colors"
                  >
                    Download
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/username/interva/releases"
                    className="hover:text-white transition-colors"
                  >
                    Releases
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/username/interva/issues"
                    className="hover:text-white transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/username/interva"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com/interva"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="mailto:hello@interva.app"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} interva. Open source and free
              forever.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="https://github.com/username/interva/blob/main/LICENSE"
                className="hover:text-white transition-colors"
              >
                License
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
