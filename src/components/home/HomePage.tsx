"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./Header";
import { OpeningSplash } from "./OpeningSplash";
import { Hero } from "./Hero";
import { CompanyInfoSection } from "./CompanyInfoSection";
import { BusinessSection } from "./BusinessSection";
import { DisclosureSection } from "./DisclosureSection";
import { CsrSection } from "./CsrSection";
import { SupportSection } from "./SupportSection";
import { NewsSection } from "./NewsSection";
import { AccessSection } from "./AccessSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { MobileFixedCTA } from "./MobileFixedCTA";
import styles from "./home.module.css";

export function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to('[data-animate="hero-visual"]', {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to('[data-animate="pipe-main"]', {
          y: -14,
          duration: 2.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        gsap.to('[data-animate="pipe-sub"]', {
          y: 10,
          duration: 3.3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        gsap.fromTo(
          '[data-animate="hero-badge"], [data-animate="hero-lead"], [data-animate="hero-title"] span, [data-animate="hero-description"], [data-animate="hero-stats"] .heroStatCard, [data-animate="hero-actions"] a',
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.11,
            ease: "expo.out",
            delay: 0.2,
          },
        );

        gsap.fromTo(
          '[data-animate="cta-btn"]',
          { boxShadow: "0 0 0 rgba(30, 92, 153, 0)" },
          {
            boxShadow: "0 14px 30px rgba(15, 39, 64, 0.18)",
            duration: 1.1,
            stagger: 0.08,
            ease: "power2.out",
          },
        );
      });

      gsap.fromTo(
        '[data-animate="hero-visual"]',
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
      );

      gsap.fromTo(
        '[data-animate="business-card"]',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#company-info",
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        '[data-animate="strength-card"]',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#disclosure",
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        '[data-animate="work-card"]',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#csr",
            start: "top 84%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page}>
      <OpeningSplash />
      <Header />
      <main>
        <Hero />
        <CompanyInfoSection />
        <BusinessSection />
        <DisclosureSection />
        <CsrSection />
        <SupportSection />
        <NewsSection />
        <AccessSection />
        <CTASection />
      </main>
      <Footer />
      <MobileFixedCTA />
    </div>
  );
}
