export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "事業内容", href: "/business" },
  { label: "会社案内", href: "/company" },
  { label: "代表挨拶", href: "/greeting" },
  { label: "施工事例", href: "/works" },
];

export const desktopNavItems = navItems;
