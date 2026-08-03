"use client";

import { useCallback, useId, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import type { WorkImage } from "@/data/works";
import styles from "./works.module.css";

type BeforeAfterSliderProps = {
  before: WorkImage;
  after: WorkImage;
};

export function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const [hintVisible, setHintVisible] = useState(true);
  const dragging = useRef(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  const updateFromClientX = useCallback((clientX: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    if (rect.width <= 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(95, Math.max(5, next)));
  }, []);

  const dismissHint = useCallback(() => {
    setHintVisible(false);
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    dismissHint();
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className={styles.baSlider}>
      <p className={styles.baSliderGuide} id={labelId}>
        左右に動かして施工前後を比較できます
      </p>
      <div
        ref={stageRef}
        className={styles.baSliderStage}
        role="img"
        aria-labelledby={labelId}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 768px) 92vw, 840px"
          quality={92}
          className={styles.baSliderImage}
          draggable={false}
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
              draggable={false}
            />
          </div>
        </div>
        <div className={styles.baSliderHandle} style={{ left: `${pos}%` }} aria-hidden="true">
          <span className={styles.baSliderKnob}>
            <span className={styles.baSliderKnobArrow}>‹</span>
            <span className={styles.baSliderKnobArrow}>›</span>
          </span>
        </div>
        <span className={`${styles.baSliderLabel} ${styles.baSliderLabelBefore}`}>BEFORE</span>
        <span className={`${styles.baSliderLabel} ${styles.baSliderLabelAfter}`}>AFTER</span>
        {hintVisible ? (
          <div className={styles.baSliderHint} aria-hidden="true">
            <span className={styles.baSliderHintIcon}>↔</span>
            <span>ドラッグして比較</span>
          </div>
        ) : null}
      </div>
      <label className={styles.baSliderControl}>
        <span className={styles.baSliderControlLabel}>スライダーを左右に動かす</span>
        <input
          type="range"
          min={5}
          max={95}
          value={pos}
          onChange={(e) => {
            dismissHint();
            setPos(Number(e.target.value));
          }}
          aria-valuemin={5}
          aria-valuemax={95}
          aria-valuenow={Math.round(pos)}
          aria-describedby={labelId}
        />
      </label>
    </div>
  );
}
