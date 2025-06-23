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
            <a href="/api/download/windows" title="Download for Windows">
              <span className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.5 3.5l8.5-1.2v9.2h-8.5v-8zm9.5-1.3l11-1.5v12.3h-11v-10.8zm-9.5 10.8h8.5v9.2l-8.5-1.2v-8zm9.5.2h11v12.3l-11-1.5v-10.8z" />
                </svg>
                Windows
              </span>
            </a>
            <a href="/api/download/macos" title="Download for macOS">
              <span className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.02 0-.04 0-.06-.01-.02-.01-.04-.01-.06-.01-.02 0-.04 0-.06.01-.02.01-.04.01-.06.01-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07.02 0 .04 0 .06.01.02.01.04.01.06.01.02 0 .04 0 .06-.01.02-.01.04-.01.06-.01 1.14 0 2.07.93 2.07 2.07zm-2.07 3.57c-2.36 0-4.28 1.92-4.28 4.28 0 2.36 1.92 4.28 4.28 4.28s4.28-1.92 4.28-4.28c0-2.36-1.92-4.28-4.28-4.28zm0 7.14c-1.57 0-2.86-1.29-2.86-2.86s1.29-2.86 2.86-2.86 2.86 1.29 2.86 2.86-1.29 2.86-2.86 2.86zm-7.14 2.14c0-1.14.93-2.07 2.07-2.07.02 0 .04 0 .06.01.02.01.04.01.06.01.02 0 .04 0 .06-.01.02-.01.04-.01.06-.01 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07-.02 0-.04 0-.06-.01-.02-.01-.04-.01-.06-.01-.02 0-.04 0-.06.01-.02.01-.04.01-.06.01-1.14 0-2.07-.93-2.07-2.07zm2.07 3.57c2.36 0 4.28 1.92 4.28 4.28 0 2.36-1.92 4.28-4.28 4.28s-4.28-1.92-4.28-4.28c0-2.36 1.92-4.28 4.28-4.28zm0 7.14c1.57 0 2.86-1.29 2.86-2.86s-1.29-2.86-2.86-2.86-2.86 1.29-2.86 2.86 1.29 2.86 2.86 2.86zm7.14-2.14c0 1.14-.93 2.07-2.07 2.07-.02 0-.04 0-.06-.01-.02-.01-.04-.01-.06-.01-.02 0-.04 0-.06.01-.02.01-.04.01-.06.01-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07.02 0 .04 0 .06.01.02.01.04.01.06.01.02 0 .04 0 .06-.01.02-.01.04-.01.06-.01 1.14 0 2.07.93 2.07 2.07zm-2.07-3.57c-2.36 0-4.28-1.92-4.28-4.28 0-2.36 1.92-4.28 4.28-4.28s4.28 1.92 4.28 4.28c0 2.36-1.92 4.28-4.28 4.28z" />
                </svg>
                macOS
              </span>
            </a>
            <a href="/api/download/linux" title="Download for Linux">
              <span className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <FaLinux className="h-5 w-5" />
                Linux
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
