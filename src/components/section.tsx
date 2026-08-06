import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-border py-16 sm:py-20"
    >
      <div className="mb-10 grid gap-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8">
        <p className="meta pt-1">{index} / {title}</p>
        <div className="max-w-2xl">
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {title}
          </h2>
          {lead && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{lead}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
