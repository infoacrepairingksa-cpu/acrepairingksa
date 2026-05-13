import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Locations – Riyadh Home Fix",
  description: "View all areas we serve across Riyadh for AC repair, plumbing, and home maintenance.",
  alternates: {
    canonical: "/locations",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
