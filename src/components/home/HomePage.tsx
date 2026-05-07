"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { CustomerVoicesSection } from "./CustomerVoicesSection";
import { StrengthSection } from "./StrengthSection";
import { AreaSection } from "./AreaSection";
import { GreetingSection } from "./GreetingSection";
import { BusinessSection } from "./BusinessSection";
import { CompanyProfileSection } from "./CompanyProfileSection";
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
      gsap.fromTo(
        '[data-animate="hero-badge"], [data-animate="hero-lead"], [data-animate="hero-title"] span, [data-animate="hero-description"], [data-animate="hero-stats"] .heroStatCard, [data-animate="hero-actions"] a',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" },
      );

      gsap.fromTo(
        '[data-animate="fade-card"], [data-animate="business-card"], [data-animate="strength-card"], [data-animate="work-card"]',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "main",
            start: "top 75%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <BusinessSection />
        <StrengthSection />
        <CaseStudiesSection />
        <AreaSection />
        <CustomerVoicesSection />
        <GreetingSection />
        <CompanyProfileSection />
        <AccessSection />
        <CTASection />
      </main>
      <Footer />
      <MobileFixedCTA />
    </div>
  );
}
