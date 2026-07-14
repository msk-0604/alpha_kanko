"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "./content";
import styles from "./home.module.css";

export function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="メニューを開閉"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
      {isOpen ? (
        <div className={styles.mobileMenu}>
          <a href="tel:0775793507" className={styles.mobileMenuPhone}>
            TEL: 077-579-3507
          </a>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
