export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "トップ", href: "/" },
  { label: "事業内容", href: "/business" },
  { label: "会社案内", href: "/company" },
  { label: "代表挨拶", href: "/greeting" },
  { label: "施工事例", href: "/works" },
  { label: "選ばれる理由", href: "/strength" },
  { label: "対応エリア", href: "/area" },
  { label: "お知らせ", href: "/news" },
  { label: "よくある質問", href: "/faq" },
  { label: "採用情報", href: "/recruit" },
  { label: "お問い合わせ", href: "/contact" },
];

export const desktopNavItems = navItems.filter((item) =>
  ["/business", "/company", "/works", "/news", "/recruit"].includes(item.href),
);
