"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** HTML tag to render – defaults to div */
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3" | "h4";
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: Props) {
  const Tag = motion.create(as);

  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
