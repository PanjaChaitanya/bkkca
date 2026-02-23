import ServicesGrid from '@/components/sections/ServicesGrid';

export const metadata = {
  title: 'Our Services | BKK & Associates Chartered Accountants',
  description: 'Explore our comprehensive range of financial, auditing, taxation, and corporate advisory services designed for modern businesses.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          How We Can Help You Grow
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Partnering with businesses across industries to deliver precision, compliance, and strategic financial growth.
        </p>
      </div>
      
      {/* Reusing the beautiful grid we already built! */}
      <ServicesGrid />
    </main>
  );
}