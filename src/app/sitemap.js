import { servicesData } from "@/data/services"; 

export default function sitemap() {
  const baseUrl = 'https://bkkca.com';

  // 1. Static Routes
  const routes = ['', '/about', '/contact', '/services'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}