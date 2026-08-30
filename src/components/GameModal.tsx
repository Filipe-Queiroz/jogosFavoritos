import { useEffect } from "react";
import type { Game } from "../types";
import { CoverImage } from "./CoverImage";
import { CloseIcon } from "./Icons";

type GameModalProps = {
  game: Game;
  onClose: () => void;
};

function statusLabel(game: Game) {
  if (game.status === "playing") return "Em sessão";
  if (game.status === "online") return "Netplay";
  return "Arquivo";
}

export function GameModal({ game, onClose }: GameModalProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-void/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-title"
        className="relative grid max-h-[92svh] w-full max-w-3xl overflow-auto border border-gold/25 bg-bark sm:grid-cols-[220px_1fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <CoverImage
          steamId={game.steamId}
          coverUrl={game.coverUrl}
          title={game.title}
          className="h-56 w-full sm:h-full"
        />
        <div className="p-6 md:p-8">
          <p className="font-pixel text-[8px] leading-relaxed text-gold uppercase">
            {statusLabel(game)} · {game.genre}
          </p>
          <h3
            id="game-title"
            className="mt-2 font-display text-2xl font-bold text-bone md:text-3xl"
          >
            {game.title}
          </h3>
          {game.note ? (
            <p className="mt-2 font-pixel text-[8px] text-ember uppercase">{game.note}</p>
          ) : null}
          <p className="mt-4 text-sm leading-relaxed text-ash">{game.blurb}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Ano</dt>
              <dd className="mt-1 text-bone">{game.year}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Plataforma</dt>
              <dd className="mt-1 text-bone">{game.platform}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Nota</dt>
              <dd className="mt-1 text-gold">{game.rating.toFixed(1)} / 10</dd>
            </div>
            {game.hours ? (
              <div>
                <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Horas</dt>
                <dd className="mt-1 text-bone">{game.hours}h</dd>
              </div>
            ) : null}
            {game.favorite ? (
              <div>
                <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Lugar</dt>
                <dd className="mt-1 text-gold">Sagrado</dd>
              </div>
            ) : null}
          </dl>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 bg-ink/70 p-2 text-bone backdrop-blur-sm"
          aria-label="Fechar"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </article>
    </div>
  );
}
