"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import styles from "./mobile-menu.module.css";

const primaryLinks = [
  { label: "トップ", href: "/" },
  { label: "事業内容", href: "/business" },
  { label: "施工事例", href: "/works" },
  { label: "会社案内", href: "/company" },
  { label: "代表挨拶", href: "/greeting" },
  { label: "選ばれる理由", href: "/strength" },
  { label: "対応エリア", href: "/area" },
  { label: "お知らせ", href: "/news" },
  { label: "よくある質問", href: "/faq" },
  { label: "採用情報", href: "/recruit" },
];

type HeaderMobileMenuProps = {
  overlay?: boolean;
};

export function HeaderMobileMenu({ overlay = false }: HeaderMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const close = () => setIsOpen(false);

  const menu =
    mounted && isOpen
      ? createPortal(
          <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <button type="button" className={styles.backdrop} onClick={close} aria-label="メニューを閉じる" />
            <div className={styles.panel}>
              <div className={styles.panelTop}>
                <div>
                  <p id={titleId} className={styles.brand}>
                    株式会社アルファ管工
                  </p>
                  <p className={styles.brandSub}>滋賀県大津市 / 給排水・配管工事</p>
                </div>
                <button type="button" className={styles.closeBtn} onClick={close} aria-label="メニューを閉じる">
                  <span />
                  <span />
                </button>
              </div>

              <nav className={styles.nav} aria-label="モバイルメニュー">
                {primaryLinks.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.navLink} onClick={close}>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className={styles.footer}>
                <a href="tel:0775793507" className={styles.phone} onClick={close}>
                  077-579-3507
                </a>
                <Link href="/contact" className={styles.contactCta} onClick={close}>
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={`${styles.hamburger} ${overlay ? styles.hamburgerOnHero : ""} ${isOpen ? styles.hamburgerOpen : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
      {menu}
    </>
  );
}
