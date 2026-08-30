import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({ id, kicker, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-pixel text-[8px] leading-relaxed text-gold uppercase md:text-[9px]">
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-bone md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ash md:text-base">
          {description}
        </p>
        <div className="rule my-10" />
        {children}
      </div>
    </section>
  );
}
