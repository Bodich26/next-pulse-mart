import { footerNavigation } from "@/shared";
import Link from "next/link";

export const FooterNav = () => {
  return (
    <nav
      aria-label="Catalog Links"
      className="col-span-2 sm:col-span-4 lg:col-span-8"
    >
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {footerNavigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-foreground">
              {section.title}
            </h3>

            <ul className="mt-3 space-y-2.5 text-xs text-muted-foreground">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};
