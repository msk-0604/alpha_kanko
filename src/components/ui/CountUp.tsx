"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ end, durationMs = 1400, suffix = "", className }: CountUpProps) {
  // Show the real number immediately so crawlers / failed observers never leave "0年"
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || end <= 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(end);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      setValue(0);
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(end * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
