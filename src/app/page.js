import AboutPreview from '@/components/sections/AboutPreview';
import Approach from '@/components/sections/Approach';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
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
      <AboutPreview/>
      <ServicesGrid />
      <Approach/>
      {/* We will build these sections next */}
      {/* <CallToAction /> */}
    </main>
  );
}