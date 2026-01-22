import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Changed to Outfit
import "./globals.css";

const outfit = Outfit({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kopi Kenangan - Coffee Scrollytelling",
  description: "A premium coffee experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.variable} antialiased bg-[#1a1110] text-[#f4eec7]`}
      >
        {children}
      </body>
    </html>
  );
}
