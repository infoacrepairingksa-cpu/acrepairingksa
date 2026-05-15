import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Coil Cleaning Riyadh – Extend Lifespan",
  description: "Maximize your AC's cooling power with expert coil cleaning in Riyadh. Our advanced thermal restoration extends unit lifespan and lowers energy bills.",
  alternates: {
    canonical: "/ac-coil-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
