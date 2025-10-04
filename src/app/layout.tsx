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
  title: "Lean Developers - Innovative Solutions for Your Problems",
  description:
    "Professional web and mobile application development team. We create custom solutions that solve your business problems with cutting-edge technology.",
  keywords: [
    "web development",
    "mobile development",
    "custom solutions",
    "software development",
    "Lean Developers",
  ],
  authors: [{ name: "Lean Developers" }],
  openGraph: {
    title: "Lean Developers - Innovative Solutions for Your Problems",
    description: "Professional web and mobile application development team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
