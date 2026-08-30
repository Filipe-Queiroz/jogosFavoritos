import { gameById, top10 } from "../data/games";
import type { Game } from "../types";
import { CoverImage } from "./CoverImage";
import { Section } from "./Section";

type Top10Props = {
  onSelect: (game: Game) => void;
};

export function Top10({ onSelect }: Top10Props) {
  const ranked = top10.map((entry, index) => ({
    rank: index + 1,
    reason: entry.reason,
    game: gameById(entry.gameId),
  }));
  const first = ranked[0];
  const rest = ranked.slice(1);

  if (!first) return null;

  return (
    <Section
      id="top10"
      kicker="Boss rush"
      title="Top 10"
      description="Dez que não saem da memória. Witcher no trono, Souls no altar, Shinobi III e Golden Axe III no clã — e ESWAT no canto mais cruel."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <button
          type="button"
          onClick={() => onSelect(first.game)}
          className="group relative overflow-hidden border border-gold/40 bg-bark text-left shadow-[0_0_60px_-18px_rgb(112_192_72/0.55)]"
        >
          <CoverImage
            steamId={first.game.steamId}
            coverUrl={first.game.coverUrl}
            title={first.game.title}
            className="h-full w-full transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-void via-void/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="font-pixel text-[10px] text-gold">Nº 01</p>
            <h3 className="mt-2 font-display text-3xl font-bold text-bone md:text-4xl">
              {first.game.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ash md:text-base">
              {first.reason}
            </p>
          </div>
        </button>

        <ol className="flex flex-col gap-3">
          {rest.map((item) => (
            <li key={item.game.id}>
              <button
                type="button"
                onClick={() => onSelect(item.game)}
                className="flex w-full items-center gap-4 border border-white/10 bg-bark/60 p-2.5 text-left transition hover:border-gold/40"
              >
                <span className="w-10 shrink-0 text-center font-display text-lg font-semibold text-gold/80">
                  {String(item.rank).padStart(2, "0")}
                </span>
                <CoverImage
                  steamId={item.game.steamId}
                  coverUrl={item.game.coverUrl}
                  title={item.game.title}
                  className="h-16 w-11 shrink-0 object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-bone md:text-base">
                    {item.game.title}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-ash">
                    {item.reason}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
