import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Service Locations – Riyadh Home Fix Coverage",
  description: "View all areas we serve across Riyadh for AC repair, plumbing, and home maintenance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
