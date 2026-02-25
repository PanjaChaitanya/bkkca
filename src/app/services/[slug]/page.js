import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

// 1. Generate Static Paths for blazing fast performance
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;   // ✅ THIS IS THE FIX

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | BKK & Associates',
    };
  }

  return {
    title: `${service.title} | BKK & Associates Chartered Accountants`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://bkkca.com/services/${service.slug}`,
    },
  };
}

// 3. The Page Component
export default async function ServiceDetail({ params }) {
  const { slug } = await params;   // ✅ important in newer Next

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Service Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6 text-blue-400">
            <Link href="/services" className="hover:text-blue-300 transition-colors text-sm font-medium uppercase tracking-wider">
              Services
            </Link>
            <span>/</span>
            <span className="text-sm font-medium uppercase tracking-wider text-slate-400">
              {service.title}
            </span>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <Icon className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Detailed Features */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Comprehensive Offerings
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <ul className="space-y-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">
                          {feature}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Professional {feature.toLowerCase()} tailored to meet regulatory requirements and optimize your business operations.
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sticky Conversion Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-blue-900 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Need Expert Assistance?</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Our team of dedicated Chartered Accountants is ready to assist you with your {service.title.toLowerCase()} requirements.
                </p>
                
                <Link 
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-4 rounded-lg font-bold transition-all duration-200 shadow-lg mb-4"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <div className="pt-6 border-t border-blue-800/50 text-center">
                  <p className="text-sm text-blue-200 mb-2">Or speak to us directly</p>
                  <a 
                    href="tel:+919701328888" 
                    className="inline-flex items-center gap-2 text-lg font-bold hover:text-yellow-400 transition-colors"
                  >
                    <PhoneCall className="w-5 h-5" />
                    +91 970-132-8888
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}