import { useEffect, useState, type CSSProperties } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { ShurikenIcon } from "./Icons";

const links = [
  { href: "#online", id: "online", label: "Online", index: "01" },
  { href: "#jogando", id: "jogando", label: "Jogando", index: "02" },
  { href: "#favoritos", id: "favoritos", label: "Favoritos", index: "03" },
  { href: "#jogados", id: "jogados", label: "Jogados", index: "04" },
  { href: "#top10", id: "top10", label: "Top 10", index: "05" },
] as const;

const ids = links.map((link) => link.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    const timer = window.setTimeout(() => {
      document.body.style.overflow = "";
    }, 280);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold/25 bg-ink">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5 md:px-8">
          <a
            href="#topo"
            className="flex min-w-0 items-center gap-2 text-gold"
            onClick={() => setOpen(false)}
          >
            <ShurikenIcon className="h-6 w-6 shrink-0" />
            <span className="font-display truncate text-base font-semibold tracking-[0.12em] md:text-lg md:tracking-[0.24em]">
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
                  className={`absolute -bottom-2 left-0 h-px bg-ember transition-all duration-300 ${
                    active === link.id ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="burger shrink-0 lg:hidden"
            data-open={open}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="mobile-menu lg:hidden" data-open={open} aria-hidden={!open}>
        <nav className="flex h-full flex-col justify-center px-5">
          <ul className="flex flex-col">
            {links.map((link, i) => (
              <li key={link.href} style={{ "--i": i } as CSSProperties}>
                <a
                  href={link.href}
                  className={`mobile-link ${active === link.id ? "is-active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="font-pixel text-[8px] text-gold">{link.index}</span>
                  <span className="font-display text-3xl font-bold tracking-[0.1em] uppercase">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
