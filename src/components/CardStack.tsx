"use client";

import { motion } from "framer-motion";
import { Grid3x3, Star, GitFork } from "lucide-react";

type CardData = {
  stars: string;
  forks: string;
  borderOpacity: string;
  bgOpacity: string;
};

// 3 variations — subtle differences in glass opacity & stats
const cards: CardData[] = [
  {
    stars: "9.8k",
    forks: "2.1k",
    borderOpacity: "border-white/10",
    bgOpacity: "bg-white/[0.03]",
  },
  {
    stars: "11.1k",
    forks: "2.8k",
    borderOpacity: "border-white/[0.12]",
    bgOpacity: "bg-white/[0.045]",
  },
  {
    stars: "12.4k",
    forks: "3.2k",
    borderOpacity: "border-white/15",
    bgOpacity: "bg-white/[0.06]",
  },
];

// Resting transforms: bottom → top
const restingTransforms = [
  { rotate: -9, x: -22, y: 26, scale: 0.9, z: 10 },
  { rotate: 7, x: 16, y: 12, scale: 0.96, z: 20 },
  { rotate: 0, x: 0, y: 0, scale: 1, z: 30 },
];

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CardStack() {
  return (
    <div className="relative h-[340px] sm:h-[380px] flex items-center justify-center">
      {cards.map((card, i) => {
        const rest = restingTransforms[i];
        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              rotateZ: -20,
              x: -50,
              y: 100,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              rotateZ: rest.rotate,
              x: rest.x,
              y: rest.y,
              scale: rest.scale,
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.4,
              delay: 0.2 + i * 0.4,
              ease: easeOutExpo,
            }}
            style={{ zIndex: rest.z }}
            className={`absolute w-[85%] max-w-sm ${card.bgOpacity} backdrop-blur-md border ${card.borderOpacity} rounded-2xl p-6 shadow-2xl`}
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <Grid3x3
                className="w-6 h-6 text-accent-green shrink-0 mt-1"
                strokeWidth={2}
              />
              <div className="flex-1">
                <h4 className="font-bold text-white leading-snug">
                  NEXUS UI KIT. THE NEW STANDARD.
                </h4>
                <p className="mt-1 font-mono text-xs text-gray-500">
                  nexus-core/ui-starter-kit
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-4 flex gap-2">
              <span className="text-[11px] border border-white/20 rounded px-2 py-1 flex items-center gap-1">
                <Star
                  className="w-3 h-3 text-accent-blue"
                  fill="currentColor"
                  strokeWidth={0}
                />
                {card.stars}
              </span>
              <span className="text-[11px] border border-white/20 rounded px-2 py-1 flex items-center gap-1">
                <GitFork className="w-3 h-3" strokeWidth={2} />
                {card.forks}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Secure, modern platforms that scale with your ambition.
            </p>

            {/* Tech tags */}
            <div className="mt-4 flex gap-3 text-xs font-mono">
              <span className="text-sky-300">React</span>
              <span className="text-accent-green">Tailwind</span>
              <span className="text-sky-300">TypeScript</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
