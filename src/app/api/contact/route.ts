import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください。").max(100),
  company: z.string().trim().max(100).optional().default(""),
  phone: z.string().trim().min(1, "電話番号を入力してください。").max(30),
  email: z
    .string()
    .trim()
    .min(1, "メールアドレスを入力してください。")
    .email("メールアドレスの形式が正しくありません。")
    .max(200),
  message: z.string().trim().min(1, "お問い合わせ内容を入力してください。").max(5000),
  privacy: z.literal(true, {
    error: "個人情報の取扱いに同意してください。",
  }),
  website: z.string().optional().default(""),
});

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "yamamasaki0604@gmail.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

/** 簡易連打防止（同一IPで60秒に3回まで） */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitMap.get(ip);
  if (!current || current.resetAt <= now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (current.count >= RATE_LIMIT_MAX) return true;
  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "送信が集中しています。しばらくしてから再度お試しください。" },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "リクエストが不正です。" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "入力内容をご確認ください。";
    return NextResponse.json({ message }, { status: 400 });
  }

  const data = parsed.data;

  // Honey pot: bots fill hidden fields
  if (data.website) {
    return NextResponse.json({ message: "お問い合わせありがとうございました。" });
  }

  if (!resend) {
    return NextResponse.json(
      { message: "メール設定が未完了です。サーバー設定後にご利用ください。" },
      { status: 500 },
    );
  }

  const subject = "【ホームページ】お問い合わせ";
  const text = [
    "----------------------------",
    "",
    "ホームページからお問い合わせがありました。",
    "",
    `お名前：${data.name}`,
    `会社名：${data.company || "未入力"}`,
    `電話番号：${data.phone}`,
    `メールアドレス：${data.email}`,
    "",
    "お問い合わせ内容：",
    data.message,
    "",
    "----------------------------",
  ].join("\n");

  const html = `
    <pre style="font-family:inherit;white-space:pre-wrap;line-height:1.7;">${escapeHtml(text)}</pre>
  `;

  try {
    const result = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      const detail =
        typeof result.error === "object" && result.error && "message" in result.error
          ? String((result.error as { message?: string }).message ?? "")
          : "";
      const isTestRecipientRestriction =
        /only send testing emails to your own email/i.test(detail) ||
        /can only send to/i.test(detail);

      return NextResponse.json(
        {
          message: isTestRecipientRestriction
            ? "メール送信に失敗しました。Resendのテスト送信では、Resendアカウントに登録したメールアドレス宛のみ送信できます。VercelのCONTACT_TO_EMAILを登録メールに合わせてください。"
            : "メール送信に失敗しました。時間をおいて再度お試しください。",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Contact send failed:", error);
    return NextResponse.json(
      { message: "メール送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: "お問い合わせありがとうございました。担当者よりご連絡いたします。",
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
