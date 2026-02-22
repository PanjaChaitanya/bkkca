import { Building2, ShieldCheck, MapPin, Landmark } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    { icon: Building2, label: 'Established', value: '2012' },
    { icon: MapPin, label: 'Strategic Locations', value: '3 Branches' },
    { icon: ShieldCheck, label: 'FRN Registration', value: '015384S' },
    { icon: Landmark, label: 'RBI Unique Code', value: '958594' },
  ];

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-slate-100">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center text-center px-4">
                <Icon className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}