export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private/'], // Protect any future private routes
    },
    sitemap: 'https://bkkca.com/sitemap.xml',
  };
}