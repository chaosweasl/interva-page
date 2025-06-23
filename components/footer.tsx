import { Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLinux } from "react-icons/fa";

export function Footer() {
  return (
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
                  href="https://github.com/chaosweasl/interva/releases"
                  className="hover:text-white transition-colors"
                >
                  Releases
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/chaosweasl/interva/issues"
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
                href="https://github.com/chaosweasl"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:17daniel.dev@gmail.com"
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
            © {new Date().getFullYear()} interva. Open source and free forever.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6 text-sm text-gray-400">
            {/* <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link> */}
            <Link
              href="https://github.com/chaosweasl/interva/blob/master/LICENSE"
              className="hover:text-white transition-colors"
            >
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
