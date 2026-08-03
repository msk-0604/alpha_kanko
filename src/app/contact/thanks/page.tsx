import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "お問い合わせ完了｜株式会社アルファ管工",
  description: "お問い合わせを受け付けました。株式会社アルファ管工より折り返しご連絡いたします。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact/thanks" },
};

export default function ContactThanksPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.thanksHero}>
          <div className={styles.thanksInner}>
            <div className={styles.thanksCard}>
              <div className={styles.thanksIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M14 24.5 21 31.5 34 16.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className={styles.thanksEyebrow}>CONTACT</p>
              <h1 className={styles.thanksTitle}>送信が完了しました</h1>
              <p className={styles.thanksLead}>
                お問い合わせありがとうございました。
                <br />
                内容を確認のうえ、担当者よりご連絡いたします。
              </p>

              <div className={styles.thanksNote}>
                <p>お急ぎの場合はお電話ください</p>
                <a href="tel:0775793507" className={styles.thanksPhone}>
                  077-579-3507
                </a>
              </div>

              <div className={styles.thanksActions}>
                <Link href="/" className={styles.thanksPrimary}>
                  トップへ戻る
                </Link>
                <Link href="/works" className={styles.thanksSecondary}>
                  施工事例を見る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
