import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Locations – Riyadh Home Fix",
  description: "Riyadh Home Fix serves all major districts in Riyadh. Find fast, local AC repair, plumbing, and home maintenance experts right in your neighborhood.",
  alternates: {
    canonical: "/locations",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
