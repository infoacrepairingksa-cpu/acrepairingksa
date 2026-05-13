import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Cleaning Riyadh – Deep-wash Air Service",
  description: "Professional AC cleaning and sanitization services in Riyadh. Fast response and quality work.",
  alternates: {
    canonical: "/ac-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
