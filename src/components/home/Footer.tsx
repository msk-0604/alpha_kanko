import Image from "next/image";
import Link from "next/link";
import { areaList, instagramUrl } from "./content";

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
            <p className="text-sm leading-7 text-white/85">TEL: 077-579-3507</p>
            <p className="text-sm leading-7 text-white/85">E-mail: honsha@alpha-kanko.co.jp</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/35 bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              aria-label="Instagramへ移動"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
              </svg>
            </a>
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
            <div className="pt-2">
              <a
                href="tel:0775793507"
                className="inline-flex min-h-11 w-full items-center justify-center rounded border border-white/45 bg-white/10 text-sm font-semibold transition duration-300 hover:bg-white/20"
              >
                077-579-3507
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
            <a
            href="/recruit"
            className="group relative block overflow-hidden border border-white/20 min-h-[140px]"
            aria-label="採用情報を見る"
          >
            <Image
              src="/images/hero-construction.png"
              alt="採用情報バナー"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0f2740]/55 transition duration-300 group-hover:bg-[#0f2740]/45" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs tracking-[0.1em] text-white/80">RECRUIT</p>
              <p className="mt-1 text-base font-semibold">採用情報を見る</p>
            </div>
          </a>

          <a
            href="/contact"
            className="group relative block overflow-hidden border border-white/20 min-h-[140px]"
            aria-label="お問い合わせへ"
          >
            <Image
              src="/images/trouble-under-sink.png"
              alt="お問い合わせバナー"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0f2740]/55 transition duration-300 group-hover:bg-[#0f2740]/45" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs tracking-[0.1em] text-white/80">CONTACT</p>
              <p className="mt-1 text-base font-semibold">お問い合わせする</p>
            </div>
          </a>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5">
          <div className="flex flex-col gap-3 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-white">株式会社アルファ管工</p>
            <a href="/privacy" className="transition duration-300 hover:text-white">
              プライバシーポリシー
            </a>
            <p>© Alpha Kanko Co., Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
