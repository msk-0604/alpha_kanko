import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageCta } from "@/components/seo/PageCta";
import { getAllVoiceIds, getVoiceById } from "@/data/voices";
import styles from "@/components/works/works.module.css";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getAllVoiceIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const voice = getVoiceById(id);
  if (!voice) return { title: "お客様の声｜株式会社アルファ管工" };
  return {
    title: `${voice.title}｜お客様の声｜株式会社アルファ管工`,
    description: voice.comment,
    alternates: { canonical: `/voices/${voice.id}` },
    openGraph: {
      title: `${voice.title}｜お客様の声`,
      description: voice.comment,
      url: `/voices/${voice.id}`,
      images: [{ url: voice.image.src }],
    },
  };
}

export default async function VoiceDetailPage({ params }: Props) {
  const { id } = await params;
  const voice = getVoiceById(id);
  if (!voice) notFound();

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "お客様の声", href: "/voices" },
              { label: voice.title },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>VOICE</p>
            <h1 className={styles.pageTitle}>{voice.title}</h1>
            <p className={styles.stars} aria-label={`${voice.rating}点`}>
              {"★".repeat(voice.rating)}
            </p>
            <p className={styles.pageLead}>
              {voice.name} ／ {voice.area}
              <br />
              工事内容：{voice.work}
            </p>
          </header>

          <div style={{ marginBottom: "1.5rem", position: "relative", aspectRatio: "16 / 10" }}>
            <Image
              src={voice.image.src}
              alt={voice.image.alt}
              fill
              sizes="(max-width: 768px) 92vw, 720px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <section className={styles.serviceSection}>
            <h2>コメント</h2>
            <p>{voice.comment}</p>
          </section>

          <ul className={styles.relatedLinks}>
            <li>
              <Link href={voice.serviceHref}>関連サービスを見る</Link>
            </li>
            <li>
              <Link href="/works">施工事例</Link>
            </li>
          </ul>

          <PageCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
