export type BlogCategory =
  | "漏水"
  | "水漏れ"
  | "水道工事"
  | "配管"
  | "リフォーム"
  | "メンテナンス"
  | "補助金"
  | "豆知識";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  lead: string;
  sections: { heading: string; body: string }[];
  relatedServices: { label: string; href: string }[];
};

export const blogCategories: BlogCategory[] = [
  "漏水",
  "水漏れ",
  "水道工事",
  "配管",
  "リフォーム",
  "メンテナンス",
  "補助金",
  "豆知識",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-of-hidden-leak",
    title: "見えない漏水のサイン｜水道料金が増えたときに確認すること",
    description:
      "滋賀県で水道料金が増えたときに疑う漏水のサインと、漏水調査の考え方を解説します。",
    category: "漏水",
    date: "2026-06-01",
    lead:
      "水を使っていないのにメーターが回る、床下が湿る——こうした症状は、壁内や床下など見えにくい漏水のサインかもしれません。",
    sections: [
      {
        heading: "まず確認したいポイント",
        body: "すべての蛇口を閉めた状態でメーターを数分観察します。針やデジタル表示が動く場合は、どこかで水が流れている可能性があります。次に、床下点検口や外壁まわりの湿りも確認します。",
      },
      {
        heading: "早めの調査が修理範囲を抑える",
        body: "漏水を放置すると、建材の傷みやカビ、近隣への影響につながることもあります。水素式や音聴式の調査で箇所を特定できれば、むやみに壊す範囲を減らせます。",
      },
      {
        heading: "滋賀県・大津市でのご相談",
        body: "当社は大津市を拠点に、漏水調査から修理まで対応しています。症状がはっきりしない段階でもご相談ください。",
      },
    ],
    relatedServices: [
      { label: "漏水調査", href: "/leak-survey" },
      { label: "漏水修理", href: "/leak-repair" },
    ],
  },
  {
    slug: "hydrogen-leak-detection",
    title: "水素式漏水調査とは｜非破壊で漏水箇所を特定する方法",
    description:
      "水素式漏水調査の仕組みと向いている現場を解説。滋賀県の非破壊漏水調査について。",
    category: "漏水",
    date: "2026-06-10",
    lead:
      "配管を大きく壊さずに漏水箇所を探したい場合に用いられるのが、水素式（トレーサーガス）による漏水調査です。",
    sections: [
      {
        heading: "調査の仕組み",
        body: "配管内に安全な濃度の水素混合ガスを送り、漏れている箇所から漏れ出すガスを検知器で捉えます。屋内・屋外どちらでも、条件が合えば有効です。",
      },
      {
        heading: "音聴調査との使い分け",
        body: "漏水音がはっきりする場合は音聴が有効です。音が拾いにくい現場では水素式が役立ちます。実際は現場を見て組み合わせることも多いです。",
      },
    ],
    relatedServices: [
      { label: "漏水調査", href: "/leak-survey" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
  {
    slug: "drain-clog-causes",
    title: "排水詰まりの主な原因と、修理で確認すること",
    description:
      "キッチンや洗面の排水詰まりの原因と、排水工事で確認するポイントを紹介します。",
    category: "水道工事",
    date: "2026-06-20",
    lead:
      "排水の流れが悪いときは、油脂や髪の毛などの堆積だけでなく、配管勾配や劣化が関係していることもあります。",
    sections: [
      {
        heading: "家庭で起きやすい原因",
        body: "キッチンの油脂、洗面・浴室の髪の毛、トイレの異物などが代表例です。一時的に流れるようになっても、再発する場合は配管側の確認が必要です。",
      },
      {
        heading: "工事での対応",
        body: "高圧洗浄や部分補修、状況によっては排水管の更新を検討します。屋外マスまわりの状態もあわせて見ることがあります。",
      },
    ],
    relatedServices: [
      { label: "排水工事", href: "/drainage" },
      { label: "施工事例", href: "/works" },
    ],
  },
  {
    slug: "pipe-renewal-timing",
    title: "給水管交換の判断目安｜修理でよいか、更新がよいか",
    description:
      "給水管の部分修理と交換の考え方。滋賀県の配管工事で現場が判断するポイント。",
    category: "配管",
    date: "2026-07-01",
    lead:
      "同じ箇所で水漏れが繰り返す場合、部分修理だけでなく配管更新を検討した方がよいケースがあります。",
    sections: [
      {
        heading: "修理が適する例",
        body: "継手やパッキンなど、原因が局所的で周囲の管が健全な場合は、部分修理で十分なことが多いです。",
      },
      {
        heading: "交換を検討する例",
        body: "管全体の腐食が進んでいる、複数箇所で不具合が出ている、将来のメンテを見据えて更新したい場合などです。費用と寿命のバランスをご説明します。",
      },
    ],
    relatedServices: [
      { label: "給排水設備工事", href: "/plumbing" },
      { label: "漏水修理", href: "/leak-repair" },
    ],
  },
  {
    slug: "bathroom-reform-checklist",
    title: "水廻りリフォーム前に確認したい給排水のポイント",
    description:
      "トイレや洗面のリフォームで見落としがちな給排水接続と漏水リスクについて。",
    category: "リフォーム",
    date: "2026-07-12",
    lead:
      "水廻りリフォームは機器選びに目が行きがちですが、給排水の接続と既存管の状態確認が仕上がりを左右します。",
    sections: [
      {
        heading: "既存管の確認",
        body: "古い接続部や劣化管を残したまま機器だけ新しくすると、直後に漏水する例もあります。交換範囲は現地で確認するのが確実です。",
      },
      {
        heading: "使い勝手とメンテ",
        body: "止水栓の位置、点検しやすさ、将来の部品交換まで考えて配置します。",
      },
    ],
    relatedServices: [
      { label: "水廻りリフォーム", href: "/reform" },
      { label: "施工事例", href: "/works" },
    ],
  },
  {
    slug: "maintenance-tips",
    title: "水廻りの日常点検｜小さな異常を見逃さないために",
    description:
      "家庭でできる水廻り点検のポイント。滋賀県での水漏れ予防とメンテナンス。",
    category: "メンテナンス",
    date: "2026-07-25",
    lead:
      "大きなトラブルの前には、小さな兆候が出ていることがあります。月に一度の確認でも予防につながります。",
    sections: [
      {
        heading: "見る場所",
        body: "メーターボックス、床下点検口、水栓まわりの湿り、排水口の流れを定期的に見ておくと変化に気づきやすくなります。",
      },
      {
        heading: "異常を感じたら",
        body: "自己判断で分解しすぎると症状が悪化することがあります。写真や状況を控えて相談いただくと、現地調査がスムーズです。",
      },
    ],
    relatedServices: [
      { label: "漏水調査", href: "/leak-survey" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  {
    slug: "water-leak-first-aid",
    title: "水漏れが起きたときの応急対応｜止水と連絡の順番",
    description:
      "家庭で水漏れが起きたときの止水栓・元栓の確認と、業者へ伝えるべきポイント。滋賀県の水漏れ修理案内。",
    category: "水漏れ",
    date: "2026-07-28",
    lead:
      "水漏れに気づいたときは、まず被害を広げないための応急対応が大切です。そのうえで状況を整理して相談すると、対応が早くなります。",
    sections: [
      {
        heading: "まず止める",
        body: "該当箇所の止水栓、必要ならメーターボックスの元栓を閉めます。床に水が広がっている場合は、滑りや漏電にも注意して安全を優先してください。",
      },
      {
        heading: "伝えてほしい情報",
        body: "漏れている場所、いつから、メーターの動き、写真があれば共有いただけると現地対応がスムーズです。",
      },
    ],
    relatedServices: [
      { label: "漏水修理", href: "/leak-repair" },
      { label: "漏水調査", href: "/leak-survey" },
    ],
  },
  {
    slug: "subsidy-check-shiga",
    title: "水廻り工事と補助金・助成｜確認しておきたい考え方",
    description:
      "リフォームや設備更新で補助金・助成を検討するときの確認ポイント。滋賀県での相談時の注意点。",
    category: "補助金",
    date: "2026-07-30",
    lead:
      "水廻り設備の更新では、自治体や制度によって補助の対象になる場合があります。制度は時期で変わるため、申請前の確認が重要です。",
    sections: [
      {
        heading: "工事前に確認する",
        body: "対象条件、申請期限、指定事業者の要否、見積書の記載要件などを、工事着工前に確認します。後から申請できない制度もあるため注意が必要です。",
      },
      {
        heading: "当社でのご相談",
        body: "工事内容のご提案とあわせて、確認が必要な書類の整理をお手伝いします。最新の制度詳細は各自治体の案内もあわせてご確認ください。",
      },
    ],
    relatedServices: [
      { label: "水廻りリフォーム", href: "/reform" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  {
    slug: "plumbing-knowledge-meter",
    title: "水道メーターの見方｜漏水点検の第一歩",
    description:
      "水道メーターを使った水漏れ点検の基本。滋賀県での漏水調査前にできる確認方法。",
    category: "豆知識",
    date: "2026-08-01",
    lead:
      "漏水の可能性を自宅で確かめるとき、最初に確認しやすいのが水道メーターです。",
    sections: [
      {
        heading: "確認の手順",
        body: "水を使っていない状態でメーターを観察します。パイロット（星形など）が動く、またはデジタル表示が進む場合は、どこかで水が流れている可能性があります。",
      },
      {
        heading: "次のステップ",
        body: "動きがある場合は、屋内・屋外のどこで漏れているかを切り分ける調査が必要です。無理に掘削せず、まずはご相談ください。",
      },
    ],
    relatedServices: [
      { label: "漏水調査", href: "/leak-survey" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
