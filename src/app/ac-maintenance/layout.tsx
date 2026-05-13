import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Maintenance Riyadh – Preventive Care Plans",
  description: "Preventive AC maintenance services in Riyadh to ensure year-round comfort and efficiency.",
  alternates: {
    canonical: "/ac-maintenance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
