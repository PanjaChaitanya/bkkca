import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/carousel-3.jpg" // You can update this to a better hi-res image later
          alt="Modern Business District"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-300 bg-blue-900/30 border border-blue-800/50 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
            Established 2012 • Serving PAN India
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Precision in Finance.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500">
              Excellence in Compliance.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            From seamless tax planning to rigorous statutory audits, BKK & Associates handles the financial complexities so you can focus on scaling your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-slate-900 bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-yellow-500/30"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-200 backdrop-blur-sm"
            >
              Explore Our Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}