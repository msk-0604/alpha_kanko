export type AreaCity = {
  slug: string;
  name: string;
  description: string;
  lead: string;
  services: string[];
  commonRequests: string[];
};

export const areaCities: AreaCity[] = [
  {
    slug: "otsu",
    name: "大津市",
    description:
      "大津市の漏水調査・水漏れ修理・給排水設備工事。本社所在地の株式会社アルファ管工が地域密着で対応します。",
    lead:
      "大津市坂本に本社を置き、指定給水・排水設備工事事業者として地域の水まわりを支えています。漏水調査から配管工事、水回りリフォームまでご相談ください。",
    services: ["漏水調査", "漏水修理", "排水工事", "給排水設備工事", "水回りリフォーム"],
    commonRequests: [
      "水道料金増加に伴う漏水調査",
      "屋外排水管の改修",
      "トイレ・給湯器まわりの修繕",
      "新築住宅の給排水配管",
    ],
  },
  {
    slug: "kusatsu",
    name: "草津市",
    description:
      "草津市の漏水調査・水漏れ修理・水道工事。滋賀県南部の給排水設備は株式会社アルファ管工へ。",
    lead:
      "草津市でも、漏水調査や水漏れ修理、給排水設備工事のご依頼をいただいています。現場の状況に合わせて調査・施工します。",
    services: ["漏水調査", "漏水修理", "排水工事", "給排水設備工事"],
    commonRequests: ["住宅の水漏れ点検", "排水詰まり", "水栓・配管の交換"],
  },
  {
    slug: "moriyama",
    name: "守山市",
    description: "守山市の漏水調査・配管工事・水漏れ修理。滋賀県の給排水設備工事はアルファ管工へ。",
    lead: "守山市の戸建・施設案件で、漏水調査や配管修繕、排水設備のご相談に対応します。",
    services: ["漏水調査", "漏水修理", "排水工事", "給排水設備工事"],
    commonRequests: ["メーター回りの漏水確認", "屋内給水管の修理"],
  },
  {
    slug: "ritto",
    name: "栗東市",
    description: "栗東市の水道工事・漏水修理・給排水設備工事。株式会社アルファ管工。",
    lead: "栗東市でも水漏れ修理や排水工事、設備更新のご相談を受け付けています。",
    services: ["漏水修理", "排水工事", "給排水設備工事", "水回りリフォーム"],
    commonRequests: ["蛇口・配管の水漏れ", "排水管の不具合"],
  },
  {
    slug: "yasu",
    name: "野洲市",
    description: "野洲市の漏水調査・水漏れ修理・配管工事。滋賀県の水道設備はアルファ管工へ。",
    lead: "野洲市での漏水調査・修理、給排水工事に対応します。まずは症状をご相談ください。",
    services: ["漏水調査", "漏水修理", "給排水設備工事"],
    commonRequests: ["水道料金の増加", "床下の湿り"],
  },
  {
    slug: "konan",
    name: "湖南市",
    description: "湖南市の水漏れ修理・排水工事・給排水設備工事。株式会社アルファ管工。",
    lead: "湖南市の住宅・施設における水まわり工事、漏水対応をご相談いただけます。",
    services: ["漏水修理", "排水工事", "給排水設備工事"],
    commonRequests: ["排水詰まり", "給水管の修繕"],
  },
  {
    slug: "koka",
    name: "甲賀市",
    description: "甲賀市の漏水調査・配管工事・水漏れ修理。滋賀県南部の水道工事はアルファ管工へ。",
    lead: "甲賀市でも、現地調査のうえ漏水調査や配管工事を行います。",
    services: ["漏水調査", "漏水修理", "給排水設備工事"],
    commonRequests: ["屋外漏水", "設備更新"],
  },
  {
    slug: "higashiomi",
    name: "東近江市",
    description: "東近江市の水道工事・漏水修理・給排水設備工事。株式会社アルファ管工。",
    lead: "東近江市での給排水設備工事・水漏れ対応もご相談ください。",
    services: ["漏水修理", "排水工事", "給排水設備工事"],
    commonRequests: ["水漏れ修理", "排水設備の改修"],
  },
  {
    slug: "hikone",
    name: "彦根市",
    description: "彦根市の漏水調査・水漏れ修理・配管工事。滋賀県の給排水工事はアルファ管工へ。",
    lead: "彦根市の案件でも、漏水調査から修理・設備工事まで対応します。",
    services: ["漏水調査", "漏水修理", "給排水設備工事"],
    commonRequests: ["漏水調査", "給水管交換"],
  },
  {
    slug: "nagahama",
    name: "長浜市",
    description: "長浜市の水道工事・漏水修理・給排水設備工事。株式会社アルファ管工。",
    lead: "長浜市での水まわり工事・漏水対応も、内容を伺いながらご案内します。",
    services: ["漏水修理", "排水工事", "給排水設備工事"],
    commonRequests: ["水漏れ点検", "排水工事"],
  },
  {
    slug: "omihachiman",
    name: "近江八幡市",
    description: "近江八幡市の漏水調査・配管工事・水漏れ修理。滋賀県の水道設備はアルファ管工へ。",
    lead: "近江八幡市でも、給排水設備工事や漏水調査のご依頼に対応します。",
    services: ["漏水調査", "漏水修理", "給排水設備工事"],
    commonRequests: ["漏水調査", "水回り修繕"],
  },
  {
    slug: "takashima",
    name: "高島市",
    description: "高島市の水漏れ修理・排水工事・給排水設備工事。株式会社アルファ管工。",
    lead: "高島市の現場も、距離や内容を踏まえて対応可否をご相談のうえ進めます。",
    services: ["漏水修理", "排水工事", "給排水設備工事"],
    commonRequests: ["屋外配管の不具合", "水栓まわりの修理"],
  },
  {
    slug: "maibara",
    name: "米原市",
    description: "米原市の漏水調査・水漏れ修理・配管工事。滋賀県の給排水工事はアルファ管工へ。",
    lead: "米原市での漏水・配管工事もご相談ください。状況に合わせて調査・施工します。",
    services: ["漏水調査", "漏水修理", "給排水設備工事"],
    commonRequests: ["漏水確認", "給排水の改修"],
  },
];

export function getAreaBySlug(slug: string) {
  return areaCities.find((city) => city.slug === slug);
}

export function getAllAreaSlugs() {
  return areaCities.map((city) => city.slug);
}
