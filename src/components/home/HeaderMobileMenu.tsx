"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "./content";
import styles from "./home.module.css";

export function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
      {isOpen ? (
        <div className={styles.mobileMenuOverlay} role="dialog" aria-modal="true" aria-label="メニュー">
          <nav className={styles.mobileMenuPanel}>
            <a href="tel:0775793507" className={styles.mobileMenuPhone} onClick={() => setIsOpen(false)}>
              TEL: 077-579-3507
            </a>
            {navItems.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
