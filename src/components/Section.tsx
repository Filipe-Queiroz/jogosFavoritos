import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type SectionProps = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  count: number;
  children: ReactNode;
};

export function Section({ id, index, kicker, title, count, children }: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      data-reveal={visible ? "in" : "out"}
      className="relative z-10 scroll-mt-16 px-5 py-12 md:scroll-mt-24 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="font-pixel text-[8px] leading-relaxed text-gold uppercase md:text-[9px]">
              {index} / {kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-wide break-words text-bone md:text-5xl">
              {title}
            </h2>
          </div>
          <p className="font-pixel shrink-0 text-[8px] text-ember md:text-[10px]">
            {String(count).padStart(2, "0")}
          </p>
        </div>
        <div className="sweep rule my-10" />
        {children}
      </div>
    </section>
  );
}
