import type { Metadata } from "next";
import { Outfit, Open_Sans } from "next/font/google"; // Using Outfit as requested
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acrepairingksa.com"),
  title: "AC Repairing KSA – Premium AC & Home Maintenance in Riyadh",
  description: "AC Repairing KSA offers fast, reliable AC repair, installation, deep cleaning, and expert plumbing services across Riyadh. Same-day response guaranteed.",
  keywords: "AC repair Riyadh, AC installation Riyadh, Plumbing services Riyadh, Home maintenance Riyadh, AC Repairing KSA",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4", sizes: "any" },
      { url: "/icon.png?v=4", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.ico?v=4", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=4",
  },
  verification: {
    google: "XrInWqSLRzc4uedrcVCdlOZOIwir040P6YZi5944Lg0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${openSans.variable} scroll-smooth h-full antialiased font-sans`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans selection:bg-secondary selection:text-white">{children}</body>
    </html>
  );
}
