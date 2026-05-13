import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Maintenance Riyadh – Comprehensive Property Care",
  description: "Complete home maintenance and repair solutions in Riyadh. Quality services for your property.",
  alternates: {
    canonical: "/home-maintenance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
