import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Coil Cleaning Riyadh – Extend Unit Lifespan",
  description: "Expert AC coil cleaning services in Riyadh to improve cooling efficiency and unit lifespan.",
  alternates: {
    canonical: "/ac-coil-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
