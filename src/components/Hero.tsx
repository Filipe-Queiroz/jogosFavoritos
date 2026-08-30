import { favorites, online, played, playing } from "../data/games";
import { ShurikenIcon } from "./Icons";
import { StageBackdrop } from "./StageBackdrop";

const stats = [
  { label: "Jogando", value: String(playing.length) },
  { label: "Já joguei", value: String(played.length) },
  { label: "Online", value: String(online.length) },
  { label: "Sagrados", value: String(favorites.length) },
] as const;

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden px-5 pt-16 pb-28 md:px-8 md:pt-24 md:pb-36"
    >
      <img
        src="/stage1.png"
        alt=""
        className="pixelated absolute inset-0 h-full w-full scale-[1.04] object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-void via-void/88 to-void/25" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-void to-transparent" />
      <StageBackdrop />

      <div className="relative mx-auto max-w-6xl">
        <p
          className="animate-rise font-pixel text-[8px] leading-relaxed text-ember uppercase md:text-[10px]"
          style={{ animationDelay: "80ms" }}
        >
          Shinobi III · Stage 1
        </p>

        <div className="mt-5 flex items-end gap-4">
          <ShurikenIcon className="animate-flicker mb-2 hidden h-12 w-12 text-gold sm:block" />
          <h1
            className="animate-rise font-display text-6xl leading-none font-bold tracking-[0.16em] text-bone sm:text-7xl md:text-8xl"
            style={{ animationDelay: "160ms" }}
          >
            CINZAS
          </h1>
        </div>

        <p
          className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-ash md:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          Floresta densa, tronco, capim e o céu ciano no vão das folhas. O
          arquivo pessoal no clima da primeira fase — ninja, machado, souls e o
          lobby que não desliga.
        </p>

        <div className="rule my-10 max-w-xl" />

        <dl className="grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-rise"
              style={{ animationDelay: `${320 + index * 70}ms` }}
            >
              <dt className="font-pixel text-[7px] text-mist uppercase">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-gold">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
