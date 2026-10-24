"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.15em] text-foreground"
        >
          S.OWOKA<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="underline-grow transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.links.email}
          className="underline-grow font-mono text-[11px] uppercase tracking-[0.15em] text-foreground"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
