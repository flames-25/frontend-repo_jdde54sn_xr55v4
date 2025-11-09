import React from 'react';
import { Image, Film, ShieldCheck, Sparkles, Folder, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Image,
    title: 'Text‑to‑Image Generation',
    desc: 'Turn any idea into photorealistic visuals with precision controls and style presets.',
  },
  {
    icon: Film,
    title: 'AI Video Generation & Scripting',
    desc: 'Write scenes, set pacing, and generate cinematic shots with realistic motion.',
  },
  {
    icon: ShieldCheck,
    title: 'Brand Consistency Engine',
    desc: 'Keep colors, typography, and visual language consistent across every asset.',
  },
  {
    icon: Sparkles,
    title: 'Creative Co‑Pilot Mode',
    desc: 'Guided suggestions that help you ideate faster without losing your voice.',
  },
  {
    icon: Folder,
    title: 'Multi‑format Export & Asset Management',
    desc: 'Export to PNG, WEBM, MP4, GIF, SVG and manage versions in one place.',
  },
  {
    icon: Wand2,
    title: 'Refine with Prompts',
    desc: 'Iterate on outputs using natural language and fine‑tune parameters instantly.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Powerful features, elegantly packaged</h2>
          <p className="mt-4 text-slate-600">Tools that blend creativity and automation so you can create more, faster.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 ring-1 ring-blue-600/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
