import Link from "next/link";
import { navItems } from "./content";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import styles from "./home.module.css";

const desktopNavItems = navItems.filter((item) =>
  ["/#business", "/#company-atmosphere", "/works", "/#company-info", "/#access"].includes(item.href),
);

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMain}>株式会社アルファ管工</span>
            <span className={styles.logoSub}>滋賀県大津市 / 水まわりのホームドクター</span>
          </Link>
          <nav className={styles.desktopNav} aria-label="メインナビゲーション">
            {desktopNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="tel:0775793507" className={styles.headerCta} aria-label="電話する">
            077-579-3507
          </a>
          <HeaderMobileMenu />
        </div>
        </div>
    </header>
  );
}
