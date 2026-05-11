import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import LocationContent from "./LocationContent";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { slug } = await params;
  const data = locations[slug];

  if (!data) return { title: "Location Not Found" };

  return {
    title: `${data.heroTitle} | Riyadh Home Fix`,
    description: data.heroDesc,
    openGraph: {
      title: data.heroTitle,
      description: data.heroDesc,
      images: [{ url: data.heroImage }],
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: { params: any }) {
  const { slug } = await params;
  const data = locations[slug];

  if (!data) {
    return notFound();
  }

  return <LocationContent data={data} />;
}
