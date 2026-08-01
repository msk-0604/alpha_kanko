"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  privacy: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
  privacy: false,
  website: "",
};

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const lastSubmitAt = useRef(0);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const now = Date.now();
    if (now - lastSubmitAt.current < 3000) {
      setResult({ ok: false, message: "連続送信を防止しています。少し待ってから再度お試しください。" });
      return;
    }
    lastSubmitAt.current = now;

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
        setResult({
          ok: false,
          message: data.message ?? "送信に失敗しました。お急ぎの場合はお電話ください。",
        });
        return;
      }

      router.push("/contact/thanks");
    } catch {
      setResult({
        ok: false,
        message: "通信エラーが発生しました。お急ぎの場合は 077-579-3507 までお電話ください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          ウェブサイト
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
          />
        </label>
      </div>

      <label>
        お名前<span aria-hidden="true"> *</span>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          autoComplete="name"
        />
      </label>

      <label>
        会社名
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
          autoComplete="organization"
        />
      </label>

      <label>
        電話番号<span aria-hidden="true"> *</span>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
          autoComplete="tel"
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
        お問い合わせ内容<span aria-hidden="true"> *</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          rows={7}
          placeholder="ご相談内容・ご希望日時などをご記入ください。"
        />
      </label>

      <label className={styles.privacy}>
        <input
          type="checkbox"
          required
          checked={form.privacy}
          onChange={(e) => setForm((prev) => ({ ...prev, privacy: e.target.checked }))}
        />
        <span>
          <Link href="/privacy">個人情報の取扱い</Link>
          に同意する
        </span>
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "送信しています..." : "お問い合わせを送信"}
      </button>

      {result ? (
        <p className={result.ok ? styles.okMessage : styles.errorMessage} role="status">
          {result.message}
        </p>
      ) : null}
    </form>
  );
}
