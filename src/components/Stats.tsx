"use client";

import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "500+", label: "SHIPPED.", color: "text-accent-blue" },
  { value: "50k+", label: "BUILDERS.", color: "text-accent-green" },
  { value: "99.9%", label: "PROVEN.", color: "text-accent-green" },
  { value: "120+", label: "NATIONS.", color: "text-accent-blue" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
        {stats.map((stat, i) => (
          <ScrollReveal
            key={stat.label}
            delay={i * 0.1}
            className="py-9 sm:py-11 text-center"
          >
            <div className={`text-3xl sm:text-4xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="mt-2 text-[11px] font-mono text-gray-500 tracking-[0.15em]">
              {stat.label}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
