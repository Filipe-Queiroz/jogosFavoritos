import { favorites, games, online, played, playing } from "../data/games";

const stats = [
  { label: "Online", value: online.length },
  { label: "Jogando", value: playing.length },
  { label: "Já joguei", value: played.length },
  { label: "Favoritos", value: favorites.length },
] as const;

export function Hero() {
  return (
    <section
      id="topo"
      className="relative z-10 min-h-[92svh] overflow-hidden px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20"
    >
      <img
        src="/akira-banner.png"
        alt=""
        className="animate-kenburns absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-void/40 via-transparent to-void" />
      <div className="absolute inset-0 bg-linear-to-r from-void/78 via-void/25 to-void/55" />

      <p className="writing-vertical font-brush absolute top-28 right-4 hidden text-2xl tracking-[0.4em] text-ember md:right-10 md:block md:text-3xl">
        ゲーム記録
      </p>

      <div className="relative mx-auto flex min-h-[64svh] max-w-6xl flex-col justify-end">
        <p
          className="animate-rise font-pixel text-[8px] leading-relaxed text-gold uppercase md:text-[10px]"
          style={{ animationDelay: "80ms" }}
        >
          {games.length} registros
        </p>

        <h1
          className="animate-rise mt-5 font-display text-5xl leading-[0.95] font-bold tracking-[0.14em] text-bone sm:text-7xl md:text-8xl"
          style={{ animationDelay: "160ms" }}
        >
          <span className="glitch block" data-text="MEMORIAL">
            MEMORIAL
          </span>
          <span className="mt-1 block text-gold">DE JOGOS</span>
        </h1>

        <p
          className="animate-rise font-brush mt-4 text-3xl text-ember md:text-4xl"
          style={{ animationDelay: "240ms" }}
        >
          記録
        </p>

        <div className="rule my-8 max-w-xl" />

        <dl className="grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-rise"
              style={{ animationDelay: `${320 + index * 70}ms` }}
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
