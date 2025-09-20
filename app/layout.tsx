'use client';

import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <div className="mt-2.5">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
