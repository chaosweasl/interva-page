"use client";

import { Button } from "@/components/ui/button";
import { Github, Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";

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
              href="#installation"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Installation
            </Link>
            <Link
              href="#download"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Download
            </Link>
            <Link
              href="https://github.com/chaosweasl/interva"
              target="_blank"
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
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
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
              <Link
                href="https://github.com/chaosweasl/interva/releases/latest"
                target="_blank"
              >
                <Download className="mr-2 h-4 w-4" />
                Downloads
              </Link>
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
                href="#installation"
                className="text-sm font-medium text-gray-300 hover:text-white"
              >
                Installation
              </Link>
              <Link
                href="#download"
                className="text-sm font-medium text-gray-300 hover:text-white"
              >
                Download
              </Link>
              <Link
                href="https://github.com/chaosweasl/interva"
                target="_blank"
                className="text-sm font-medium text-gray-300 hover:text-white"
              >
                GitHub
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  <Link
                    href="https://github.com/chaosweasl/interva"
                    target="_blank"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  <Link
                    href="https://github.com/chaosweasl/interva/releases/latest"
                    target="_blank"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Downloads
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
