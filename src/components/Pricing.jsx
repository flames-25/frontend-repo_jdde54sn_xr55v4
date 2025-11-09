import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    priceMonthly: 0,
    priceYearly: 0,
    features: ['50 image generations / mo', 'Basic styles', 'Community watermark'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    priceMonthly: 29,
    priceYearly: 24,
    features: ['Unlimited images', 'Video generation', 'Brand assets & libraries', 'Priority queue'],
    cta: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    priceMonthly: 99,
    priceYearly: 79,
    features: ['SSO & roles', 'Custom models', 'SLAs & support', 'On‑prem options'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Choose a plan that grows with your creativity.</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm ${!yearly ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
          <button
            aria-label="Toggle billing"
            onClick={() => setYearly((v) => !v)}
            className="relative h-8 w-16 rounded-full bg-slate-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow transition ${yearly ? 'translate-x-8' : ''}`} />
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
          </button>
          <span className={`text-sm ${yearly ? 'text-slate-900' : 'text-slate-500'}`}>Yearly <span className="ml-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">Save 20%</span></span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const price = p.name === 'Enterprise' ? (yearly ? 'Custom' : 'Custom') : `$${yearly ? p.priceYearly : p.priceMonthly}`;
            return (
              <div key={p.name} className={`relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${p.highlight ? 'ring-2 ring-blue-600' : ''}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white shadow-md">
                    <Star className="h-3.5 w-3.5" /> Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-semibold text-slate-900">{price}</span>
                  {p.name !== 'Enterprise' && <span className="mb-1 text-slate-500">/mo</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-600">
                      <Check className="mt-0.5 h-5 w-5 text-blue-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#signup" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition ${p.highlight ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
