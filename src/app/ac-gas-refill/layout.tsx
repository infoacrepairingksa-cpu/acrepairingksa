import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Gas Refill Riyadh – Fast Refrigerant Setup",
  description: "Restore your AC's cooling with our precise refrigerant gas refill services in Riyadh. We include professional leak testing to ensure lasting results.",
  alternates: {
    canonical: "/ac-gas-refill",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
