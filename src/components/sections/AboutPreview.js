import Link from 'next/link';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Visual Element */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/carousel-2.jpg" 
                alt="BKK & Associates Office" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-blue-600 text-white p-8 rounded-2xl shadow-xl border-4 border-white">
              <div className="text-4xl font-bold">12+</div>
              <div className="text-sm uppercase tracking-wider font-semibold opacity-80">Years of<br/>Excellence</div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full -z-10 opacity-50"></div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Your Strategic Partners in <br/>Business Growth & Compliance
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Established in 2012, BKK & Associates is a forward-thinking team of Chartered Accountants dedicated to providing comprehensive financial and business advisory services.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              With a presence in Hyderabad, Bangalore, and Visakhapatnam, we serve a diverse clientele—from government bodies and private enterprises to multinational corporations in Real Estate, IT, and Pharma.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-800">RBI Panel Empaneled</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-800">Dynamic Expert Team</span>
              </div>
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors group"
            >
              Learn More About Our Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}