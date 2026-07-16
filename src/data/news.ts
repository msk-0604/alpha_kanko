export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  body: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    date: "2026.05.01",
    category: "お知らせ",
    title: "ホームページを公開しました",
    body: [
      "このたび、株式会社アルファ管工のホームページを公開いたしました。",
      "事業内容・施工事例・会社案内・採用情報などを掲載しております。給排水設備工事に関するご相談は、お問い合わせフォームまたはお電話よりご連絡ください。",
    ],
  },
  {
    id: "n2",
    date: "2026.04.20",
    category: "重要",
    title: "設備更新・修繕のご相談を受け付けています",
    body: [
      "給排水設備の更新・修繕に関するご相談を受け付けております。",
      "水漏れ・詰まりなどのトラブルから、給湯器交換・水まわりの設備更新まで、現場の状況に合わせて対応いたします。まずはお気軽にお問い合わせください。",
    ],
  },
  {
    id: "n3",
    date: "2026.04.10",
    category: "法人向け",
    title: "施設管理者様向けの定期点検提案を開始しました",
    body: [
      "法人施設・事業所の管理者様向けに、給排水設備の定期点検・メンテナンスのご提案を行っております。",
      "設備の不具合を未然に防ぐための点検計画や、更新時期のご相談も承ります。詳細はお問い合わせよりご連絡ください。",
    ],
  },
];

export function getNewsById(id: string): NewsItem | undefined {
  return newsItems.find((item) => item.id === id);
}

export function getAllNewsIds(): string[] {
  return newsItems.map((item) => item.id);
}
