import Link from "next/link";

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
    <main className="bg-[#f3f4f6] py-20">
      <div className="mx-auto w-[min(900px,92%)]">
        <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-[#5a6c7a]">PRIVACY POLICY</p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight text-[#12263d]">プライバシーポリシー</h1>
        <p className="mb-10 text-sm leading-8 text-[#4f6171]">
          株式会社アルファ管工（以下「当社」）は、お客様の個人情報を適切に取り扱い、保護することを社会的責務と認識し、
          以下の方針に基づき管理します。
        </p>

        <div className="space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded border border-[#d7e1ea] bg-white p-5 md:p-6">
              <h2 className="mb-3 text-lg font-semibold text-[#17324f]">{section.title}</h2>
              <p className="text-sm leading-8 text-[#4f6171]">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded border border-[#d7e1ea] bg-white p-5 md:p-6">
          <h2 className="mb-3 text-lg font-semibold text-[#17324f]">6. お問い合わせ窓口</h2>
          <p className="text-sm leading-8 text-[#4f6171]">
            株式会社アルファ管工
            <br />
            所在地: 滋賀県大津市坂本6丁目8-8
            <br />
            TEL: 077-579-3507
            <br />
            E-mail: honsha@alpha-kanko.co.jp
          </p>
          <p className="mt-4 text-xs text-[#6c7e8e]">制定日: 2026年5月8日</p>
        </section>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded border border-[#123a63] px-5 text-sm font-semibold text-[#123a63] transition hover:bg-[#123a63] hover:text-white"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
