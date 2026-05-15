import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services – Riyadh Home Fix",
  description: "Explore our comprehensive AC and home maintenance services in Riyadh. We offer expert repair, cleaning, installation, and plumbing tailored to your needs.",
  alternates: {
    canonical: "/services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
