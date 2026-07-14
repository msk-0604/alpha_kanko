import { strengths } from "./content";
import styles from "./home.module.css";

const strengthCopy: Record<string, string> = {
  地域密着: "大津市を拠点に、現場の声とスピード感を大切に対応します。",
  官公庁対応: "手続き・工程管理を含め、公共工事に求められる姿勢で向き合います。",
  法人対応: "施設管理者様との連携を前提に、稼働への影響を抑えた施工を行います。",
  修繕対応: "漏水・詰まり・設備不良など、原因確認から再発防止まで対応します。",
  迅速対応: "緊急のご相談にも、状況を伺いながら可能な限り早く手配します。",
  丁寧施工: "見えなくなる部分ほど、接続と仕上げを丁寧に進めます。",
  有資格者対応: "指定工事事業者として、法令と安全管理を徹底します。",
  アフターサポート: "引き渡し後の確認やご相談にも、誠実に対応します。",
};

export function StrengthSection() {
  return (
    <section className={`${styles.section} ${styles.strengthEditorial}`} id="strengths">
      <div className={styles.container}>
        <header className={styles.showcaseHeader} data-reveal>
          <p className={styles.sectionEyebrow}>STRENGTH</p>
          <h2 className={styles.showcaseTitle}>
            <span>選ばれる理由</span>
          </h2>
          <p className={styles.showcaseLead}>
            派手な約束ではなく、現場で積み重ねた対応力と施工品質で信頼を築いています。
          </p>
        </header>
        <ol className={styles.strengthEditorialList}>
          {strengths.map((item, index) => (
            <li key={item} className={styles.strengthEditorialItem} data-reveal>
              <span className={styles.strengthIndex}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item}</h3>
                <p>{strengthCopy[item] ?? "現場ごとの条件に合わせ、品質と安全を重視して対応します。"}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
