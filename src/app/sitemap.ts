import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acrepairingksa.com';
  
  // Core routes
  const routes = [
    '',
    '/about',
    '/services',
    '/locations',
    '/ac-repair',
    '/ac-cleaning',
    '/ac-installation',
    '/ac-maintenance',
    '/ac-gas-refill',
    '/ac-duct-cleaning',
    '/ac-filter-cleaning',
    '/ac-coil-cleaning',
    '/plumbing',
    '/home-maintenance',
  ];

  // Location routes
  const locations = [
    '/locations/al-olaya',
    '/locations/al-malaz',
    '/locations/al-yasmin',
    '/locations/al-narjis',
    '/locations/al-sahafa',
    '/locations/al-malqa',
    '/locations/al-aqiq',
    '/locations/hittin',
    '/locations/al-nakheel',
    '/locations/al-rawdah',
    '/locations/al-sulaymaniyah',
    '/locations/al-rabwah',
    '/locations/al-munsiyah',
    '/locations/al-qadisiyah',
    '/locations/al-shifa',
  ];

  const allPaths = [...routes, ...locations];

  return allPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/locations/') ? 0.7 : 0.8,
  }));
}
