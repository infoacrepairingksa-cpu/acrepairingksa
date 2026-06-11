import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});


const BASE_URL = "https://acrepairingksa.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AC Repair Riyadh | #1 AC & Home Maintenance – AC Repairing KSA",
    template: "%s | AC Repairing KSA – Riyadh",
  },
  description:
    "Expert AC repair, cleaning, installation & plumbing in Riyadh. 30-minute response, 5,000+ repairs completed, 24/7 emergency service across all Riyadh districts. Call +966 51 094 2150.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: BASE_URL,
    siteName: "AC Repairing KSA",
    title: "AC Repair Riyadh | 24/7 Emergency AC & Home Maintenance",
    description:
      "Fast, reliable AC repair, cleaning, installation & plumbing in Riyadh. Same-day response. 5,000+ completed repairs. Serving all Riyadh districts.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "AC Repairing KSA – Professional AC Repair in Riyadh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Repair Riyadh | 24/7 Emergency AC & Home Maintenance",
    description:
      "Expert AC repair, cleaning & plumbing in Riyadh. 30-min response. Call +966 51 094 2150.",
    images: ["/og-image.webp"],
    creator: "@acrepairingksa",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4", sizes: "any" },
      { url: "/icon.png?v=4", type: "image/png" },
    ],
    apple: [{ url: "/favicon.ico?v=4", sizes: "any" }],
    shortcut: "/favicon.ico?v=4",
  },
  verification: {
    google: "XrInWqSLRzc4uedrcVCdlOZOIwir040P6YZi5944Lg0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${outfit.variable} scroll-smooth h-full antialiased font-sans`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans selection:bg-secondary selection:text-white">
        {children}
      </body>
    </html>
  );
}
