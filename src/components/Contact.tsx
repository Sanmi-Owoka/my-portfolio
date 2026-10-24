"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <Reveal className="grid gap-10 sm:grid-cols-[140px_1fr]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          04 — Contact
        </p>

        <div>
          <p className="max-w-2xl text-balance font-display text-3xl leading-tight text-foreground sm:text-5xl">
            Open to new backend roles. Email is the fastest way to reach me.
          </p>

          <motion.a
            href={profile.links.email}
            whileHover="hover"
            initial="rest"
            className="group relative mt-10 inline-flex items-center gap-4 overflow-hidden border border-line px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-foreground"
          >
            <motion.span
              variants={{ rest: { y: "100%" }, hover: { y: "0%" } }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-accent"
            />
            <span className="relative z-10 transition-colors duration-200 group-hover:text-background">
              {profile.email}
            </span>
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: 4 } }}
              className="relative z-10 transition-colors duration-200 group-hover:text-background"
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
