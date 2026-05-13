import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Riyadh Home Fix",
  description: "Learn about Riyadh Home Fix, your trusted partner for AC repair and home maintenance in Riyadh.",
  alternates: {
    canonical: "/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
