"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "./content";
import styles from "./home.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            株式会社アルファ管工
          </Link>
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className={styles.headerCta}>
            お問い合わせ
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
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
