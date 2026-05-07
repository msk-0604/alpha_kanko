"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./home.module.css";

export function OpeningSplash() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setHidden(true),
    });

    tl.fromTo(
      '[data-open="panel"]',
      { opacity: 1 },
      { opacity: 1, duration: 0.3, ease: "none" },
    )
      .fromTo(
        '[data-open="logo"], [data-open="copy"], [data-open="loading"]',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
      )
      .to('[data-open="loading-dot"]', {
        opacity: 0.25,
        yoyo: true,
        repeat: 3,
        stagger: 0.08,
        duration: 0.2,
      })
      .to('[data-open="panel"]', {
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.opening} data-open="panel" aria-label="opening">
      <div className={styles.openingInner}>
        <p data-open="logo">ALPHA KANKO</p>
        <h2 data-open="copy">水まわりとインフラを支える。</h2>
        <div className={styles.openingLoading} data-open="loading">
          <span>Now loading</span>
          <i data-open="loading-dot">.</i>
          <i data-open="loading-dot">.</i>
          <i data-open="loading-dot">.</i>
        </div>
      </div>
    </div>
  );
}
