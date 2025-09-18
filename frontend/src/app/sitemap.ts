import { MetadataRoute } from 'next';
import { tripsData } from '@/data/trips';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lifesforliving.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/trips`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Dynamic trip pages
  const tripPages = tripsData.map((trip) => ({
    url: `${baseUrl}/trips/${trip.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...tripPages];
}
