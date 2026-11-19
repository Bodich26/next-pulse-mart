import { Container } from "@/shared";
import Link from "next/link";
import { FooterNav } from "./footer-nav";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-12">
          <FooterNav />

          {/* Форма рассылки */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-4">
            <h3 className="text-xs font-semibold text-foreground">
              Join the Network
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Receive notifications before limited custom shop drops go live.
            </p>
            <form className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="name@example.com"
                className="w-full rounded-full border border-input bg-background px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Нижний копирайт */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>Copyright &copy; 2026 PulseMart Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
