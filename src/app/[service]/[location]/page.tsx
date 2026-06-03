import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLocationPage from "./ServiceLocationPage";
import { serviceLocationMeta, locationData } from "@/data/service-location-data";

const VALID_SERVICES = [
  "ac-repair", "ac-cleaning", "ac-installation", "ac-maintenance",
  "ac-gas-refill", "ac-duct-cleaning", "ac-filter-cleaning", "ac-coil-cleaning", "plumbing",
];

const VALID_LOCATIONS = [
  "al-olaya", "al-malaz", "al-yasmin", "al-narjis", "al-sahafa",
  "al-malqa", "al-aqiq", "hittin", "al-nakheel", "al-rawdah",
  "al-sulaymaniyah", "al-rabwah", "al-munsiyah", "al-qadisiyah", "al-shifa",
];

function toTitleCase(slug: string): string {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateStaticParams() {
  const params = [];
  for (const service of VALID_SERVICES) {
    for (const location of VALID_LOCATIONS) {
      params.push({ service, location });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}): Promise<Metadata> {
  const { service, location } = await params;

  if (!VALID_SERVICES.includes(service) || !VALID_LOCATIONS.includes(location)) {
    return { title: "Not Found" };
  }

  const svcData = serviceLocationMeta[service];
  const locData = locationData[location];
  const serviceName = toTitleCase(service);
  const locationName = toTitleCase(location);

  const title = `${serviceName} in ${locationName}, Riyadh | AC Repairing KSA`;
  const description = `Professional ${svcData?.description || serviceName} in ${locationName}, Riyadh. ${locData?.description?.slice(0, 100) || ""} Same-day service. Call +966 59 013 2864.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${service}/${location}`,
    },
    openGraph: {
      title,
      description,
      url: `https://acrepairingksa.com/${service}/${location}`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}) {
  const { service, location } = await params;

  if (!VALID_SERVICES.includes(service) || !VALID_LOCATIONS.includes(location)) {
    notFound();
  }

  const svcData = serviceLocationMeta[service];
  const locData = locationData[location];
  const serviceName = toTitleCase(service);
  const locationName = toTitleCase(location);

  if (!svcData) notFound();

  return (
    <ServiceLocationPage
      service={service}
      location={location}
      serviceName={serviceName}
      locationName={locationName}
      svcData={svcData}
      locData={locData}
    />
  );
}
