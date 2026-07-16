"use client";

import {
  Smartphone,
  AppWindow,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
      <ScrollReveal as="h2" className="text-2xl sm:text-3xl font-bold tracking-tight">
        STAY AHEAD.
      </ScrollReveal>
      <ScrollReveal as="p" delay={0.1} className="mt-3 text-gray-400 max-w-md text-[15px] leading-relaxed">
        Products that ship together. We build digital products that are
        reliable, scalable, and tailored to your complex needs.
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Build for the bold (wide) */}
        <ScrollReveal delay={0} className="md:col-span-2 bg-card border border-white/10 rounded-2xl p-7 sm:p-8">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <h3 className="mt-5 font-bold text-lg">BUILD FOR THE BOLD.</h3>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed">
            Bespoke mobile and web apps engineered for raw performance.
          </p>
          <div className="mt-6 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-900 to-black aspect-[16/8] relative">
            <div className="absolute inset-0 grayscale opacity-70 p-5 space-y-2.5">
              <div className="code-line h-2 w-1/3 rounded" />
              <div className="code-line h-2 w-2/3 rounded" />
              <div className="code-line h-2 w-1/2 rounded" />
              <div className="code-line h-2 w-3/4 rounded" />
              <div className="code-line h-2 w-1/4 rounded" />
            </div>
          </div>
        </ScrollReveal>

        {/* Dominate the web */}
        <ScrollReveal delay={0.12} className="bg-card border border-white/10 rounded-2xl p-7 sm:p-8">
          <div className="w-10 h-10 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
            <AppWindow className="w-5 h-5 text-accent-green" strokeWidth={2} />
          </div>
          <h3 className="mt-5 font-bold text-lg">DOMINATE THE WEB.</h3>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed">
            Secure, modern platforms that scale with your ambition.
          </p>
        </ScrollReveal>

        {/* Strategic Consulting */}
        <ScrollReveal delay={0.24} className="bg-card border border-white/10 rounded-2xl p-7 sm:p-8">
          <div className="w-10 h-10 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-accent-green" strokeWidth={2} />
          </div>
          <h3 className="mt-5 font-bold text-lg">Strategic Consulting</h3>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed">
            Guidance on architecture, tech stack selection, and scaling
            strategies from engineers who have shipped world-class digital
            products.
          </p>
        </ScrollReveal>

        {/* Ready to win (wide CTA) */}
        <ScrollReveal delay={0.12} className="md:col-span-2 rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-blue-950 via-[#0f1a3d] to-[#0a0a1f] border border-white/10 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-accent-blue">
            READY TO WIN?
          </h3>
          <p className="mt-2 text-gray-200 text-[15px]">
            Build the products you can&apos;t live without.
          </p>
          <a
            href="#"
            className="mt-4 text-accent-green font-mono text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all w-fit"
          >
            Discuss your project
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
