import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Riyadh Home Fix",
  description: "Discover Riyadh Home Fix, the premier choice for professional AC repair, plumbing, and home maintenance services in Saudi Arabia. Meet our certified team.",
  alternates: {
    canonical: "/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
