"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./home.module.css";

const SESSION_KEY = "alpha-kanko-opening-seen";

export function OpeningSplash() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(SESSION_KEY) === "1";
    if (reduced || seen) {
      setHidden(true);
      return;
    }

    setHidden(false);

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setHidden(true);
      },
    });

    tl.fromTo(
      '[data-open="logo"], [data-open="copy"]',
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
    )
      .to({}, { duration: 0.35 })
      .to('[data-open="panel"]', {
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.opening} data-open="panel" aria-hidden="true">
      <div className={styles.openingInner}>
        <p data-open="logo">ALPHA KANKO</p>
        <h2 data-open="copy">水と配管で、まちを支える。</h2>
      </div>
    </div>
  );
}
