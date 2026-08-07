import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center gap-2 px-5 font-mono text-xs uppercase tracking-[0.14em]";

const variants = {
  solid:
    "border border-primary bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5",
  outline:
    "border border-border-strong text-foreground transition-colors hover:border-highlight hover:text-highlight",
} as const;

type Variant = keyof typeof variants;

export function CtaLink({
  variant = "outline",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant = "outline",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
