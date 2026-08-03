import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageCta } from "@/components/seo/PageCta";
import { blogPosts, getAllBlogSlugs, getBlogBySlug } from "@/data/blog";
import styles from "@/components/works/works.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "ブログ｜株式会社アルファ管工" };
  return {
    title: `${post.title}｜株式会社アルファ管工`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((item) => item.slug === post.slug);
  const prev = index > 0 ? blogPosts[index - 1] : null;
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "ブログ", href: "/blog" },
              { label: post.title },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>
              {post.date} ／ {post.category}
            </p>
            <h1 className={styles.pageTitle}>{post.title}</h1>
            <p className={styles.pageLead}>{post.lead}</p>
          </header>

          {post.sections.map((section) => (
            <section key={section.heading} className={styles.serviceSection}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <p className={styles.pageLead} style={{ marginBottom: "0.75rem" }}>
            関連サービス
          </p>
          <ul className={styles.relatedLinks}>
            {post.relatedServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.detailNav}>
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className={styles.backLink}>
                前の記事
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/blog/${next.slug}`} className={styles.backLink}>
                次の記事
              </Link>
            ) : null}
          </div>

          <PageCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
