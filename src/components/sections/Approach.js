import { Users2, Settings2, Cpu } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      title: "People",
      desc: "A vibrant team of agile individuals driven by innovation and a passion for financial excellence.",
      icon: Users2,
      color: "bg-blue-500"
    },
    {
      title: "Process",
      desc: "Developing tailored solutions designed to meet your unique requirements in the most efficient way.",
      icon: Settings2,
      color: "bg-indigo-500"
    },
    {
      title: "Technology",
      desc: "Adapting modern intelligent methods to craft personalized solutions that address your specific needs.",
      icon: Cpu,
      color: "bg-slate-800"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Our Methodology
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            The BKK Edge: Smarter Systems, Better Results
          </h3>
          <p className="text-slate-400 text-lg">
            We simplify and streamline business processes through a triad of core pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}