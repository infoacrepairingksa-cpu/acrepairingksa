import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Maintenance Riyadh – Preventive Care",
  description: "Avoid unexpected breakdowns with our preventive AC maintenance plans in Riyadh. We ensure your system runs efficiently for year-round comfort.",
  alternates: {
    canonical: "/ac-maintenance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
