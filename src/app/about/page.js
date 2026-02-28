import Approach from '@/components/sections/Approach';
import ContactCTA from '@/components/sections/ContactCTA';
import { 
  Target, Shield, TrendingUp, Building2, Factory, 
  Monitor, Pill, Eye, Award, CheckCircle2, 
  Briefcase, Scale, Globe, Users 
} from 'lucide-react';

export const metadata = {
  title: 'About BKK & Associates | Premier Chartered Accountants in India',
  description: 'Since 2012, BKK & Associates has provided expert Audit, Taxation, and GST consultancy. Discover how our team of CAs empowers businesses with financial integrity and strategic growth.',
  // Add OpenGraph for better social sharing
  openGraph: {
    title: 'Expert Financial Advisory | BKK & Associates',
    description: '12+ years of excellence in Chartered Accountancy and Business Consulting.',
    images: ['/about-hero-og.jpg'],
  }
};

export default function AboutPage() {
  const industries = [
    { name: 'Real Estate & Infra', icon: Building2 },
    { name: 'Manufacturing', icon: Factory },
    { name: 'IT & SaaS', icon: Monitor },
    { name: 'Pharma & Healthcare', icon: Pill },
    { name: 'FMCG & Food', icon: Target },
    { name: 'Textiles & Retail', icon: TrendingUp },
    { name: 'Logistics & Supply', icon: Shield },
    { name: 'E-commerce & Export', icon: Globe },
  ];

  const valueProps = [
    { title: "Integrity", desc: "Unwavering commitment to ethical financial practices.", icon: Scale },
    { title: "Precision", desc: "Meticulous attention to detail in every audit and filing.", icon: Target },
    { title: "Innovation", desc: "Modern solutions for complex regulatory landscapes.", icon: TrendingUp },
    { title: "Client-Centric", desc: "Tailored strategies for startups to MNCs.", icon: Users },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section: Higher Contrast & Better Copy */}
      <section className="relative bg-[#0a0c10] pt-32 pb-24 lg:pt-38 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#22d3ee 0.5px, transparent 0.5px), linear-gradient(90deg, #22d3ee 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-[0.1em] mb-10 animate-fade-in">
              <Shield size={14} className="animate-pulse" />
              <span>Trusted Financial Architects Since 2012</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-slate-400 mb-8 leading-[1.1]">
              Precision in Numbers.<br />
            <span className="text-outline-white text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Vision in Strategy.</span> <br />
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              BKK & Associates is a multi-disciplinary Chartered Accountancy firm redefining financial excellence through <span className="text-white font-medium">audit integrity</span> and <span className="text-white font-medium">strategic tax optimization</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story: Focus on Authority */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-blue-600 font-bold tracking-[0.15em] uppercase text-sm mb-4">The BKK Standard</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Navigating Complexity <br/>With Confidence.
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex regulatory requirements and business agility, <strong>BKK & Associates</strong> has evolved into a premier financial powerhouse.
                </p>
                <p>
                  We don't just report numbers; we interpret them to safeguard your assets and catalyze growth. Our multi-city presence allows us to serve as a local partner with a global perspective on <strong>International Taxation, GST Laws, and Corporate Governance.</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {['FEMA & RBI Compliance', 'Statutory & Internal Audit', 'Mergers & Acquisitions', 'Direct & Indirect Tax'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-semibold text-slate-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Modernized Stat Grid */}
            <div className="relative overflow-hidden">
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-[2rem] -rotate-2 -z-10"></div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 text-center">
                  <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-6" />
                  <div className="text-5xl font-bold text-slate-900 mb-2">500+</div>
                  <div className="text-slate-500 text-xs uppercase font-bold tracking-widest">Corporate Clients</div>
                </div>
                <div className="bg-slate-900 p-10 rounded-2xl shadow-xl text-center sm:translate-y-12">
                  <Award className="w-10 h-10 text-yellow-500 mx-auto mb-6" />
                  <div className="text-5xl font-bold text-white mb-2">12+</div>
                  <div className="text-slate-400 text-xs uppercase font-bold tracking-widest">Years Legacy</div>
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section (New!) - Crucial for "Best" status */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Pillars of Our Practice</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {valueProps.map((prop, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors group">
              <prop.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mb-6 transition-colors" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries: Using a 'Masonry-ish' or cleaner grid */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Expertise Across Frontiers</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Industry-Specific Solutions.</h3>
            </div>
            <p className="text-slate-500 max-w-sm mb-2">
              Deep domain knowledge allows us to address the unique tax and compliance challenges of every sector.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div key={idx} className="group flex flex-col p-8 bg-gray-100 border border-slate-100 rounded-3xl hover:bg-slate-900 active:bg-slate-900 transition-all duration-500">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-blue-500 group-hover:text-white group-active:bg-blue-500 group-active:text-white transition-all duration-500 mb-8">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 group-hover:text-white group-active:text-white text-lg tracking-tight transition-colors">{industry.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <Approach />
      <ContactCTA /> */}
    </main>
  );
}