import { companyLocations } from '@/data/locations';

export default function LocalSchema() {
  // We map over our dynamic array to create a distinct LocalBusiness 
  // schema for EVERY location, tying them back to the parent organization.
  const schemaArray = companyLocations.map((loc) => ({
    "@context": "https://schema.org",
    "@type": "AccountingService", // Highly specific SEO type (Better than LocalBusiness)
    "@id": `https://bkkca.com/#${loc.id}`,
    "name": loc.name,
    "image": "https://bkkca.com/CA-India-Logo.png",
    "url": loc.url,
    "telephone": loc.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": loc.address.streetAddress,
      "addressLocality": loc.address.addressLocality,
      "addressRegion": loc.address.addressRegion,
      "postalCode": loc.address.postalCode,
      "addressCountry": loc.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.geo.latitude,
      "longitude": loc.geo.longitude
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "BKK & Associates Chartered Accountants",
      "url": "https://bkkca.com"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "18:30"
    }
  }));

  // We wrap the array in a Graph object. This is the safest way to inject 
  // multiple independent schemas on a single page for Google.
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": schemaArray
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}