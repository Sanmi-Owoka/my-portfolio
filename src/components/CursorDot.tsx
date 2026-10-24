"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function CursorDot() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let x = 0;
    let y = 0;
    let rafId = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translate(${x}px, ${y}px)`;
          }
          rafId = 0;
        });
      }
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      setActive(Boolean(target.closest("a, button")));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      aria-hidden
    >
      <div
        className="rounded-full bg-[#f2ede3] transition-[width,height] duration-200 ease-out"
        style={{
          width: active ? 34 : 7,
          height: active ? 34 : 7,
          marginLeft: active ? -17 : -3.5,
          marginTop: active ? -17 : -3.5,
        }}
      />
    </div>
  );
}
