export type WorkCategory =
  | "新築給排水設備工事"
  | "給水・給湯配管工事"
  | "排水設備工事"
  | "水回りリフォーム"
  | "給湯器交換工事";

export type WorkLayout = "standard" | "beforeAfter" | "gallery";

export type WorkImage = {
  src: string;
  alt: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  category: WorkCategory;
  description: string;
  /** Card / listing thumbnail */
  coverImage: WorkImage;
  layout: WorkLayout;
  images?: WorkImage[];
  beforeImage?: WorkImage;
  afterImage?: WorkImage;
};

export const works: WorkItem[] = [
  {
    slug: "new-house-plumbing",
    title: "新築住宅 給排水設備配管工事",
    category: "新築給排水設備工事",
    description:
      "新築住宅の基礎施工段階から給水・給湯・排水設備の配管工事を実施。建物の設備計画に合わせて各配管ルートを施工しました。",
    coverImage: {
      src: "/images/works/new-house-plumbing-01.jpg",
      alt: "新築住宅基礎上の給排水配管施工",
    },
    layout: "standard",
    images: [
      {
        src: "/images/works/new-house-plumbing-01.jpg",
        alt: "基礎上に排水管と給水・給湯管を多数施工した様子",
      },
      {
        src: "/images/works/new-house-plumbing-02.jpg",
        alt: "基礎内の排水管と給水・給湯管の配管ルート",
      },
    ],
  },
  {
    slug: "water-piping",
    title: "住宅 給水・給湯配管施工",
    category: "給水・給湯配管工事",
    description:
      "住宅内部の給水・給湯配管を施工。各設備への配管ルートを整理し、建物構造に合わせて配管工事を行いました。",
    coverImage: {
      src: "/images/works/water-piping-01.jpg",
      alt: "木造住宅天井部の給水・給湯配管施工",
    },
    layout: "standard",
    images: [
      {
        src: "/images/works/water-piping-01.jpg",
        alt: "木造住宅内部天井に青・赤の給水給湯管を施工した様子",
      },
      {
        src: "/images/works/water-piping-02.jpg",
        alt: "ヘッダー周りに整理された給水・給湯配管",
      },
    ],
  },
  {
    slug: "drain-renovation",
    title: "屋外排水管 改修工事",
    category: "排水設備工事",
    description:
      "既設排水管の劣化状況を確認し、排水配管の更新工事を実施。配管ルートと接続部を調整し、排水設備を改修しました。",
    coverImage: {
      src: "/images/works/drain-after.jpg",
      alt: "屋外排水管改修後の新しいグレー配管",
    },
    layout: "beforeAfter",
    beforeImage: {
      src: "/images/works/drain-before.jpg",
      alt: "劣化・変色が見られる既設の屋外排水管",
    },
    afterImage: {
      src: "/images/works/drain-after.jpg",
      alt: "更新後のグレー排水管",
    },
  },
  {
    slug: "water-heater-replacement",
    title: "給湯器交換工事",
    category: "給湯器交換工事",
    description:
      "既設給湯設備を撤去し、新しい給湯器へ交換。既存配管との接続調整を行い、安全確認後に設備を引き渡しました。",
    coverImage: {
      src: "/images/works/water-heater-after.jpg",
      alt: "交換後のリンナイ給湯器",
    },
    layout: "beforeAfter",
    beforeImage: {
      src: "/images/works/water-heater-before.jpg",
      alt: "既設のTOTO給湯器",
    },
    afterImage: {
      src: "/images/works/water-heater-after.jpg",
      alt: "新設のリンナイ給湯器",
    },
  },
  {
    slug: "toilet-renewal",
    title: "トイレ設備更新工事",
    category: "水回りリフォーム",
    description:
      "既設トイレ設備を撤去し、新しい洋式トイレへ更新。給排水接続を調整し、設備更新工事を行いました。",
    coverImage: {
      src: "/images/works/toilet-work-03.jpg",
      alt: "新設洋式トイレの施工写真",
    },
    layout: "gallery",
    images: [
      {
        src: "/images/works/toilet-work-01.jpg",
        alt: "既存トイレ設備の施工写真",
      },
      {
        src: "/images/works/toilet-work-02.jpg",
        alt: "和式トイレ設備の施工写真",
      },
      {
        src: "/images/works/toilet-work-03.jpg",
        alt: "新設洋式トイレの施工写真",
      },
      {
        src: "/images/works/toilet-work-04.jpg",
        alt: "トイレ・洗面まわりの設備更新施工写真",
      },
    ],
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return works.find((work) => work.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return works.map((work) => work.slug);
}
