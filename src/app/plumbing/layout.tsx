import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Riyadh – Leak Detection",
  description: "Expert plumbing services in Riyadh for leak repair, pipe fixing, and bathroom maintenance.",
  alternates: {
    canonical: "/plumbing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
