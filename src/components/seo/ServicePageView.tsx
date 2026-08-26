import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageCta } from "@/components/seo/PageCta";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import type { ServicePage } from "@/data/services";
import styles from "@/components/works/works.module.css";

export function ServicePageView({ page }: { page: ServicePage }) {
  return (
    <>
      <ServiceJsonLd
        name={page.title}
        description={page.description}
        url={`/${page.slug}`}
      />
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "事業内容", href: "/business" },
              { label: page.title },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>{page.eyebrow}</p>
            <h1 className={styles.pageTitle}>{page.title}</h1>
            <p className={styles.pageLead}>{page.lead}</p>
          </header>

          {page.sections.map((section) => (
            <section key={section.heading} className={styles.serviceSection}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul className={styles.serviceBullets}>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <p className={styles.pageLead} style={{ marginBottom: "0.75rem" }}>
            関連ページ
          </p>
          <ul className={styles.relatedLinks}>
            {page.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
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
