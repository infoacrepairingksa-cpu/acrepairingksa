import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Duct Cleaning Riyadh – Pure Air Protection",
  description: "Protect your family from allergens with our medical-grade AC duct cleaning in Riyadh. We purify your air vents to deliver pure, dust-free airflow.",
  alternates: {
    canonical: "/ac-duct-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
