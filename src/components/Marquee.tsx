"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-line py-4">
      <motion.div
        className="flex w-max gap-10 font-mono text-sm uppercase tracking-[0.15em] text-muted"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
