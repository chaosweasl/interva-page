"use client";

import { Button } from "@/components/ui/button";
import { Github, Download, Menu, X, Apple, Monitor } from "lucide-react";
import { FaLinux } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
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
              href="https://github.com/chaosweasl/interva"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white"
            >
              <a
                href="https://github.com/chaosweasl/interva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              <a href="https://github.com/chaosweasl/interva/releases/latest">
                <Download className="mr-2 h-4 w-4" />
                Downloads
              </a>
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
                href="https://github.com/chaosweasl/interva"
                className="text-sm font-medium text-gray-300 hover:text-white"
              >
                GitHub
              </Link>
              <div className="flex flex-row gap-4 py-2 justify-center">
                <a href="/api/download/windows" title="Download for Windows">
                  <Monitor className="h-6 w-6 text-blue-400 hover:text-blue-500 transition-colors" />
                </a>
                <a href="/api/download/macos" title="Download for macOS">
                  <Apple className="h-6 w-6 text-gray-200 hover:text-gray-300 transition-colors" />
                </a>
                <a href="/api/download/linux" title="Download for Linux">
                  <FaLinux className="h-6 w-6 text-green-400 hover:text-green-500 transition-colors" />
                </a>
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
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
  );
}
