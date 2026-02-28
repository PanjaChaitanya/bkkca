import Link from 'next/link';
import { ArrowRight, Award, Users, Shield, BarChart3, PieChart, Landmark, Globe } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Professional Abstract Element (No Image Needed) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl bg-slate-900 h-[500px] overflow-hidden shadow-2xl flex items-center justify-center">
              {/* Decorative Blueprint/Grid Background */}
              <div className="absolute inset-0 opacity-20" 
                   style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>
              
              {/* Abstract Floating UI Elements to represent "Financial Fortress" */}
              <div className="relative z-10 grid grid-cols-2 gap-4 p-8 w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl animate-pulse">
                  <Shield className="text-blue-400 mb-3" size={32} />
                  <div className="h-2 w-16 bg-slate-700 rounded mb-2"></div>
                  <div className="h-2 w-10 bg-slate-800 rounded"></div>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-md border border-blue-500/30 p-6 rounded-2xl translate-y-8">
                  <BarChart3 className="text-blue-300 mb-3" size={32} />
                  <div className="h-2 w-20 bg-blue-400/30 rounded mb-2"></div>
                  <div className="h-2 w-12 bg-blue-400/20 rounded"></div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl -translate-y-4">
                  <Landmark className="text-yellow-500 mb-3" size={32} />
                  <div className="h-2 w-14 bg-slate-700 rounded mb-2"></div>
                  <div className="h-2 w-8 bg-slate-800 rounded"></div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 translate-y-4">
                  <PieChart className="text-green-400 mb-3" size={32} />
                  <div className="h-2 w-18 bg-slate-700 rounded mb-2"></div>
                  <div className="h-2 w-10 bg-slate-700 rounded"></div>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-20">
                 <img src="/logo-icon.png" alt="BKK" className="w-12 h-12 object-contain error-fallback-icon" />
                 {/* Fallback if you don't even have a logo icon yet: */}
                 {/* <div className="text-blue-600 font-bold text-2xl">BKK</div> */}
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 z-30 bg-blue-600 text-white p-8 rounded-2xl shadow-xl border-4 border-white">
              <div className="text-4xl font-bold italic tracking-tighter">12+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-90 leading-tight">Years of<br/>Excellence</div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10 opacity-100"></div>
          </div>

          {/* Right: Content (Refined for better typography) */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 rounded-full">
              Legacy of Integrity
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.15]">
              Strategic Partners in <br/>
              <span className="text-blue-600">Growth & Compliance.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Established in 2012, <strong>BKK & Associates</strong> is a forward-thinking team of Chartered Accountants dedicated to providing comprehensive financial and business advisory services.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed font-light">
              With a presence in Hyderabad, Bangalore, and Visakhapatnam, we serve a diverse clientele—from government bodies and private enterprises to multinational corporations in Real Estate, IT, and Pharma.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {[
                { icon: Award, text: 'RBI Panel Empaneled' },
                { icon: Users, text: 'Dynamic Expert Team' },
                { icon: Shield, text: 'Certified Compliance' },
                { icon: Globe, text: 'Multi-City Presence' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="group inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300"
            >
              <span className="font-bold">Our Full Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}