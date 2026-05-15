import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Filter Cleaning Riyadh – Boost Airflow",
  description: "Get an instant airflow boost with our AC filter cleaning and mesh washing services in Riyadh. Quick, affordable, and essential for peak AC performance.",
  alternates: {
    canonical: "/ac-filter-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
