import AboutPreview from '@/components/sections/AboutPreview';
import Approach from '@/components/sections/Approach';
import ContactCTA from '@/components/sections/ContactCTA';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import TrustBar from '@/components/sections/TrustBar';

export const metadata = {
  title: 'BKK & Associates | Premier Chartered Accountants in India',
  description: 'Trusted Chartered Accountants providing statutory audits, GST consultancy, company formation, and tax advisory across Hyderabad, Bangalore, and Visakhapatnam.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Hero />
      <TrustBar />
      <AboutPreview/>
      <ServicesGrid />
      <Approach/>
      <ContactCTA />
    </main>
  );
}