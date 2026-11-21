import { Container, Logo } from "@/shared";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { HeaderNav } from "./header-nav";
import { Suspense } from "react";
import { HeaderNavSkeleton } from "./header-nav-skeleton";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between">
        <Logo />
        <Suspense fallback={<HeaderNavSkeleton />}>
          <HeaderNav />
        </Suspense>

        {/* Утилиты пользователя */}
        <div className="flex items-center gap-3 text-xs">
          <button
            type="button"
            aria-label="Open command search"
            className="hidden sm:flex items-center gap-2 rounded-full bg-muted px-3.5 py-1.5 text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="rounded bg-card px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground shadow-2xs border border-border">
              ⌘K
            </kbd>
          </button>

          <Link
            href="/checkout"
            aria-label="Shopping bag with 4 items"
            className="relative flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 font-medium text-foreground hover:bg-muted/80 transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>4</span>
          </Link>

          <Link
            href="/auth"
            aria-label="User profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
          >
            <User className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </header>
  );
};
