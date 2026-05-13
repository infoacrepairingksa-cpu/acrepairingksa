import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Filter Cleaning Riyadh – Boost Airflow Efficiency",
  description: "Instant AC filter cleaning and washing services in Riyadh for maximum airflow.",
  alternates: {
    canonical: "/ac-filter-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
