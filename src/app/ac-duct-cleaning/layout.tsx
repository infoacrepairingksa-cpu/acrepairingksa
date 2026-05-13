import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Duct Cleaning Riyadh – Pure Air & Allergy Protection",
  description: "Deep AC duct cleaning services in Riyadh for better air quality and allergy protection.",
  alternates: {
    canonical: "/ac-duct-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
