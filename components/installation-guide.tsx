import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Apple,
  Download,
  Shield,
  AlertTriangle,
  CheckCircle,
  Terminal,
  FileArchive,
  Settings,
} from "lucide-react";
import { FaLinux, FaWindows } from "react-icons/fa";
import Link from "next/link";

export function InstallationGuide() {
  return (
    <section id="installation" className="py-12 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 mx-auto">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Installation Guide
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get Interva up and running on your system in just a few simple steps
          </p>
        </div>

        {/* Installation Tabs */}
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Windows Installation */}
            <Card className="border-gray-700 bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:min-w-[340px] xl:min-w-[400px] 2xl:min-w-[460px]">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-white flex items-center justify-center gap-2">
                  <FaWindows className="h-5 w-5" />
                  Windows
                </CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  .msi installer
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Download the installer
                      </p>
                      <p className="text-gray-400 text-sm">
                        Get the latest .msi file from our releases
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Run the installer
                      </p>
                      <p className="text-gray-400 text-sm">
                        Double-click the .msi file to start installation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Handle security warnings
                      </p>
                      <p className="text-gray-400 text-sm">
                        Click &quot;More info&quot; &rarr; &quot;Run
                        anyway&quot; if Windows Defender appears
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-white font-medium">Launch Interva</p>
                      <p className="text-gray-400 text-sm">
                        Find Interva in your Start Menu or Desktop
                      </p>
                    </div>
                  </div>
                </div>

                {/* Winget Alternative */}
                <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-4 w-4 text-blue-400" />
                    <span className="text-white font-medium text-sm">
                      Alternative: Winget
                    </span>
                  </div>
                  <code className="text-xs text-gray-300 bg-gray-900 p-2 rounded block">
                    winget install chaosweasl.interva
                  </code>
                </div>

                {/* Troubleshooting */}
                <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-200 text-sm font-medium">
                        Antivirus blocking download?
                      </p>
                      <p className="text-yellow-300/80 text-xs mt-1">
                        Temporarily disable real-time protection or browser
                        security settings
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/api/download/windows">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Windows
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* macOS Installation */}
            <Card className="border-gray-700 bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:min-w-[340px] xl:min-w-[400px] 2xl:min-w-[460px]">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-gray-400 to-gray-600">
                    <Apple className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-white flex items-center justify-center gap-2">
                  <Apple className="h-5 w-5" />
                  macOS
                </CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  .dmg disk image
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-white text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Download & mount DMG
                      </p>
                      <p className="text-gray-400 text-sm">
                        Download and double-click the .dmg file
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-white text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Remove quarantine flag
                      </p>
                      <p className="text-gray-400 text-sm">
                        Run the terminal command below to bypass Gatekeeper
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-white text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Install the app</p>
                      <p className="text-gray-400 text-sm">
                        Drag Interva to your Applications folder
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Launch from Applications
                      </p>
                      <p className="text-gray-400 text-sm">
                        Find Interva in your Applications folder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terminal Command */}
                <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-4 w-4 text-gray-400" />
                    <span className="text-white font-medium text-sm">
                      Terminal Command
                    </span>
                  </div>
                  <code className="text-xs text-gray-300 bg-gray-900 p-2 rounded block break-all">
                    sudo xattr -rd com.apple.quarantine
                    &quot;/Users/$(whoami)/Downloads/interva_*.dmg&quot;
                  </code>
                </div>

                {/* Alternative Download */}
                <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <FileArchive className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 text-sm font-medium">
                        Alternative: .app.tar.gz
                      </p>
                      <p className="text-blue-300/80 text-xs mt-1">
                        Extract and move to Applications manually
                      </p>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="mt-4 p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-red-200 text-sm font-medium">
                        Auto-updater disabled
                      </p>
                      <p className="text-red-300/80 text-xs mt-1">
                        Manual updates required due to code signing limitations
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-gray-600 hover:bg-gray-700"
                >
                  <Link href="/api/download/macos">
                    <Download className="mr-2 h-4 w-4" />
                    Download for macOS
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Linux Installation */}
            <Card className="border-gray-700 bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:min-w-[340px] xl:min-w-[400px] 2xl:min-w-[460px]">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600">
                    <FaLinux className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-white flex items-center justify-center gap-2">
                  <FaLinux className="h-5 w-5" />
                  Linux
                </CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  .AppImage executable
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Download AppImage
                      </p>
                      <p className="text-gray-400 text-sm">
                        Get the latest .AppImage file
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Make executable</p>
                      <p className="text-gray-400 text-sm">
                        Right-click → Properties → Permissions → Execute
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Run the application
                      </p>
                      <p className="text-gray-400 text-sm">
                        Double-click or run from terminal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Optional: Add to menu
                      </p>
                      <p className="text-gray-400 text-sm">
                        Use AppImageLauncher for desktop integration
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terminal Commands */}
                <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-4 w-4 text-green-400" />
                    <span className="text-white font-medium text-sm">
                      Terminal Commands
                    </span>
                  </div>
                  <div className="space-y-2">
                    <code className="text-xs text-gray-300 bg-gray-900 p-2 rounded block">
                      chmod +x interva_*.AppImage
                    </code>
                    <code className="text-xs text-gray-300 bg-gray-900 p-2 rounded block">
                      ./interva_*.AppImage
                    </code>
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="mt-4 p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-green-200 text-sm font-medium">
                        Pro tip
                      </p>
                      <p className="text-green-300/80 text-xs mt-1">
                        Install AppImageLauncher for seamless desktop
                        integration
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Link href="/api/download/linux">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Linux
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Common Issues Section */}
        <div className="mx-auto max-w-4xl mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Common Issues & Solutions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-400" />
                  Antivirus Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  The app may be flagged as potentially unwanted software due to
                  lack of code signing.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <strong className="text-white">Solution:</strong> The app is
                    completely safe and open-source. Temporarily disable
                    real-time protection or add an exception for the installer.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-400" />
                  App Won&apos;t Start
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  If Interva fails to launch after installation.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <strong className="text-white">Solution:</strong> Try
                    running as administrator (Windows) or check system
                    requirements. Restart your computer if needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mx-auto max-w-2xl mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            System Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <FaWindows className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">Windows</p>
              <p className="text-gray-400">Windows 10 or later</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <Apple className="h-6 w-6 text-gray-400 mx-auto mb-2" />
              <p className="text-white font-medium">macOS</p>
              <p className="text-gray-400">macOS 10.15 or later</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <FaLinux className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-white font-medium">Linux</p>
              <p className="text-gray-400">Most modern distributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
