import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Cleaning Riyadh – Deep-wash Air Service",
  description: "Breathe cleaner air with our professional AC deep cleaning and sanitization services in Riyadh. We remove dust and mold for a healthier home environment.",
  alternates: {
    canonical: "/ac-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
