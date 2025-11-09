import React from 'react';
import { ArrowRight, Type, Palette, Play, Download } from 'lucide-react';

const steps = [
  { icon: Type, title: 'Type your idea', desc: 'Describe your concept in natural language.' },
  { icon: Palette, title: 'Select style', desc: 'Choose from cinematic, studio, brand, and more.' },
  { icon: Play, title: 'Generate', desc: 'Create images and videos in seconds.' },
  { icon: Palette, title: 'Refine', desc: 'Tweak prompts and parameters to perfect results.' },
  { icon: Download, title: 'Export', desc: 'Download in multiple formats or save to your library.' },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">How it works</h2>
          <p className="mt-4 text-slate-600">From idea to export in five simple steps.</p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 ring-1 ring-blue-600/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              {idx < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-slate-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
