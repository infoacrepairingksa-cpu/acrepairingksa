import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Installation Riyadh – Expert System Setup",
  description: "Expert AC installation and mounting services for split and central units in Riyadh.",
  alternates: {
    canonical: "/ac-installation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
