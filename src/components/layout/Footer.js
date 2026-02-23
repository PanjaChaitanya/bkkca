import Link from 'next/link';
import { servicesData } from '@/data/services';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Creds */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img src="/CA-India-Logo.png" alt="CA Logo" className="h-10 w-auto invert brightness-0" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-none tracking-tight">BKK & ASSOCIATES</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mt-1">Chartered Accountants</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Trusted strategic partners since 2012, delivering excellence in audit, taxation, and corporate advisory services across India.
            </p>
            <div className="space-y-2 pt-4 border-t border-slate-800">
              <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold">Registration Details</div>
              <p className="text-xs">FRN: 015384S | MEF: 63953</p>
              <p className="text-xs">RBI Unique Code: 958594</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About the Firm</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Client Support</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm">
              {servicesData.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors flex items-center justify-between group">
                    {s.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <a href="mailto:kiran@bkkca.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-500" />
                kiran@bkkca.com
              </a>
              <a href="tel:+919701328888" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-500" />
                +91 970-132-8888
              </a>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-all text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-400 transition-all text-white">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
          <p>© {currentYear} BKK & Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Designed with Excellence</span>
            <span>Hyderabad • Bangalore • Vizag</span>
          </div>
        </div>
      </div>
    </footer>
  );
}