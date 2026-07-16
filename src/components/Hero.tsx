"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 text-center max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif font-bold text-[42px] leading-[1.1] sm:text-6xl md:text-7xl"
      >
        Build Without{" "}
        <span className="italic text-accent-blue">Limits.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
      >
        Performance first. Scalability by default. We build the apps that define
        industries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="w-full sm:w-auto bg-accent-blue text-black font-semibold text-sm tracking-wide px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-sky-300 transition-colors cursor-pointer">
          START BUILDING
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <button className="w-full sm:w-auto border border-white/25 text-white font-medium text-sm px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors cursor-pointer">
          <Code2 className="w-4 h-4" strokeWidth={2} />
          Explore Open Source
        </button>
      </motion.div>
    </section>
  );
}
