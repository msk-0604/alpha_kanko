import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageCta } from "@/components/seo/PageCta";
import { voiceItems } from "@/data/voices";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "お客様の声｜株式会社アルファ管工",
  description:
    "漏水調査・修理、給排水設備工事をご依頼いただいたお客様の声。滋賀県大津市の株式会社アルファ管工。",
  alternates: { canonical: "/voices" },
  openGraph: {
    title: "お客様の声｜株式会社アルファ管工",
    description: "施工後のお客様からのコメントをご紹介します。",
    url: "/voices",
  },
};

export default function VoicesPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "お客様の声" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>VOICE</p>
            <h1 className={styles.pageTitle}>お客様の声</h1>
            <p className={styles.pageLead}>
              ご依頼いただいたお客様からのコメントです。個人が特定されない範囲で掲載しています。
            </p>
          </header>

          <ul className={styles.simpleList}>
            {voiceItems.map((voice) => (
              <li key={voice.id}>
                <Link href={`/voices/${voice.id}`}>
                  <span className={styles.stars}>{"★".repeat(voice.rating)}</span>
                  <strong style={{ display: "block", marginBottom: "0.25rem" }}>
                    {voice.title}
                  </strong>
                  {voice.work} ／ {voice.area}
                </Link>
              </li>
            ))}
          </ul>

          <PageCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
