export type VoiceItem = {
  id: string;
  title: string;
  name: string;
  area: string;
  work: string;
  rating: number;
  comment: string;
  serviceHref: string;
  image: { src: string; alt: string };
};

export const voiceItems: VoiceItem[] = [
  {
    id: "v1",
    title: "説明が分かりやすく安心できた",
    name: "お客様",
    area: "滋賀県（匿名）",
    work: "水漏れ修理",
    rating: 5,
    comment:
      "原因と対策を丁寧に説明してくれて、納得した上で依頼できました。作業後の確認もきちんとしてくれて安心でした。",
    serviceHref: "/leak-repair",
    image: {
      src: "/images/works/water-piping-02.webp",
      alt: "給水・給湯配管工事の施工イメージ",
    },
  },
  {
    id: "v2",
    title: "時間どおりで作業が丁寧",
    name: "お客様",
    area: "大津市（匿名）",
    work: "排水管改修",
    rating: 5,
    comment:
      "約束の時間に来てくれて、作業も静かで丁寧。周りの片付けまできれいにしてくれました。",
    serviceHref: "/drainage",
    image: {
      src: "/images/works/drain-after.webp",
      alt: "排水管改修後の施工イメージ",
    },
  },
  {
    id: "v3",
    title: "法人案件でも連絡がスムーズ",
    name: "施設管理者",
    area: "滋賀県（匿名）",
    work: "給排水設備工事",
    rating: 5,
    comment:
      "報告連絡がスムーズで、見積もりや工程の共有も分かりやすい。安心して継続依頼できます。",
    serviceHref: "/plumbing",
    image: {
      src: "/images/works/new-house-plumbing-01.webp",
      alt: "給排水設備工事の施工イメージ",
    },
  },
  {
    id: "v4",
    title: "漏水調査で原因がはっきりした",
    name: "お客様",
    area: "草津市（匿名）",
    work: "漏水調査",
    rating: 5,
    comment:
      "水道料金が増えて不安でしたが、調査で箇所が分かり、必要最小限の修理で済みました。",
    serviceHref: "/leak-survey",
    image: {
      src: "/images/business/leak-survey.webp",
      alt: "漏水調査の現場イメージ",
    },
  },
];

export function getVoiceById(id: string) {
  return voiceItems.find((item) => item.id === id);
}

export function getAllVoiceIds() {
  return voiceItems.map((item) => item.id);
}
