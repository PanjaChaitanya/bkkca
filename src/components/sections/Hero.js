'use client'; // Required for Framer Motion in Next.js
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap, Menu } from 'lucide-react';

export default function Hero() {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative min-h-screen bg-[#08090a] flex selection:bg-yellow-200 selection:text-black overflow-hidden">
      
      {/* 1. Left Vertical Brand Rail */}
      <motion.aside 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="flex w-12 md:w-24 flex-col justify-between items-center py-12 border-r border-white/5 bg-[#050607]"
      >
        <div className="rotate-[-90deg] origin-center whitespace-nowrap">
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-bold text-slate-500 uppercase">
            Established • 2012
          </span>
        </div>
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
        <div className="flex flex-col gap-8 text-slate-400">
            <Link href="#" className="hover:text-white transition-colors"><Globe size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Shield size={20} /></Link>
        </div>
      </motion.aside>

      {/* 2. Main Hero Content Area */}
      <main className="flex-1 flex flex-col">
        {/* <nav className="lg:hidden p-6 flex justify-between items-center border-b border-white/5">
          <span className="font-bold text-xl tracking-tighter text-white">BKK<span className="text-yellow-500">.</span></span>
          <Menu className="text-white" />
        </nav> */}

        <section className="flex-1 grid lg:grid-cols-12 gap-0">
          
          {/* Text Content Section */}
          <motion.div 
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="lg:col-span-7 flex flex-col justify-center px-4 md:px-18 pt-4 pb-8 md:pb-20"
          >
            <motion.header variants={itemVars} className="mb-12">
               <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                // Financial Excellence
               </span>
               <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                SMART <br /> 
                <span
                  className="inline-block 
                            bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.15)_60%,transparent_70%)]
                            bg-[length:300%_100%]
                            bg-clip-text
                            text-transparent
                            animate-shimmer-slow animate-delay-1"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.25)',
                    WebkitBackgroundClip: 'text'
                  }}
                >
                  AUDIT.
                </span>
                <br/>
                  <span className='text-yellow-400'>PURE</span>
                <br/>
                <span
                  className="inline-block 
                            bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.15)_60%,transparent_70%)]
                            bg-[length:300%_100%]
                            bg-clip-text
                            text-transparent
                            animate-shimmer-slow delay-1000 animate-delay-2"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.25)',
                    WebkitBackgroundClip: 'text'
                  }}
                >
                  GROWTH.
                </span>
               </h1>
            </motion.header>

            <motion.div variants={itemVars} className="max-w-md">
              <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l-2 border-yellow-500 pl-6">
                BKK & Associates redefines compliance through precision and technology. We don't just balance books; we build financial fortresses for PAN India enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-10 py-5 bg-white text-black font-bold flex items-center justify-center hover:bg-yellow-500 active:bg-yellow-500 transition-all duration-300 group">
                  Get Started 
                  <ArrowRight className="ml-2 group-hover:translate-x-2 group-active:translate-x-2 transition-transform" />
                </Link>
                <Link href="/services" className="px-10 py-5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-2 active:bg-white/10 active:border-2 transition-all text-center">
                  Our Expertise
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-5 relative bg-[#0c0e12] border-l border-white/5 overflow-hidden group"
          >
            <div className="absolute inset-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 group-active:grayscale-0 group-active:opacity-60 transition-all duration-1000">
               <img 
                src="/architecture.png" 
                alt="Architecture" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 group-active:scale-100 transition-transform duration-500"
               />
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 gap-4">
               <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-black/60 backdrop-blur-md p-6 border border-white/10 translate-x-12 hover:translate-x-0 active:translate-x-0 transition-transform duration-500"
               >
                  <h4 className="text-yellow-500 font-bold mb-1">Direct Taxation</h4>
                  <p className="text-xs text-slate-300">Strategic planning & advisory for corporate entities.</p>
               </motion.div>
               <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-black/60 backdrop-blur-md p-6 border border-white/10 hover:-translate-x-4 active:-translate-x-4 transition-transform duration-500"
               >
                  <h4 className="text-blue-400 font-bold mb-1">GST Compliance</h4>
                  <p className="text-xs text-slate-300">End-to-end management for seamless operations.</p>
               </motion.div>
            </div>

            <motion.div 
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute top-0 right-0 bg-yellow-500 px-4 py-4 md:py-8 [writing-mode:vertical-lr] font-bold text-black tracking-widest uppercase text-xs"
            >
              Scroll to explore
            </motion.div>
          </motion.div>

        </section>
      </main>
    </div>
  );
}