import type { Game } from "../types";
import { CoverImage } from "./CoverImage";

type GameCardProps = {
  game: Game;
  onSelect: (game: Game) => void;
  featured?: boolean;
};

function stars(rating: number) {
  const filled = Math.round(rating / 2);
  return "◆".repeat(filled) + "◇".repeat(5 - filled);
}

export function GameCard({ game, onSelect, featured = false }: GameCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(game)}
      className={`group relative flex flex-col overflow-hidden border text-left transition duration-300 ${
        featured
          ? "border-gold/50 bg-bark shadow-[0_0_40px_-16px_rgb(112_192_72/0.75)]"
          : "border-white/10 bg-bark/70 hover:border-gold/45"
      }`}
    >
      <div className="relative aspect-2/3 overflow-hidden">
        <CoverImage
          steamId={game.steamId}
          coverUrl={game.coverUrl}
          title={game.title}
          className="h-full w-full transition duration-500 group-hover:scale-105"
          priority={featured}
        />
        <div className="absolute inset-0 bg-linear-to-t from-void via-void/15 to-transparent opacity-85" />

        {game.status === "playing" ? (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-ink/80 px-2.5 py-1 font-pixel text-[7px] text-ember uppercase">
            <span className="animate-ember h-1.5 w-1.5 rounded-full bg-ember" />
            Agora
          </span>
        ) : null}

        {game.status === "online" ? (
          <span className="absolute top-3 left-3 bg-ink/80 px-2.5 py-1 font-pixel text-[7px] text-gold uppercase">
            Online
          </span>
        ) : null}

        {game.favorite ? (
          <span className="absolute top-3 right-3 border border-gold/40 bg-ink/80 px-2.5 py-1 font-pixel text-[7px] text-gold uppercase">
            Sagrado
          </span>
        ) : null}

        {game.note ? (
          <span
            className={`absolute right-3 border border-ember/40 bg-ink/80 px-2.5 py-1 font-pixel text-[7px] text-ember uppercase ${
              game.favorite ? "top-10" : "top-3"
            }`}
          >
            {game.note}
          </span>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-3.5">
          <p className="font-pixel text-[7px] leading-relaxed text-gold uppercase">
            {game.genre} · {game.year}
          </p>
          <h3 className="mt-1 font-display text-base leading-tight font-semibold text-bone md:text-lg">
            {game.title}
          </h3>
          <p className="mt-1 text-[11px] tracking-wide text-ash">{stars(game.rating)}</p>
        </div>
      </div>
    </button>
  );
}
