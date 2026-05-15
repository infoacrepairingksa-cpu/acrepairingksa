import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Repair Riyadh – Fast, Certified Fixes",
  description: "Need urgent cooling restoration? We provide fast, reliable AC repair services in Riyadh. Our certified technicians fix all split and central unit types.",
  alternates: {
    canonical: "/ac-repair",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
