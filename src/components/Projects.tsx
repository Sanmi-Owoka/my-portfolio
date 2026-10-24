"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal className="mb-10 grid gap-10 sm:grid-cols-[140px_1fr]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          03 — Work
        </p>
        <p className="font-display text-2xl text-foreground sm:text-3xl">
          Platforms I&apos;ve shipped and kept running in production.
        </p>
      </Reveal>

      <div className="border-t border-line">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.04}>
            <ProjectRow project={project} index={i + 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const Wrapper = project.link ? motion.a : motion.div;
  const linkProps = project.link
    ? { href: project.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group relative block border-b border-line py-8 sm:grid sm:grid-cols-[140px_1fr_auto] sm:items-start sm:gap-10"
      whileHover="hover"
      initial="rest"
    >
      <motion.span
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 -mx-6 bg-surface sm:-mx-10"
      />

      <span className="relative z-10 font-mono text-xs text-muted">
        {String(index).padStart(2, "0")}
      </span>

      <div className="relative z-10 mt-3 sm:mt-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-2xl text-foreground sm:text-3xl">
            {project.name}
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            {project.category}
          </span>
          {!project.link && (
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              ({project.status === "Internal" ? "internal" : "client, private"})
            </span>
          )}
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted/80">
          {project.stack.join(" · ")}
        </p>
      </div>

      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: 6 } }}
        className="relative z-10 mt-4 inline-flex items-center font-mono text-xs uppercase tracking-[0.15em] text-foreground sm:mt-0"
      >
        {project.link ? "View ↗" : "—"}
      </motion.span>
    </Wrapper>
  );
}
