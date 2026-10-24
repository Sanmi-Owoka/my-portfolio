"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experience } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal className="mb-14 grid gap-10 sm:grid-cols-[140px_1fr]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          02 — Experience
        </p>
        <p className="font-display text-2xl text-foreground sm:text-3xl">
          Four years, four teams, one habit: make the unglamorous parts correct.
        </p>
      </Reveal>

      <div ref={ref} className="relative sm:pl-[140px]">
        <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-line-soft sm:left-[140px] sm:block" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-0 hidden w-px origin-top bg-accent sm:left-[140px] sm:block"
        />

        <div className="flex flex-col gap-16">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05} className="relative sm:pl-10">
              <span className="absolute left-0 top-1.5 hidden h-2 w-2 -translate-x-[calc(50%+0.5px)] rounded-full bg-background border border-accent sm:block" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl text-foreground sm:text-2xl">
                  {job.company}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                {job.role}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {job.summary}
              </p>

              <ul className="mt-4 flex max-w-2xl flex-col gap-2">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-[9px] h-px w-3 shrink-0 bg-accent/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                {job.stack.join(" · ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
