"use client";
import { headerNavigation } from "@/shared";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main Navigation" className="hidden md:block">
      <ul className="flex items-center gap-8 text-xs font-medium text-muted-foreground">
        {headerNavigation.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={index}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`hover:font-semibold hover:text-foreground transition-colors ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
