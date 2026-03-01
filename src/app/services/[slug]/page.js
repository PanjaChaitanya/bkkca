import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import ContactCTA from '@/components/sections/ContactCTA';

import { 
  CheckCircle2, ArrowRight, HelpCircle, 
  Lightbulb, ClipboardCheck 
} from 'lucide-react';

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

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bkkca.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://bkkca.com/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://bkkca.com/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@type": "Organization",
          name: "BKK & Associates",
          url: "https://bkkca.com"
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs?.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      }
    ]
  };


  return (
    <main className="min-h-screen bg-white">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
      {/* 1. Impactful Hero */}
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex p-3 bg-blue-600/20 rounded-xl mb-6 border border-blue-500/30">
            <Icon className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </section>

      <section className="bg-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/">Home</Link> /
          <Link href="/services"> Services</Link> /
          <span className="text-blue-600"> {service.title}</span>
        </div>
      </section>

      {/* Detailed Features & Process */}
      <section className="py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border rounded-xl p-6 bg-slate-50">
              <h3 className="font-bold mb-4">All Services</h3>

              <ul className="space-y-2">
                {servicesData.map(s => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <ClipboardCheck className="text-blue-600" />
                  Key Offerings
                </h2>

                <div className="space-y-4">
                  {service.features.map((f, i) => (
                    <div
                      key={i}
                      className="p-4 bg-slate-50 rounded-lg border border-slate-100"
                    >
                      <p className='flex items-center gap-4'>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-slate-800">
                          {f.title}
                        </span>
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Lightbulb className="text-blue-600" />
                  Our Approach
                </h2>

                <div className="relative border-l-2 border-blue-100 ml-4 pl-8 space-y-12">
                  {service.process?.map((p, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white" />

                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {p.step}
                      </h4>

                      <p className="text-slate-600">
                        {p.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Benefits Grid (The "Why") */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Partner With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits?.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <benefit.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {service.faqs?.map((faq, i) => (
              <details
                key={i}
                className="bg-slate-800 rounded-lg p-5 cursor-pointer"
              >
                <summary className="font-semibold text-blue-400">
                  {faq.q}
                </summary>

                <p className="mt-3 text-slate-300">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {service.industries?.map((i, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* Related services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Related Services
          </h2>

          <div className="flex flex-wrap gap-4">
            {servicesData
              .filter(s => s.slug !== service.slug)
              .slice(0,4)
              .map(s => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-blue-600 underline"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}