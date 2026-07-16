"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Diamond, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#", active: true },
  { label: "Open Source", href: "#open-source", active: false },
  { label: "About", href: "#", active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Diamond className="w-5 h-5 text-accent-blue" strokeWidth={2} />
          <span className="font-bold text-[17px] tracking-tight">
            NeverCode
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9 font-mono text-[13px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-accent-blue border-b-2 border-accent-blue pb-1"
                  : "text-gray-400 hover:text-white transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex bg-accent-blue text-black text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-sky-300 transition-colors cursor-pointer">
            Get in Touch
          </button>
          <button
            className="md:hidden p-1 text-white cursor-pointer"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#0a0a0a]"
          >
            <div className="px-6 py-4 space-y-4 font-mono text-sm">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block ${
                    link.active ? "text-accent-blue" : "text-gray-400"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full bg-accent-blue text-black text-[13px] font-semibold px-5 py-2.5 rounded-full mt-2 cursor-pointer">
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
