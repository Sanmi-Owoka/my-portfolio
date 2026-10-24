"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const lineVariants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-36 pb-28 sm:px-10 sm:pt-44">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Open to new roles — currently @ {profile.currentRole.company}
      </motion.p>

      <h1 className="mt-8 font-display text-[15vw] font-light italic leading-[0.92] tracking-tight text-foreground sm:text-[7.5rem] lg:text-[8.5rem]">
        <span className="block overflow-hidden">
          <motion.span
            variants={lineVariants}
            initial="hidden"
            animate="show"
            custom={0}
            className="block"
          >
            Oluwasanmi
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            variants={lineVariants}
            initial="hidden"
            animate="show"
            custom={1}
            className="block text-accent"
          >
            Owoka
          </motion.span>
        </span>
      </h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.55} className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Backend Engineer
          </p>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.15em]">
            <a href="/resume.pdf" className="underline-grow text-foreground">
              Résumé
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline-grow text-foreground"
            >
              GitHub ↗
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline-grow text-foreground"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="relative h-40 w-32 shrink-0 self-start justify-self-end sm:h-52 sm:w-40"
        >
          <div className="relative h-full w-full overflow-hidden border border-line">
            <Image
              src="/headshot.png"
              alt={profile.name}
              fill
              sizes="200px"
              className="object-cover grayscale contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-accent mix-blend-color opacity-40" />
          </div>
          <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-accent/40" />
        </motion.div>
      </div>
    </section>
  );
}
