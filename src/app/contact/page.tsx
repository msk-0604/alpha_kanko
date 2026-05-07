"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

type FormState = {
  company: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  privacy: boolean;
};

const initialState: FormState = {
  company: "",
  name: "",
  email: "",
  phone: "",
  category: "",
  message: "",
  privacy: false,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        setResult({ ok: false, message: data.message ?? "送信に失敗しました。時間をおいて再度お試しください。" });
        return;
      }

      setResult({ ok: true, message: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。" });
      setForm(initialState);
    } catch {
      setResult({ ok: false, message: "通信エラーが発生しました。お急ぎの場合はお電話でご連絡ください。" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.lead}>CONTACT</p>
          <h1>お問い合わせフォーム</h1>
          <p>
            水漏れ・詰まり・設備更新のご相談を受け付けています。
            お急ぎの場合は <a href="tel:0775793507">077-579-3507</a> までご連絡ください。
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={onSubmit}>
            <label>
              会社名（任意）
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                autoComplete="organization"
              />
            </label>

            <label>
              ご担当者名<span aria-hidden="true"> *</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                autoComplete="name"
              />
            </label>

            <label>
              メールアドレス<span aria-hidden="true"> *</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                autoComplete="email"
              />
            </label>

            <label>
              電話番号
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                autoComplete="tel"
              />
            </label>

            <label>
              お問い合わせ種別<span aria-hidden="true"> *</span>
              <select
                required
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
              >
                <option value="">選択してください</option>
                <option value="repair">水漏れ・詰まり修理</option>
                <option value="equipment">設備工事・更新</option>
                <option value="estimate">見積もり依頼</option>
                <option value="other">その他</option>
              </select>
            </label>

            <label>
              お問い合わせ内容<span aria-hidden="true"> *</span>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                rows={7}
                placeholder="症状・場所・ご希望日時などをご記入ください。"
              />
            </label>

            <label className={styles.privacy}>
              <input
                type="checkbox"
                required
                checked={form.privacy}
                onChange={(e) => setForm((prev) => ({ ...prev, privacy: e.target.checked }))}
              />
              個人情報の取扱いに同意する
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "送信する"}
            </button>

            {result ? (
              <p className={result.ok ? styles.okMessage : styles.errorMessage} role="status">
                {result.message}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
