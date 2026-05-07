export type NavItem = { label: string; href: string };
export type BusinessItem = { title: string; description: string; icon: string };
export type NewsItem = { id: string; date: string; category: string; title: string };
export type CaseStudy = {
  id: string;
  title: string;
  area: string;
  category: string;
  duration: string;
  cost: string;
  summary: string;
  challenge: string;
  solution: string;
  before: string;
  after: string;
  images: string[];
};

export const navItems: NavItem[] = [
  { label: "トップ", href: "#top" },
  { label: "お知らせ", href: "#news" },
  { label: "事業内容", href: "#business" },
  { label: "選ばれる理由", href: "#strengths" },
  { label: "施工事例", href: "#case-studies" },
  { label: "会社情報", href: "#company-info" },
  { label: "アクセス", href: "#access" },
];

export const businessItems: BusinessItem[] = [
  {
    title: "給排水衛生設備工事",
    description: "施設用途に合わせた設計・施工で、安定した給排水環境を構築します。",
    icon: "🚰",
  },
  {
    title: "配管工事",
    description: "新設・更新・改修まで一貫対応。稼働影響を抑えた施工計画をご提案します。",
    icon: "🔧",
  },
  {
    title: "水道施設工事",
    description: "公共性の高い案件にも対応し、法令順守と安全管理を徹底します。",
    icon: "🏗",
  },
  {
    title: "修繕・メンテナンス",
    description: "漏水・詰まり・設備不良に対し、原因調査から再発防止まで対応します。",
    icon: "🛠",
  },
  {
    title: "法人・施設管理対応",
    description: "工程共有・報告書提出など、管理業務に合わせた運用を支援します。",
    icon: "🏢",
  },
  {
    title: "官公庁・公共施設対応",
    description: "提出物や工程管理を含め、公共工事に求められる品質で施工します。",
    icon: "📋",
  },
];

// 既存セクション互換のため残す
export const strengthItems = [
  "地域密着の対応力",
  "確かな施工品質",
  "法人・公共工事対応",
  "安全管理の徹底",
  "長年の実績",
];

// 既存セクション互換のため残す
export const workCategories = [
  "公共施設",
  "商業施設",
  "マンション",
  "工場",
  "戸建住宅",
  "店舗",
];

// 既存セクション互換のため残す
export const qualityItems = ["現場管理", "工程管理", "安全教育", "法令遵守"];

export const companyHighlights = [
  "創業 平成3年、地域密着で継続対応",
  "代表 山口 豊樹による現場品質重視の運営",
  "大津市指定給水・排水設備事業者として認定",
  "一般住宅から法人・公共案件まで一貫対応",
];

export const strengths = [
  "地域密着",
  "官公庁対応",
  "法人対応",
  "修繕対応",
  "迅速対応",
  "丁寧施工",
  "有資格者対応",
  "アフターサポート",
];

export const disclosureItems = [
  "大津市指定給水装置工事事業者（第192号）",
  "大津市指定排水設備工事事業者（第192号）",
  "工事の安全管理・品質管理体制を明文化",
  "法令順守と施工記録を徹底",
];

export const csrItems = [
  { date: "2026.04.22", title: "地域防災訓練への設備協力を実施しました" },
  { date: "2026.03.08", title: "地元清掃活動と排水経路点検を実施しました" },
  { date: "2025.12.19", title: "学校設備の水回り保全活動に参加しました" },
];

export const supportItems = [
  { date: "2026.02.14", title: "若手技術者向け社内研修制度を拡充しました" },
  { date: "2025.11.01", title: "資格取得支援プログラムを刷新しました" },
  { date: "2025.07.10", title: "次世代育成に向けた現場見学会を実施しました" },
];

export const newsItems: NewsItem[] = [
  { id: "n1", date: "2026.05.01", category: "お知らせ", title: "ホームページを公開しました" },
  { id: "n2", date: "2026.04.20", category: "重要", title: "設備更新・修繕のご相談を受け付けています" },
  { id: "n3", date: "2026.04.10", category: "法人向け", title: "施設管理者様向けの定期点検提案を開始しました" },
];

