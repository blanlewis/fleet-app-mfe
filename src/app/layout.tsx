
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FleetLayoutContent from "./components/FleetLayoutContent";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lewis TMS | Fleet",
  description: "Monitor vehicles, drivers and availability",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Suspense fallback={<div>Loading Fleet...</div>}>
          <FleetLayoutContent>
            {children}
          </FleetLayoutContent>
        </Suspense>
      </body>
    </html>
  );
}