"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services'; // Ensure this path is correct
import { ChevronDown, Menu, X, Phone, Home, Info, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const menuItems = [
    { icon: <Home size={24} />, label: "Home", href: "/" },
    { icon: <Info size={24} />, label: "About", href: "/about" },
    { icon: <Briefcase size={24} />, label: "Services", href: "/services" },
    { icon: <Phone size={24} />, label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/CA-India-Logo.png" alt="CA Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl text-slate-900 leading-none logoFont">BKK & ASSOCIATES</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mt-1">Chartered Accountants</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center gap-10">
                <div className="flex gap-8 font-bold text-xs uppercase tracking-widest text-slate-700">
                  <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                  <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
                  <Link href="/services" className="hover:text-blue-400 transition-colors">Expertise</Link>
                  
                  <div 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center hover:text-blue-400 uppercase transition-colors">
                      Services <ChevronDown size={16} className="ml-1"/>
                    </button>

                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      <div className="grid grid-cols-2 gap-6">
                        {servicesData?.map((service) => (
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
                </div>
                <Link href="/contact" className="px-6 py-2 bg-yellow-500 text-slate-900 font-black text-xs uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all">
                  Contact
                </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[100] text-slate-900 p-2 bg-slate-100 rounded-full"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Arc */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. Full Body Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-white/20 backdrop-blur-xl"
            />

            {/* 2. Radial Arc Menu */}
            <div className="fixed top-10 right-10 z-[70]">
              {menuItems.reverse().map((item, index) => {
                // Calculation for a nice arc:
                // We use angles from 90 (bottom) to 180 (left)
                const totalItems = menuItems.length;
                const startAngle = 90; 
                const endAngle = 180;
                const angle = startAngle + (index * (endAngle - startAngle) / (totalItems - 1));
                const radius = 190; // How far out the icons go

                const x = Math.cos(angle * (Math.PI / 160)) * radius;
                const y = Math.sin(angle * (Math.PI / 175)) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{
                      x: x,
                      y: y,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: index * 0.05
                    }}
                    className="absolute"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col items-center gap-1"
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 text-blue-400 shadow-xl border border-blue-50 active:scale-90 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase text-slate-800 bg-white/80 px-2 py-0.5 rounded-full">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}