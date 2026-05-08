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
import { TroubleWorksSection } from "./TroubleWorksSection";
import { SymptomSection } from "./SymptomSection";
import { EmergencyCTASection } from "./EmergencyCTASection";
import { ServiceListSection } from "./ServiceListSection";
import { FlowSection } from "./FlowSection";
import { LocalTrustSection } from "./LocalTrustSection";
import { CompanyAtmosphereSection } from "./CompanyAtmosphereSection";
import styles from "./home.module.css";

export function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "株式会社アルファ管工",
        url: "https://www.alpha-kanko.com",
        telephone: "077-579-3507",
        email: "honsha@alpha-kanko.co.jp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "坂本6丁目8-8",
          addressLocality: "大津市",
          addressRegion: "滋賀県",
          postalCode: "520-0113",
          addressCountry: "JP",
        },
      },
      {
        "@type": "ConstructionBusiness",
        name: "株式会社アルファ管工",
        areaServed: ["滋賀県", "京都府南部", "大阪府北部"],
        serviceType: ["給排水衛生設備工事", "配管工事", "水道施設工事", "修繕・メンテナンス"],
      },
      {
        "@type": "Organization",
        name: "株式会社アルファ管工",
        url: "https://www.alpha-kanko.com",
      },
    ],
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-animate="hero-title"] span, [data-animate="hero-description"] .heroLine, [data-animate="hero-actions"] a',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.06, ease: "power3.out" },
      );

      const heroMedia = document.getElementById("hero-parallax");
      if (heroMedia) {
        gsap.to(heroMedia, {
          y: 56,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-animate='fade-card']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='business-card'], [data-animate='strength-card'], [data-animate='work-card']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <CompanyAtmosphereSection />
        <TroubleWorksSection />
        <SymptomSection />
        <EmergencyCTASection />
        <BusinessSection />
        <ServiceListSection />
        <StrengthSection />
        <FlowSection />
        <LocalTrustSection />
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
