import { Button } from "@/components/ui/button";
import { Download, Github, Shield, Zap, Apple, Monitor } from "lucide-react";
import { FaLinux } from "react-icons/fa";

export function DownloadCTA() {
  return (
    <section id="download" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to boost your productivity?
          </h2>

          {/* Platform icons as extra large buttons, no tooltips */}
          <div className="mt-10 flex items-center justify-center gap-16 mb-8">
            <a
              href="/api/download/windows"
              title="Download for Windows"
              className="flex flex-col items-center"
            >
              <Monitor className="h-24 w-24 text-blue-400 hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="/api/download/macos"
              title="Download for macOS"
              className="flex flex-col items-center"
            >
              <Apple className="h-24 w-24 text-gray-200 hover:text-gray-300 transition-colors" />
            </a>
            <a
              href="/api/download/linux"
              title="Download for Linux"
              className="flex flex-col items-center"
            >
              <FaLinux className="h-24 w-24 text-green-400 hover:text-green-500 transition-colors" />
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white"
            >
              <a
                href="https://github.com/chaosweasl/interva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
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
  );
}
