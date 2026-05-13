import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Professional Services – Riyadh Home Fix",
  description: "Explore our wide range of AC and home maintenance services available across Riyadh.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
