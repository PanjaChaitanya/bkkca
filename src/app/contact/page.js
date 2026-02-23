import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | BKK & Associates',
  description: 'Get in touch with BKK & Associates. Visit our offices in Hyderabad, Bangalore, and Visakhapatnam for expert chartered accounting services.',
};

const offices = [
  {
    city: 'Hyderabad (Head Office)',
    address: 'Flat 303, Srishti Homes, Beside Metro Pillar A1010, S R Nagar, Hyderabad – 500038',
    mapLink: 'https://maps.google.com/?q=S+R+Nagar+Hyderabad'
  },
  {
    city: 'Bangalore (Branch)',
    address: '#36, II Floor, 91 Springboard, Salarpuria Towers-I, 7th Block, Koramangala, Bangalore – 560095',
    mapLink: 'https://maps.google.com/?q=Koramangala+Bangalore'
  },
  {
    city: 'Visakhapatnam (Branch)',
    address: 'Flat A2, Baba Towers, Opp. Andhra University out gate, Visakhapatnam – 530003',
    mapLink: 'https://maps.google.com/?q=Andhra+University+Visakhapatnam'
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Let's Discuss Your Query
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We are here to help you navigate your financial journey with confidence. Reach out to our dedicated professionals today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
            {/* Note: Connect this form to Web3Forms or Formspree later */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email ID *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50" placeholder="Your Company Ltd." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Message *</label>
                <textarea required rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-600/30">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right Column: Office Locations & Direct Contact */}
          <div className="space-y-10">
            {/* Direct Contact Info */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-yellow-400">Direct Contact</h3>
              <div className="space-y-4">
                <a href="mailto:kiran@bkkca.com" className="flex items-center gap-4 hover:text-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">kiran@bkkca.com</span>
                </a>
                <a href="tel:+919701328888" className="flex items-center gap-4 hover:text-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+91 970-132-8888 / 89-7890-7890</span>
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Locations</h3>
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{office.city}</h4>
                      <p className="text-slate-600 mb-3 leading-relaxed">{office.address}</p>
                      <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                        Get Directions →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}