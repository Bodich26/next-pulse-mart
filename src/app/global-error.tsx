"use client";
import React from "react";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function GlobalError({
  error,
  reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  React.useEffect(() => {
    console.error("Critical Global Error:", error);
  }, [error]);
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        roboto.variable,
      )}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex items-center justify-center p-4">
        <main className="w-full max-w-md rounded-3xl bg-card text-card-foreground p-8 sm:p-10 shadow-lg border border-border text-center space-y-6">
          {/* Иконка статуса */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive border border-destructive/20">
            <AlertCircle className="h-8 w-8" />
          </div>

          {/* Заголовок и описание */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold text-destructive uppercase tracking-wider">
              System Fault · 500 Error
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Critical Application Error
            </h1>
            <p className="text-xs text-muted-foreground leading-relaxed">
              An unexpected critical error occurred in the root layout. Our
              engineering telemetry has logged the event.
            </p>
            {error.digest && (
              <p className="pt-2 text-[10px] text-muted-foreground bg-muted py-1.5 px-3 rounded-xl">
                Digest: {error.digest}
              </p>
            )}
          </div>

          {/* Кнопки действий (используем стандартные варианты shadcn: default и secondary/outline) */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => reset()}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Attempt Recovery</span>
            </button>

            <Link
              href="/"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              <Home className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Return to Terminal Root</span>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
