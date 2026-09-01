import { favorites, games, online, played, playing } from "../data/games";

const stats = [
  { label: "Online", value: online.length },
  { label: "Jogando", value: playing.length },
  { label: "Jogados", value: played.length },
  { label: "Favoritos", value: favorites.length },
] as const;

export function Hero() {
  return (
    <section id="topo" className="relative z-10 px-5 pt-8 pb-10 md:px-8 md:pt-16 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <p className="animate-rise font-pixel text-[8px] leading-relaxed text-gold uppercase md:text-[10px]">
          {games.length} registros
        </p>

        <h1 className="animate-rise mt-5 max-w-full font-display text-[clamp(2.15rem,12vw,8rem)] leading-[0.95] font-bold tracking-[0.04em] break-words text-bone sm:text-7xl sm:tracking-[0.14em] md:text-8xl">
          MEMORIAL
          <span className="mt-1 block text-gold">DE JOGOS</span>
        </h1>

        <p className="hidden md:block animate-rise font-brush mt-4 text-3xl text-ember md:text-4xl">記録</p>

        <div className="rule my-8 max-w-xl" />

        <dl className="grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-rise"
              style={{ animationDelay: `${180 + index * 70}ms` }}
            >
              <dt className="font-pixel text-[7px] text-mist uppercase">{stat.label}</dt>
              <dd
                className={`mt-1 font-display text-3xl font-semibold ${
                  stat.label === "Online" ? "text-ember" : "text-gold"
                }`}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
