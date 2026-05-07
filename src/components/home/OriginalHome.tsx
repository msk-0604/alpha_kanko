"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./original-home.module.css";

const workItems = [
  "トイレのトラブル",
  "お風呂のトラブル",
  "キッチンのトラブル",
  "洗面所のトラブル",
  "排水管・排水溝のトラブル",
  "給湯器のトラブル",
  "屋外・水栓柱のトラブル",
];

const serviceItems = [
  "水道衛生工事、給排水設備工事、水まわりの緊急メンテナンス、リフォーム事業",
  "トイレ・台所の詰まり修理、水漏れ修理、交換作業、リフォーム工事",
  "排水管・排水溝の詰まり修理、排水マスの交換工事",
  "蛇口の水漏れ修理、蛇口交換作業、キッチンリフォーム工事",
  "排水管の洗浄作業、漏水調査、給水管・給湯管の修理交換工事",
  "給水ポンプ交換工事、ガス給湯器・電気ボイラー修理交換工事",
];

export function OriginalHome() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-anim="hero"]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
      );

      gsap.fromTo(
        '[data-anim="card"]',
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: "#works", start: "top 80%" },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <p className={styles.topLine}>創業30余年 大津市の水まわり工事なら</p>
          <div className={styles.headRow}>
            <h1>株式会社アルファ管工</h1>
            <a href="tel:0775793507" className={styles.tel}>
              077-579-3507
            </a>
          </div>
          <nav className={styles.nav}>
            <a href="#top">トップ</a>
            <a href="#works">主な工事内容</a>
            <a href="#service">サービス内容</a>
            <a href="#company">会社概要</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero} id="top" data-anim="hero">
          <div className={styles.wrap}>
            <p className={styles.catch}>大津市の水まわり工事なら</p>
            <h2>株式会社アルファ管工へお任せください。</h2>
            <p>
              私たちは水まわりのホームドクターとして、お客様にベストなご提案をいたします。
            </p>
          </div>
        </section>

        <section className={styles.section} id="works">
          <div className={styles.wrap}>
            <h3>主な工事内容</h3>
            <div className={styles.grid}>
              {workItems.map((item) => (
                <article key={item} className={styles.card} data-anim="card">
                  <h4>{item}</h4>
                  <p>水漏れ・詰まり・異臭・交換工事まで、現地状況を確認して最適な方法で対応します。</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.alt}`} id="service">
          <div className={styles.wrap}>
            <h3>サービス内容</h3>
            <p className={styles.lead}>水まわり全般のトラブルに対応致します。</p>
            <ul className={styles.list}>
              {serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.flow}>
              <div>
                <strong>1</strong>
                <span>お電話にてご依頼</span>
              </div>
              <div>
                <strong>2</strong>
                <span>作業</span>
              </div>
              <div>
                <strong>3</strong>
                <span>決済・作業終了</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="company">
          <div className={styles.wrap}>
            <h3>会社概要</h3>
            <dl className={styles.profile}>
              <dt>会社名</dt>
              <dd>株式会社アルファ管工</dd>
              <dt>代表者</dt>
              <dd>山口 豊樹</dd>
              <dt>所在地</dt>
              <dd>滋賀県大津市坂本6丁目8-8</dd>
              <dt>電話</dt>
              <dd>077-579-3507</dd>
              <dt>E-mail</dt>
              <dd>honsha@alpha-kanko.co.jp</dd>
              <dt>創業</dt>
              <dd>平成3年</dd>
              <dt>事業内容</dt>
              <dd>一般住宅の水道、排水等の配管工事及び水まわりのリフォーム工事（給排水設備工事）</dd>
              <dt>水道局指定番号</dt>
              <dd>大津市指定給水装置工事事業者（第192号） / 大津市指定排水設備工事事業者（第192号）</dd>
            </dl>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.wrap}>
            <h3>お問い合わせはメール・電話で</h3>
            <a href="tel:0775793507">077-579-3507</a>
          </div>
        </section>
      </main>
    </div>
  );
}
