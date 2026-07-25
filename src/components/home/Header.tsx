"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { desktopNavItems } from "./nav";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import styles from "./home.module.css";

type HeaderProps = {
  variant?: "default" | "overlay";
};

export function Header({ variant = "default" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "overlay") return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const onHero = variant === "overlay" && !scrolled;
  const headerClass =
    variant === "overlay"
      ? `${styles.header} ${styles.headerOverlay} ${scrolled ? styles.headerScrolled : ""}`
      : styles.header;

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo} aria-label="株式会社アルファ管工 トップへ">
            <Image
              src={onHero ? "/images/brand/logo-light.png" : "/images/brand/logo.png"}
              alt="株式会社アルファ管工"
              width={929}
              height={191}
              className={styles.logoImage}
              priority
              unoptimized
            />
          </Link>
          <nav className={styles.desktopNav} aria-label="メインナビゲーション">
            {desktopNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.headerActions}>
            <a href="tel:0775793507" className={styles.headerCta} aria-label="電話する">
              077-579-3507
            </a>
            <HeaderMobileMenu overlay={onHero} />
          </div>        </div>
      </div>
    </header>
  );
}
