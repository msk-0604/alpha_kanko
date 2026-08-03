import Link from "next/link";
import { areaList } from "./content";
import { areaCities } from "@/data/areas";

export function Footer() {
  const relatedLinks = [
    { label: "漏水調査", href: "/leak-survey" },
    { label: "漏水修理", href: "/leak-repair" },
    { label: "排水工事", href: "/drainage" },
    { label: "給排水設備工事", href: "/plumbing" },
    { label: "リフォーム", href: "/reform" },
    { label: "施工事例", href: "/works" },
    { label: "ブログ", href: "/blog" },
  ];

  const serviceLinks = [
    { label: "対応エリア", href: "/area" },
    { label: "よくある質問", href: "/faq" },
    { label: "お客様の声", href: "/voices" },
    { label: "会社案内", href: "/company" },
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
              {areaCities.slice(0, 8).map((city) => (
                <li key={city.slug} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2 text-[10px]">
                    ▸
                  </span>
                  <Link href={`/area/${city.slug}`} className="transition hover:text-white">
                    {city.name}
                  </Link>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-2 text-[10px]">
                  ▸
                </span>
                <Link href="/area" className="transition hover:text-white">
                  すべてのエリア
                </Link>
              </li>
              {areaList.slice(1).map((area) => (
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
              サービス
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
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex min-h-11 w-full items-center justify-center bg-white text-sm font-semibold !text-[#10253f] transition duration-300 hover:bg-white/90"
              >
                お問合せ
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
