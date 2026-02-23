import Link from 'next/link';
import { MessageSquare, ArrowRight, PhoneCall } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative py-20 bg-blue-600 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to streamline your financial journey?
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you are a startup needing company formation or a multinational requiring rigorous statutory audits, our team is ready to assist.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-slate-900 bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-1"
          >
            Let's Discuss Your Query
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <a 
            href="tel:+919701328888" 
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-700/50 hover:bg-blue-700 border border-blue-500 transition-all duration-200 backdrop-blur-sm"
          >
            <PhoneCall className="mr-2 w-5 h-5" />
            Call +91 970-132-8888
          </a>
        </div>
      </div>
    </section>
  );
}