import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Gas Refill Riyadh – Precise Refrigerant Charging",
  description: "Professional AC gas refill and refrigerant top-up services in Riyadh. Leak testing included.",
  alternates: {
    canonical: "/ac-gas-refill",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
