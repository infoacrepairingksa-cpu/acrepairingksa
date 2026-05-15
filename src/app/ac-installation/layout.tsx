import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Installation Riyadh – Expert Setup",
  description: "Upgrade your cooling with our expert AC installation services in Riyadh. We provide professional mounting and setup for all split and central HVAC units.",
  alternates: {
    canonical: "/ac-installation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
