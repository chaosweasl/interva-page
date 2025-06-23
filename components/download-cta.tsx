import { Button } from "@/components/ui/button";
import { Download, Github, Shield, Zap, Apple, Monitor } from "lucide-react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

export function DownloadCTA() {
  return (
    <section id="download" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to boost your productivity?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join thousands of students and professionals who have transformed
            their study habits with interva.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Platform selector */}
            <div className="flex gap-4 mb-6">
              <a href="/api/download/windows" title="Download for Windows">
                <Monitor className="h-8 w-8 text-blue-400 hover:text-blue-500 transition-colors" />
              </a>
              <a href="/api/download/macos" title="Download for macOS">
                <Apple className="h-8 w-8 text-gray-200 hover:text-gray-300 transition-colors" />
              </a>
              <a href="/api/download/linux" title="Download for Linux">
                <FaLinux className="h-8 w-8 text-green-400 hover:text-green-500 transition-colors" />
              </a>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg"
            >
              <a href="/api/download/windows">
                <Download className="mr-2 h-5 w-5" />
                Download for Windows
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white px-8 py-4 text-lg"
            >
              <a href="/api/download/macos">
                <Apple className="mr-2 h-5 w-5" />
                Download for macOS
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-8 py-4 text-lg"
            >
              <a href="/api/download/linux">
                <FaLinux className="mr-2 h-5 w-5" />
                Download for Linux
              </a>
            </Button>
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
