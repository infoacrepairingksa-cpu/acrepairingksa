import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Riyadh – Leak Detection",
  description: "Solve leaks fast with our expert plumbing services in Riyadh. We specialize in pipe fixing, leak detection, and complete bathroom maintenance solutions.",
  alternates: {
    canonical: "/plumbing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
