export const headerNavigation = [
  {
    label: "Catalog",
    href: "/catalog",
  },
  {
    label: "Drop",
    href: "/drop",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Profile",
    href: "/profile",
  },
] as const;

export const footerNavigation = [
  {
    title: "Catalog",
    items: [
      { label: "Guitars", href: "/catalog?cat=guitars" },
      { label: "Audio", href: "/catalog?cat=audio" },
      { label: "Mods", href: "/catalog?cat=mods" },
      { label: "Merch", href: "/catalog?cat=merch" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "FAQ", href: "/faq" },
      { label: "Returns", href: "/returns" },
      { label: "Terminal Docs", href: "/terminal-docs" },
      { label: "Shipping", href: "/shipping" },
    ],
  },
  {
    title: "Security",
    items: [
      { label: "Trust & Safety", href: "/trust-safety" },
      { label: "Secure Bidding", href: "/secure-bidding" },
      { label: "System Status", href: "/system-status" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Discussions", href: "/discussions" },
      { label: "Heavy Log", href: "/heavy-log" },
      { label: "Feedback", href: "/feedback" },
    ],
  },
] as const;
