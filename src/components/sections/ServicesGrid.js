import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Comprehensive Financial Solutions
          </h3>
          <p className="text-lg text-slate-600">
            From tax planning to business advisory, our chartered accountants deliver precision and expertise to simplify your financial journey.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle Background Accent on Hover */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-600 mb-6 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-500">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature.title}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Full Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}