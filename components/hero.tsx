import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
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
            Transform your productivity with interva - a beautifully designed
            Pomodoro timer that eliminates distractions and keeps you in the
            zone. Customizable themes, smart notifications, and automatic
            updates included.
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
              className="px-8 py-3 text-lg border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
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
                Choose from multiple themes including Light, Dark, Synthwave,
                and Halloween
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
