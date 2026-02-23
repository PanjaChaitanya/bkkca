"use client";
import { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/CA-India-Logo.png" alt="CA Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl text-slate-900 leading-none">BKK & ASSOCIATES</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mt-1">Chartered Accountants</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About Us</Link>
            
            {/* Services Mega Menu Trigger */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-700 group-hover:text-blue-600 font-medium transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="grid grid-cols-2 gap-6">
                  {servicesData.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/services/${service.slug}`}
                      className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 mb-1">{service.title}</div>
                        <p className="text-xs text-slate-500 line-clamp-1">{service.shortDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 pb-6 px-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">About Us</Link>
          <div className="space-y-4">
            <span className="text-sm font-bold uppercase text-blue-600 tracking-widest">Our Services</span>
            <div className="grid grid-cols-1 gap-4">
              {servicesData.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsOpen(false)} className="text-lg text-slate-700">{s.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}