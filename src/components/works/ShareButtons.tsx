"use client";

import { useState } from "react";
import styles from "./works.module.css";

type ShareButtonsProps = {
  title: string;
  path: string;
};

export function ShareButtons({ title, path }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://www.alpha-kanko.com${path}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareX = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.shareRow}>
      <p className={styles.shareLabel}>この事例を共有</p>
      <div className={styles.shareActions}>
        <button type="button" className={styles.shareBtn} onClick={copy}>
          {copied ? "URLをコピーしました" : "URLをコピー"}
        </button>
        <button type="button" className={styles.shareBtn} onClick={shareX}>
          Xで共有
        </button>
      </div>
    </div>
  );
}
