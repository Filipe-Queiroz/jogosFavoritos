import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { CloseIcon, MenuIcon, ShurikenIcon } from "./Icons";

const links = [
  { href: "#online", id: "online", label: "Online" },
  { href: "#jogando", id: "jogando", label: "Jogando" },
  { href: "#favoritos", id: "favoritos", label: "Favoritos" },
  { href: "#jogados", id: "jogados", label: "Já joguei" },
  { href: "#top10", id: "top10", label: "Top 10" },
] as const;

const ids = links.map((link) => link.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#topo" className="flex items-center gap-2.5 text-gold">
          <ShurikenIcon className="animate-flicker h-6 w-6" />
          <span className="font-display text-lg font-semibold tracking-[0.24em]">
            MEMORIAL
          </span>
          <span className="font-brush hidden text-lg text-ember sm:inline">記録</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
              className={`relative font-pixel text-[8px] leading-none tracking-[0.16em] uppercase transition-colors hover:text-gold ${
                active === link.id ? "text-gold" : "text-ash"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-ember shadow-[0_0_8px_rgb(255_45_138/0.9)] transition-all duration-300 ${
                  active === link.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
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
                  className={`font-pixel text-[10px] tracking-[0.16em] uppercase ${
                    active === link.id ? "text-gold" : "text-bone"
                  }`}
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
