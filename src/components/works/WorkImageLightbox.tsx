"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { WorkImage } from "@/data/works";
import styles from "./works.module.css";

type WorkImageLightboxProps = {
  images: WorkImage[];
  className?: string;
  sizes?: string;
  quality?: number;
  variant?: "gallery" | "standard" | "ba";
};

export function WorkImageLightbox({
  images,
  className,
  sizes = "(max-width: 768px) 92vw, 840px",
  quality = 92,
  variant = "standard",
}: WorkImageLightboxProps) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const showPrev = useCallback(() => {
    setIndex((current) => {
      if (current === null) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);
  const showNext = useCallback(() => {
    setIndex((current) => {
      if (current === null) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, showPrev, showNext]);

  const wrapClass =
    variant === "gallery"
      ? styles.galleryImageWrap
      : variant === "ba"
        ? styles.baImageWrap
        : styles.photoStage;

  return (
    <>
      <ul className={className}>
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              className={styles.lightboxTrigger}
              onClick={() => setIndex(i)}
              aria-label={`${image.alt}を拡大表示`}
            >
              {variant === "ba" ? (
                <div className={wrapClass}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={sizes}
                    quality={quality}
                    className={styles.baImage}
                  />
                </div>
              ) : variant === "gallery" ? (
                <div className={wrapClass}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={sizes}
                    quality={quality}
                    className={styles.galleryImage}
                  />
                </div>
              ) : (
                <figure className={styles.photoFigure}>
                  <div className={wrapClass}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1024}
                      height={768}
                      sizes={sizes}
                      quality={quality}
                      className={styles.photoImage}
                    />
                  </div>
                </figure>
              )}
            </button>
          </li>
        ))}
      </ul>

      {index !== null ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="写真の拡大表示">
          <button type="button" className={styles.lightboxBackdrop} onClick={close} aria-label="閉じる" />
          <div className={styles.lightboxPanel}>
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={1600}
              height={1200}
              quality={95}
              className={styles.lightboxImage}
            />
            <p className={styles.lightboxCaption}>{images[index].alt}</p>
            <div className={styles.lightboxControls}>
              <button type="button" onClick={showPrev} aria-label="前の写真">
                前へ
              </button>
              <span>
                {index + 1} / {images.length}
              </span>
              <button type="button" onClick={showNext} aria-label="次の写真">
                次へ
              </button>
              <button type="button" onClick={close}>
                閉じる
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
