"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "./content";
import styles from "./home.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#top");

  useEffect(() => {
    const updateState = () => {
      setIsScrolled(window.scrollY > 8);
      const sections = navItems
        .map((item) => document.querySelector(item.href) as HTMLElement | null)
        .filter((section): section is HTMLElement => Boolean(section));

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current?.id) {
        setActiveHash(`#${current.id}`);
      }
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("hashchange", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("hashchange", updateState);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMain}>株式会社アルファ管工</span>
            <span className={styles.logoSub}>滋賀県大津市 / 水まわりのホームドクター</span>
          </Link>
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHash === item.href ? styles.navActive : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="tel:0775793507" className={styles.headerCta} aria-label="電話する">
            077-579-3507
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="メニューを開閉"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="tel:0775793507" className={styles.mobileMenuPhone}>
            TEL: 077-579-3507
          </a>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeHash === item.href ? styles.navActive : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
