import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const businessPanels = [
  {
    title: "新築給排水設備工事",
    description: "基礎段階からの給水・給湯・排水配管。",
    image: "/images/works/new-house-plumbing-01.webp",
    href: "/works/new-house-plumbing",
  },
  {
    title: "給水・給湯配管工事",
    description: "建物構造に合わせた配管ルート施工。",
    image: "/images/works/water-piping-01.webp",
    href: "/works/water-piping",
  },
  {
    title: "排水設備工事",
    description: "劣化配管の更新・屋外排水の改修。",
    image: "/images/works/drain-after.webp",
    href: "/works/drain-renovation",
  },
];

export function BusinessSection() {
  return (
    <section className={`${styles.section} ${styles.businessShowcase}`} id="business">
      <div className={styles.container}>
        <header className={styles.showcaseHeader} data-reveal>
          <p className={styles.sectionEyebrow}>BUSINESS</p>
          <h2 className={styles.showcaseTitle}>
            <span>アルファ管工の</span>
            <span>事業について</span>
          </h2>
          <p className={styles.showcaseLead}>
            給排水衛生設備工事を核に、新築配管から修繕・設備更新まで。
            現場ごとの条件に合わせ、技術と施工管理で応えます。
          </p>
        </header>

        <ul className={styles.businessPanelGrid} data-reveal>
          {businessPanels.map((panel) => (
            <li key={panel.title}>
              <Link href={panel.href} className={styles.businessPanel}>
                <div className={styles.businessPanelMedia}>
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={65}
                    className={styles.businessPanelImage}
                  />
                  <div className={styles.businessPanelShade} aria-hidden />
                </div>
                <div className={styles.businessPanelBody}>
                  <h3>{panel.title}</h3>
                  <p>{panel.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.showcaseCta}>
          <Link href="/business" className={styles.outlineButton}>
            事業内容を詳しく見る
          </Link>
        </div>
      </div>
    </section>
  );
}
