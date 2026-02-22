import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';

export const metadata = {
  title: 'BKK & Associates | Premier Chartered Accountants in India',
  description: 'Trusted Chartered Accountants providing statutory audits, GST consultancy, company formation, and tax advisory across Hyderabad, Bangalore, and Visakhapatnam.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <TrustBar />
      
      {/* We will build these sections next */}
      {/* <AboutPreview /> */}
      {/* <ServicesGrid /> */}
      {/* <ApproachSection /> */}
      {/* <CallToAction /> */}
    </main>
  );
}