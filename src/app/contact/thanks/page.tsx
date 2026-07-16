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
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.lead}>CONTACT</p>
            <h1>送信完了</h1>
            <p>
              お問い合わせありがとうございました。内容を確認のうえ、担当者より折り返しご連絡いたします。
              お急ぎの場合は <a href="tel:0775793507">077-579-3507</a> までご連絡ください。
            </p>
            <div className={styles.thanksActions}>
              <Link href="/" className={styles.thanksLink}>
                トップへ戻る
              </Link>
              <Link href="/works" className={styles.thanksLink}>
                施工事例を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
