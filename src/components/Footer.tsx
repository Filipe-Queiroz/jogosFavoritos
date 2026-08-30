import { ShurikenIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <ShurikenIcon className="animate-flicker h-7 w-7 text-gold" />
        <p className="max-w-md font-display text-sm tracking-wide text-ash italic">
          “A floresta também é campo de batalha.”
        </p>
        <p className="font-pixel text-[7px] leading-relaxed text-mist uppercase">
          Cinzas · Shinobi III · Stage 1
        </p>
      </div>
    </footer>
  );
}
