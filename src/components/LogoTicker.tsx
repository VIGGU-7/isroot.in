"use client";

import {
  Grid3x3,
  Landmark,
  Sun,
  Cloud,
  Zap,
  Circle,
} from "lucide-react";

const logos = [
  { name: "TechCorp", Icon: Grid3x3 },
  { name: "GlobalFin", Icon: Landmark },
  { name: "NexusLabs", Icon: Sun },
  { name: "SkyCloud", Icon: Cloud },
  { name: "DataPulse", Icon: Zap },
  { name: "EdgeWorks", Icon: Circle },
];

export default function LogoTicker() {
  // Duplicate logos for seamless loop
  const doubled = [...logos, ...logos];

  return (
    <section className="border-b border-white/10 py-9 overflow-hidden">
      <p className="text-center font-mono text-[11px] tracking-[0.2em] text-accent-blue/80 mb-8">
        SUPPORTED BY GLOBAL LEADERS
      </p>

      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 mx-10 text-xl font-bold text-white/90 whitespace-nowrap shrink-0"
            >
              <logo.Icon className="w-5 h-5" strokeWidth={2} />
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
