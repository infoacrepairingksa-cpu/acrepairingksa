import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Repair Riyadh | Riyadh Home Fix",
  description: "Fast and reliable AC repair services in Riyadh. Certified technicians for all unit types.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
