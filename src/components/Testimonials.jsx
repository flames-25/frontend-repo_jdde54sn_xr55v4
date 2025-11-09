import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Creative Director, Neon Labs',
    quote: 'VisionCraft cut our production timelines from weeks to hours. The brand consistency is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Marcus Reed',
    role: 'Head of Content, Orbit Media',
    quote: 'The video generation and scripting blew our minds. It feels like having a full studio in a browser.',
    avatar: 'https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Isabella Park',
    role: 'Brand Designer, Lunar Co',
    quote: 'My team collaborates faster and keeps every asset perfectly on-brand. Game changer.',
    avatar: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="social-proof" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Trusted by modern teams</h2>
          <p className="mt-4 text-slate-600">Kind words from creators using VisionCraft every day.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-1 text-yellow-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
