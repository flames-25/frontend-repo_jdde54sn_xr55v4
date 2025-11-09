import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white text-slate-900">
      {/* Spline animated background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/95" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          AI Visual Generative Studio
        </div>

        <h1 className="mt-6 text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Craft the Future of Visual Imagination.
        </h1>
        <p className="mt-6 max-w-2xl text-center text-lg text-slate-600">
          Generate photorealistic images and cinematic videos with AI — instantly. Transform text ideas into production-ready brand assets.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700">
            <Rocket className="h-5 w-5 transition group-hover:scale-110" />
            <span>Try VisionCraft Free</span>
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:ring-slate-300">
            <Play className="h-5 w-5" />
            <span>Watch Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
