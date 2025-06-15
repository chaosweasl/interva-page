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
  openGraph: {
    title: "Interva - Beautiful & Customizable Pomodoro Timer",
    description:
      "Boost your productivity with Interva's modern Pomodoro timer. Features 35+ beautiful themes, customizable timers, and a distraction-free interface.",
    type: "website",
    url: "https://interva-eight.vercel.app/",
    images: [
      {
        url: "/images/interva-main.png",
        width: 1200,
        height: 630,
        alt: "Interva Pomodoro Timer Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interva - Beautiful & Customizable Pomodoro Timer",
    description:
      "Boost your productivity with Interva's modern Pomodoro timer. Features 35+ beautiful themes, customizable timers, and a distraction-free interface.",
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
      </body>
    </html>
  );
}
