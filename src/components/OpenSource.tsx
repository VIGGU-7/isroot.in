"use client";

import { CheckCircle2, Lock, GitBranch } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CardStack from "./CardStack";

const features = [
  {
    Icon: CheckCircle2,
    title: "Forever Free",
    desc: "No subscriptions or hidden fees for open-source tools.",
  },
  {
    Icon: Lock,
    title: "Customer Ownership",
    desc: "Avoid lock-in. Easy to access, export, and move your data.",
  },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <ScrollReveal>
            <span className="inline-block bg-accent-green/10 text-accent-green text-xs font-mono px-3 py-1.5 rounded-full border border-accent-green/25">
              Community First
            </span>
          </ScrollReveal>

          <ScrollReveal as="h2" delay={0.1} className="mt-6 text-3xl sm:text-[40px] font-extrabold tracking-tight leading-tight">
            BUILT FOR THE GRIND.
          </ScrollReveal>

          <ScrollReveal as="p" delay={0.2} className="mt-4 text-gray-400">
            No subscriptions. No lock-in. Just code.
          </ScrollReveal>

          <div className="mt-9 space-y-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={0.3 + i * 0.1}>
                <div className="flex gap-3.5">
                  <f.Icon className="w-5 h-5 text-accent-green shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="mt-1 text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <button className="mt-9 border border-white/20 rounded-lg px-5 py-3 flex items-center gap-2.5 text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
              <GitBranch className="w-4 h-4" strokeWidth={2} />
              View GitHub Repositories
            </button>
          </ScrollReveal>
        </div>

        {/* Right column — 3-card stack */}
        <CardStack />
      </div>
    </section>
  );
}
