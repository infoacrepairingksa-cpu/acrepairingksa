import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Maintenance Riyadh – Property Care",
  description: "Protect your property with our complete home maintenance solutions in Riyadh. From structural repairs to technical upkeep, we deliver premium service.",
  alternates: {
    canonical: "/home-maintenance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
