import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 sm:px-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-6">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="underline-grow text-foreground">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="underline-grow text-foreground">
            LinkedIn
          </a>
          <a href={profile.links.email} className="underline-grow text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
