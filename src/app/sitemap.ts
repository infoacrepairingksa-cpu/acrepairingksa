import { MetadataRoute } from "next";

const BASE_URL = "https://acrepairingksa.com";
const TODAY = new Date().toISOString();

const services = [
  "ac-repair",
  "ac-cleaning",
  "ac-installation",
  "ac-maintenance",
  "ac-gas-refill",
  "ac-duct-cleaning",
  "ac-filter-cleaning",
  "ac-coil-cleaning",
  "plumbing",
  "home-maintenance",
];

const locations = [
  "al-olaya", "al-malaz", "al-yasmin", "al-narjis", "al-sahafa",
  "al-malqa", "al-aqiq", "hittin", "al-nakheel", "al-rawdah",
  "al-sulaymaniyah", "al-rabwah", "al-munsiyah", "al-qadisiyah", "al-shifa",
  "al-wurud", "al-izdihar", "al-rawabi", "al-masif", "al-hamra",
  "al-wazarat", "al-dar-al-baida", "al-salam", "al-jazirah", "al-hazm",
  "al-raid", "al-safa", "al-nafal", "al-ghirnatah", "al-falah",
  "ad-dar-al-baida", "al-mutamarat", "al-andalus", "al-aarid",
  "dhahrat-al-badi", "al-badia", "al-khuza", "al-mursalat",
  "al-muruj", "al-qayrawan", "al-ulaya", "al-waha", "al-mansurah",
  "al-batiyah", "al-aziziyah", "al-manakh",
];

const blogSlugs = [
  "fix-split-ac-blowing-warm-air-riyadh",
  "ac-compressor-clicking-noise-troubleshooting",
  "emergency-ac-repair-riyadh-guide",
  "water-leaking-from-indoor-ac-unit-diagnostic",
  "split-ac-refrigerant-leak-signs-r410a",
  "ac-circuit-breaker-tripping-riyadh",
  "ac-filter-cleaning-frequency-riyadh",
  "ac-musty-smell-riyadh-fix",
  "ac-fan-not-spinning-riyadh",
  "best-ac-temperature-riyadh-summer",
  "ac-gas-refill-cost-riyadh-2026",
  "ac-coil-cleaning-riyadh-guide",
  "central-vs-split-ac-riyadh",
  "split-ac-not-turning-on-riyadh",
  "plumbing-leak-detection-riyadh",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: TODAY,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((svc) => ({
    url: `${BASE_URL}/${svc}`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc}`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = [];
  const primaryServices = [
    "ac-repair", "ac-cleaning", "ac-installation", "ac-maintenance",
    "ac-gas-refill", "ac-duct-cleaning", "ac-filter-cleaning", "ac-coil-cleaning", "plumbing",
  ];
  const primaryLocations = [
    "al-olaya", "al-malaz", "al-yasmin", "al-narjis", "al-sahafa",
    "al-malqa", "al-aqiq", "hittin", "al-nakheel", "al-rawdah",
    "al-sulaymaniyah", "al-rabwah", "al-munsiyah", "al-qadisiyah", "al-shifa",
  ];
  for (const svc of primaryServices) {
    for (const loc of primaryLocations) {
      serviceLocationPages.push({
        url: `${BASE_URL}/${svc}/${loc}`,
        lastModified: TODAY,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...blogPages,
    ...serviceLocationPages,
  ];
}
