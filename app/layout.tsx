import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interva - Beautiful & Customizable Pomodoro Timer",
  description:
    "Stay focused and maintain a healthy work-study rhythm with Interva - a modern Pomodoro timer featuring 35+ beautiful themes, customizable timers, and a sleek interface. Perfect for students, professionals, and anyone looking to boost productivity.",
  keywords: [
    "Pomodoro timer",
    "focus timer",
    "productivity app",
    "study timer",
    "work timer",
    "time management",
    "desktop app",
    "Windows app",
    "beautiful themes",
  ],
  authors: [{ name: "chaosweasl" }],
  metadataBase: new URL("https://interva-chaosweasl.vercel.app/"),
  alternates: {
    canonical: "https://interva-chaosweasl.vercel.app/",
  },
  generator: "Next.js",
  applicationName: "Interva",
  referrer: "origin-when-cross-origin",
  creator: "chaosweasl",
  publisher: "chaosweasl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Interva - Beautiful & Customizable Pomodoro Timer",
    description:
      "Boost your productivity with Interva's modern Pomodoro timer. Features 35+ beautiful themes, customizable timers, and a distraction-free interface.",
    type: "website",
    url: "https://interva-chaosweasl.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interva - Beautiful & Customizable Pomodoro Timer",
    description:
      "Boost your productivity with Interva's modern Pomodoro timer. Features 35+ beautiful themes, customizable timers, and a distraction-free interface.",
    creator: "@chaosweasl",
    site: "@chaosweasl",
    images: ["/images/interva-main.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  category: "Development Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Interva",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "Windows",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              author: {
                "@type": "Person",
                name: "chaosweasl",
                url: "https://github.com/chaosweasl",
              },
              description:
                "A modern, customizable Pomodoro timer application that helps users stay focused and maintain a healthy work-study rhythm with its sleek interface.",
              softwareVersion: "1.0",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
              applicationSuite: "Productivity Tools",
              featureList: [
                "Customizable Focus & Break Timers",
                "35+ Beautiful Themes",
                "Variety of Sound Effects",
                "Configurable Settings",
                "Auto-start next timer",
                "Volume Control",
                "Lightweight Desktop App",
                "Auto Updates",
              ],
              downloadUrl: "https://interva-chaosweasl.vercel.app/api/download",
            }),
          }}
        />
      </body>
    </html>
  );
}
