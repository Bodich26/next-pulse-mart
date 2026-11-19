import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
    >
      <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
      <span>PulseMart</span>
    </Link>
  );
};
