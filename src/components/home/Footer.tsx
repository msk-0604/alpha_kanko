import Link from "next/link";
import { areaList } from "./content";

export function Footer() {
  const relatedLinks = [
    { label: "会社案内", href: "/company" },
    { label: "代表挨拶", href: "/greeting" },
    { label: "事業内容", href: "/business" },
    { label: "施工事例", href: "/works" },
    { label: "対応エリア", href: "/area" },
    { label: "お知らせ", href: "/news" },
  ];

  const serviceLinks = [
    { label: "選ばれる理由", href: "/strength" },
    { label: "よくある質問", href: "/faq" },
    { label: "採用情報", href: "/recruit" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ];

  return (
    <footer className="w-full bg-[#10253f] text-white">
      <div className="mx-auto w-[min(1180px,92%)] py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-white/85">
              <span aria-hidden="true">&gt;</span>
              会社情報
            </h3>
            <p className="text-lg font-semibold leading-relaxed">株式会社アルファ管工</p>
            <p className="text-sm leading-7 text-white/85">滋賀県大津市坂本6丁目8-8</p>
            <p className="text-sm leading-7 text-white/85">
              TEL:{" "}
              <a href="tel:0775793507" className="transition hover:text-white">
                077-579-3507
              </a>
            </p>
            <p className="text-sm leading-7 text-white/85">
              E-mail:{" "}
              <a href="mailto:honsha@alpha-kanko.co.jp" className="transition hover:text-white">
                honsha@alpha-kanko.co.jp
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-white/85">
              <span aria-hidden="true">&gt;</span>
              対応エリア
            </h3>
            <ul className="space-y-2 text-sm leading-7 text-white/85">
              {areaList.map((area) => (
                <li key={area} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2 text-[10px]">
                    ▸
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-white/85">
              <span aria-hidden="true">&gt;</span>
              関連ページ
            </h3>
            <ul className="space-y-2 text-sm">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:text-white"
                  >
                    <span aria-hidden="true" className="text-[11px] transition group-hover:translate-x-0.5">
                      ▸
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-white/85">
              <span aria-hidden="true">&gt;</span>
              ご案内
            </h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:text-white"
                  >
                    <span aria-hidden="true" className="text-[11px] transition group-hover:translate-x-0.5">
                      ▸
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 grid gap-2">
              <Link
                href="/recruit"
                className="inline-flex min-h-11 w-full items-center justify-center border border-white/45 bg-white/10 text-sm font-semibold transition duration-300 hover:bg-white/20"
              >
                採用情報
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 w-full items-center justify-center bg-white text-sm font-semibold text-[#10253f] transition duration-300 hover:bg-white/90"
              >
                お問い合わせ
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5">
          <div className="flex flex-col gap-3 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-white">株式会社アルファ管工</p>
            <Link href="/privacy" className="transition duration-300 hover:text-white">
              プライバシーポリシー
            </Link>
            <p>© Alpha Kanko Co., Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
