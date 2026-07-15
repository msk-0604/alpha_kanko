import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { ContactForm } from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "お問い合わせ｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工へのお問い合わせ。給排水設備工事・修繕・設備更新のご相談を承ります。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.lead}>CONTACT</p>
            <h1>お問い合わせ</h1>
            <p>
              給排水設備工事・修繕・設備更新のご相談を受け付けています。
              お急ぎの場合は <a href="tel:0775793507">077-579-3507</a> までご連絡ください。
            </p>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.container}>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
