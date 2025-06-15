import { Card, CardContent } from "@/components/ui/card";
import { Timer, Palette, Volume2, Settings, Zap, Shield } from "lucide-react";

export function Features() {
  return (
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
            {/* Feature cards */}
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
                  Personalize your workspace with beautiful themes that match
                  your style and reduce eye strain during long study sessions.
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
                  it&apos;s time to take a break or start your next session.
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
                <h4 className="font-semibold text-white">Automatic Updates</h4>
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
  );
}
