import Approach from '@/components/sections/Approach';
import ContactCTA from '@/components/sections/ContactCTA';
import { Target, Shield, TrendingUp, Building2, Factory, Monitor, Pill, Eye, Award, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | BKK & Associates Chartered Accountants',
  description: 'Established in 2012, BKK & Associates is a trusted team of Chartered Accountants helping businesses across India achieve compliance and unlock growth.',
};

export default function AboutPage() {
  const industries = [
    { name: 'Real Estate', icon: Building2 },
    { name: 'Manufacturing', icon: Factory },
    { name: 'IT Sector', icon: Monitor },
    { name: 'Pharmaceuticals', icon: Pill },
    { name: 'Food Processing', icon: Target },
    { name: 'Textiles', icon: TrendingUp },
    { name: 'Logistics & Transport', icon: Shield },
    { name: 'Export Houses', icon: Building2 },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-[#0a0c10] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Shield size={14} />
            <span>Since 2012</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
            Empowering Your Journey <br className="hidden md:block" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500">
              Toward Sustainable Growth
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed border-t border-slate-800 pt-8 mt-2">
            More than just accountants—we are your strategic partners committed to excellence, financial integrity, and comprehensive business optimization.
          </p>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] -z-10"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: The Narrative */}
            <div className="space-y-8">
              <div>
                <h2 className="flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
                  <Award size={18} />
                  Our Firm's Legacy
                </h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  A Decade of Trust <br/>& Financial Excellence
                </h3>
              </div>
              
              <div className="prose prose-lg text-slate-600">
                <p>
                  At <strong>BKK & Associates</strong>, we are a forward-thinking team of Chartered Accountants dedicated to providing comprehensive financial and business advisory services. Since our establishment, we have been helping businesses across industries achieve compliance, optimize performance, and unlock growth.
                </p>
                <p>
                  Our expertise spans across various domains, including ensuring financial integrity through statutory and specialized audits, delivering robust solutions for income tax, GST, transfer pricing, and international taxation. We actively assist with company formation, mergers & acquisitions, IPOs, and regulatory compliance.
                </p>
                <ul className="space-y-3 mt-6">
                  {['Strategic Financial Planning', 'Rigorous Budgeting & Auditing', 'Tailored Management System Design', 'End-to-end Compliance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Visual / Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-blue-50/50 rounded-3xl transform scale-105 -z-10"></div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center items-center text-center transform hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-5xl font-extrabold text-slate-900 mb-2">12+</h4>
                <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Years of Excellence</p>
              </div>
              
              <div className="bg-[#0a0c10] p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center transform hover:-translate-y-2 transition-all duration-300 sm:translate-y-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Shield className="w-12 h-12 text-yellow-500 mb-4 relative z-10" />
                <h4 className="text-5xl font-extrabold text-white mb-2 relative z-10">3</h4>
                <p className="text-slate-400 font-semibold uppercase tracking-wider text-sm relative z-10">Strategic Locations</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-slate-50 relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 transform hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                <Eye className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the most trusted and globally recognized financial advisory firm, empowering businesses to thrive in dynamic economic landscapes through unparalleled precision and innovative financial solutions.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl transform hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-5"></div>
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-yellow-500 transition-all duration-300 relative z-10">
                <Target className="w-8 h-8 text-yellow-500 group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 relative z-10">Our Mission</h3>
              <p className="text-lg text-slate-400 leading-relaxed relative z-10">
                To deliver comprehensive, timely, and insight-driven financial services that ensure regulatory compliance and facilitate sustainable growth for every client, regardless of their scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Sectors We Empower</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Industries We Serve</h3>
            <p className="text-lg text-slate-600">
              Our experience spans collaborating with government bodies, ambitious private enterprises, and multinational corporations across diverse, dynamic sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group cursor-default">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300 mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-center tracking-tight">{industry.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reusing existing components for consistency and conversion */}
      {/* <Approach />
      <ContactCTA /> */}
    </main>
  );
}