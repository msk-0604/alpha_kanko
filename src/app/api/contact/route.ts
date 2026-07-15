import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  message?: string;
  privacy?: boolean;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "honsha@alpha-kanko.co.jp";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
const categoryLabelMap: Record<string, string> = {
  repair: "水漏れ・詰まり修理",
  equipment: "設備工事・更新",
  estimate: "見積もり依頼",
  recruit: "採用について",
  other: "その他",
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.category || !body.message || !body.privacy) {
    return NextResponse.json({ message: "必須項目を入力してください。" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(body.email)) {
    return NextResponse.json({ message: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }

  if (!resend) {
    return NextResponse.json(
      { message: "メール設定が未完了です。サーバー設定後にご利用ください。" },
      { status: 500 },
    );
  }

  const categoryLabel = categoryLabelMap[body.category] ?? body.category;
  const subject = `【アルファ管工】お問い合わせ: ${categoryLabel}`;
  const html = `
    <h2>お問い合わせを受信しました</h2>
    <p><strong>会社名:</strong> ${body.company || "未入力"}</p>
    <p><strong>ご担当者名:</strong> ${body.name}</p>
    <p><strong>メール:</strong> ${body.email}</p>
    <p><strong>電話番号:</strong> ${body.phone || "未入力"}</p>
    <p><strong>種別:</strong> ${categoryLabel}</p>
    <p><strong>内容:</strong><br/>${body.message.replace(/\n/g, "<br/>")}</p>
  `;

  const text = [
    "お問い合わせを受信しました",
    `会社名: ${body.company || "未入力"}`,
    `ご担当者名: ${body.name}`,
    `メール: ${body.email}`,
    `電話番号: ${body.phone || "未入力"}`,
    `種別: ${categoryLabel}`,
    "内容:",
    body.message,
  ].join("\n");

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: body.email,
      subject,
      html,
      text,
    });
  } catch {
    return NextResponse.json({ message: "メール送信に失敗しました。時間をおいて再度お試しください。" }, { status: 500 });
  }

  return NextResponse.json({
    message: "お問い合わせを受け付けました。",
  });
}
