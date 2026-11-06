import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "#3", label: "Contributor Rank of 60+ Engineers" },
  { value: "1,000+", label: "Commits Across 13 Repositories" },
  { value: "7", label: "Production Platforms Shipped" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-10">
      <Reveal className="grid grid-cols-2 border-t border-b border-line sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-8 sm:px-6 ${i % 2 === 1 ? "border-l" : ""} ${
              i >= 2 ? "border-t sm:border-t-0" : ""
            } ${i >= 1 ? "sm:border-l" : ""} border-line`}
          >
            <p className="font-display text-3xl text-accent sm:text-4xl">{stat.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
