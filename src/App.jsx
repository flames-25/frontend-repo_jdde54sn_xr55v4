import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import { Github, Twitter } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-md" />
            <span className="text-lg font-semibold tracking-tight">VisionCraft</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#social-proof" className="hover:text-slate-900">Testimonials</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#signup" className="hidden rounded-xl px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 md:inline-block">Sign in</a>
            <a href="#pricing" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">Get started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative isolate overflow-hidden rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
              <div className="pointer-events-none absolute -inset-20 -z-[1] rounded-[40px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900">Start Creating with VisionCraft Today</h3>
                <p className="mt-4 text-slate-600">Join thousands of creators crafting stunning visuals and videos with AI.</p>
                <a href="#pricing" className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700">Start Free</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400" />
              <span className="text-lg font-semibold text-white">VisionCraft</span>
            </div>
            <nav className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#docs" className="hover:text-white">Docs</a>
              <a href="#terms" className="hover:text-white">Terms</a>
              <a href="#privacy" className="hover:text-white">Privacy</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-lg p-2 hover:bg-white/10"><Twitter className="h-5 w-5" /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg p-2 hover:bg-white/10"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} VisionCraft, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
