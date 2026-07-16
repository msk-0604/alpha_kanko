import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { greeting } from "@/components/home/content";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "代表挨拶｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工 代表取締役 山口豊樹からのごあいさつ。地域の暮らしを支える水まわり設備を、丁寧で誠実な施工で守ります。",
  alternates: { canonical: "/greeting" },
};

export default function GreetingPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "会社案内", href: "/company" },
              { label: "代表挨拶" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>GREETING</p>
            <h1 className={styles.pageTitle}>代表挨拶</h1>
          </header>

          <div className={styles.greetingCopyOnly}>
            <p className={styles.greetingRole}>
              {greeting.title}
              <span>{greeting.name}</span>
            </p>
            <p className={styles.greetingLead}>丁寧に、正直に。</p>
            <p>{greeting.message}</p>
            <p>
              創業平成3年より、大津市を拠点に給排水設備工事に向き合ってまいりました。
              法人・公共施設から一般住宅まで、現場ごとに最適な施工と誠実なご案内を心がけています。
            </p>
            <p>
              水まわりの不安や設備更新のご相談がありましたら、どうぞお気軽にご連絡ください。
            </p>
          </div>

          <div className={styles.detailNav}>
            <Link href="/company" className={styles.backLink}>
              会社案内へ
            </Link>
            <Link href="/contact" className={styles.backLink}>
              お問い合わせへ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
