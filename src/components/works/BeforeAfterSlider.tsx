"use client";

import { useState } from "react";
import Image from "next/image";
import type { WorkImage } from "@/data/works";
import styles from "./works.module.css";

type BeforeAfterSliderProps = {
  before: WorkImage;
  after: WorkImage;
};

export function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <div className={styles.baSlider}>
      <div className={styles.baSliderStage}>
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 768px) 92vw, 840px"
          quality={92}
          className={styles.baSliderImage}
        />
        <div className={styles.baSliderBefore} style={{ width: `${pos}%` }}>
          <div className={styles.baSliderBeforeInner}>
            <Image
              src={before.src}
              alt={before.alt}
              fill
              sizes="(max-width: 768px) 92vw, 840px"
              quality={92}
              className={styles.baSliderImage}
            />
          </div>
        </div>
        <div className={styles.baSliderHandle} style={{ left: `${pos}%` }} aria-hidden="true" />
        <span className={`${styles.baSliderLabel} ${styles.baSliderLabelBefore}`}>BEFORE</span>
        <span className={`${styles.baSliderLabel} ${styles.baSliderLabelAfter}`}>AFTER</span>
      </div>
      <label className={styles.baSliderControl}>
        <span className={styles.visuallyHidden}>Before / After の表示位置</span>
        <input
          type="range"
          min={5}
          max={95}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-valuemin={5}
          aria-valuemax={95}
          aria-valuenow={pos}
        />
      </label>
    </div>
  );
}
