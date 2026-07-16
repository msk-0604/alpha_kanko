import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜株式会社アルファ管工",
  description: "株式会社アルファ管工の個人情報の取扱いについての方針です。",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. 個人情報の利用目的",
    body: "お問い合わせ対応、見積もり・施工に関する連絡、サービス品質向上のために利用します。",
  },
  {
    title: "2. 取得する情報",
    body: "お名前、会社名、電話番号、メールアドレス、お問い合わせ内容など、業務上必要な範囲の情報を取得します。",
  },
  {
    title: "3. 第三者提供について",
    body: "法令に基づく場合を除き、ご本人の同意なく第三者へ提供しません。",
  },
  {
    title: "4. 安全管理措置",
    body: "不正アクセス、紛失、漏えい等の防止に努め、必要かつ適切な安全管理を実施します。",
  },
  {
    title: "5. 開示・訂正・削除等の請求",
    body: "ご本人からの請求があった場合は、法令に基づき速やかに対応します。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "プライバシーポリシー" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>PRIVACY POLICY</p>
            <h1 className={styles.pageTitle}>プライバシーポリシー</h1>
            <p className={styles.pageLead}>
              株式会社アルファ管工は、お客様の個人情報を適切に取り扱い、保護することを社会的責務と認識し、
              以下の方針に基づき管理します。
            </p>
          </header>

          <div className={styles.policyList}>
            {sections.map((section) => (
              <section key={section.title} className={styles.policyItem}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <section className={styles.policyItem}>
              <h2>6. お問い合わせ窓口</h2>
              <p>
                株式会社アルファ管工
                <br />
                所在地: 滋賀県大津市坂本6丁目8-8
                <br />
                TEL: 077-579-3507
                <br />
                E-mail: honsha@alpha-kanko.co.jp
              </p>
              <p className={styles.policyNote}>制定日: 2026年5月8日</p>
            </section>
          </div>

          <div className={styles.detailNav}>
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
