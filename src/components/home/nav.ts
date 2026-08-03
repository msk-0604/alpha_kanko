export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "トップ", href: "/" },
  { label: "漏水調査", href: "/leak-survey" },
  { label: "漏水修理", href: "/leak-repair" },
  { label: "排水工事", href: "/drainage" },
  { label: "給排水設備工事", href: "/plumbing" },
  { label: "リフォーム", href: "/reform" },
  { label: "施工事例", href: "/works" },
  { label: "対応エリア", href: "/area" },
  { label: "ブログ", href: "/blog" },
  { label: "よくある質問", href: "/faq" },
  { label: "会社案内", href: "/company" },
  { label: "お客様の声", href: "/voices" },
  { label: "お問い合わせ", href: "/contact" },
];

export const desktopNavItems = navItems.filter((item) =>
  ["/leak-survey", "/plumbing", "/works", "/area", "/company"].includes(item.href),
);
