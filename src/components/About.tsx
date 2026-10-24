import { profile, skills } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

const allSkills = Array.from(new Set(Object.values(skills).flat()));

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="grid gap-10 sm:grid-cols-[140px_1fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            01 — About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-balance font-display text-2xl leading-snug text-foreground sm:text-3xl lg:text-4xl">
            {profile.bio}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-14">
        <Marquee items={allSkills} />
      </Reveal>
    </section>
  );
}
