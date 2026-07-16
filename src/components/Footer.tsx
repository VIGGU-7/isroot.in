"use client";

import { Diamond, MessageCircle, Code2, Mail } from "lucide-react";

const linkGroups = [
  {
    heading: "LINKS",
    items: [
      { label: "Services", href: "#" },
      { label: "Open Source Hub", href: "#open-source" },
      { label: "About Us", href: "#" },
      { label: "Student Resources", href: "#" },
    ],
  },
  {
    heading: "LEGAL",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const socials = [
  { Icon: MessageCircle, href: "#", label: "Chat" },
  { Icon: Code2, href: "#", label: "Code" },
  { Icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-accent-blue font-bold text-lg">
            <Diamond className="w-5 h-5" strokeWidth={2} />
            NeverCode
          </div>
          <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
            Built by people who care. Shipping digital products people can
            actually trust.
          </p>
        </div>

        {/* Link groups */}
        {linkGroups.map((group) => (
          <div key={group.heading}>
            <h5 className="font-mono text-[11px] text-gray-500 tracking-[0.15em] mb-4">
              {group.heading}
            </h5>
            <ul className="space-y-3 text-sm text-gray-300">
              {group.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Connect */}
        <div>
          <h5 className="font-mono text-[11px] text-gray-500 tracking-[0.15em] mb-4">
            CONNECT
          </h5>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <s.Icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 py-6">
        <p className="max-w-7xl mx-auto font-mono text-xs text-gray-600">
          © 2026 NeverCode. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
