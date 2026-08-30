import { useState } from "react";
import { CloseIcon, MenuIcon, ShurikenIcon } from "./Icons";

const links = [
  { href: "#favoritos", label: "Favoritos" },
  { href: "#jogando", label: "Jogando" },
  { href: "#jogados", label: "Já joguei" },
  { href: "#online", label: "Online" },
  { href: "#top10", label: "Top 10" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#topo" className="flex items-center gap-2.5 text-gold">
          <ShurikenIcon className="animate-flicker h-6 w-6" />
          <span className="font-display text-xl font-semibold tracking-[0.28em]">
            CINZAS
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-pixel text-[8px] leading-none tracking-[0.16em] text-ash uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-gold lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-gold/15 bg-ink px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-pixel text-[10px] tracking-[0.16em] text-bone uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
