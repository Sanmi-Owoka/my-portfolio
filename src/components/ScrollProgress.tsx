"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-accent z-[60]"
    />
  );
}
