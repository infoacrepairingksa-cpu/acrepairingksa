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
  title: "Riyadh Home Fix – Premium AC & Home Maintenance Services",
  description: "Fast, reliable, and affordable AC repair, installation, plumbing, and home maintenance services in Riyadh. Certified technicians. Same-day service.",
  keywords: "AC repair Riyadh, AC installation Riyadh, Plumbing services Riyadh, Home maintenance Riyadh, Riyadh Home Fix",
  alternates: {
    canonical: "/",
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