export const areaList = [
  "滋賀県全域",
  "京都府南部",
  "大阪府北部",
  "関西近隣エリア（要相談）",
];

export const trustFacts = [
  { label: "創業", value: "平成3年" },
  { label: "指定給水装置工事事業者", value: "大津市 第192号" },
  { label: "指定排水設備工事事業者", value: "大津市 第192号" },
  { label: "主対応", value: "法人・公共・一般住宅" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "c1",
    title: "大津市｜トイレ交換工事",
    area: "滋賀県大津市",
    category: "トイレ設備更新",
    duration: "約3時間",
    cost: "¥80,000〜",
    summary:
      "老朽化した便器と止水栓を更新。施工後の水量調整まで実施し、漏水リスクを低減しました。",
    challenge: "老朽化による水漏れと衛生面の不安",
    solution: "設備交換と接続部再施工で安全運用を確保",
    before: "老朽化した既存設備で漏水リスクが高い状態",
    after: "衛生性とメンテナンス性を改善し、安定運用を実現",
    images: ["/images/works/work-1.svg"],
  },
  {
    id: "c2",
    title: "草津市｜給湯配管修繕",
    area: "滋賀県草津市",
    category: "給湯配管修繕",
    duration: "約4時間",
    cost: "¥65,000〜",
    summary:
      "配管接続部からの漏水を現地調査で特定。配管交換と保温処理を行い安定運用を実現しました。",
    challenge: "配管接続部の漏水再発",
    solution: "劣化部材交換と配管ルート見直しを実施",
    before: "給湯配管接続部で漏水が再発",
    after: "配管更新と保温処理で再発リスクを低減",
    images: ["/images/works/work-2.svg"],
  },
  {
    id: "c3",
    title: "京都市山科区｜排水管高圧洗浄",
    area: "京都府京都市",
    category: "排水詰まり改善",
    duration: "約2時間",
    cost: "¥35,000〜",
    summary:
      "定期メンテナンスとして排水管を高圧洗浄。異臭・流れ不良を改善し、再発防止をご提案しました。",
    challenge: "流れ不良・異臭の発生",
    solution: "高圧洗浄と点検で原因除去、維持管理提案",
    before: "排水不良と異臭で利用者満足度が低下",
    after: "流れ改善と定期点検提案により安定稼働を確保",
    images: ["/images/works/work-3.svg"],
  },
];

export const customerVoices = [
  {
    title: "説明が分かりやすく安心できた",
    name: "お客様（滋賀県・匿名）",
    comment:
      "原因と対策を丁寧に説明してくれて、納得した上で依頼できました。作業後の確認もきちんとしてくれて安心でした。",
  },
  {
    title: "時間どおりに来て、作業が丁寧",
    name: "お客様（大津市・匿名）",
    comment:
      "約束の時間に来てくれて、作業も静かで丁寧。周りの片付けまできれいにしてくれました。",
  },
  {
    title: "法人案件でも連絡がスムーズ",
    name: "施設管理者（匿名）",
    comment:
      "報告連絡がスムーズで、見積もりや工程の共有も分かりやすい。安心して継続依頼できます。",
  },
];

export const greeting = {
  name: "山口 豊樹",
  title: "代表取締役",
  message:
    "私たちは、地域の暮らしを支える水まわり設備を守ることを使命としています。小さな修繕から設備更新まで、安心して相談できる会社であることを大切に、丁寧で誠実な施工を徹底してまいります。",
  image: "/images/people/ceo.svg",
};

export const instagramUrl = "https://www.instagram.com/";

export const companyProfile = [
  { label: "会社名", value: "株式会社アルファ管工" },
  { label: "所在地", value: "滋賀県大津市坂本6丁目8-8" },
  { label: "TEL", value: "077-579-3507" },
  { label: "E-mail", value: "honsha@alpha-kanko.co.jp" },
  { label: "事業内容", value: "配管工事、水道設備工事、給排水設備工事、修繕対応" },
  { label: "対応エリア", value: "滋賀県全域、京都府南部、大阪府北部、関西近郊エリア（要相談）" },
];
