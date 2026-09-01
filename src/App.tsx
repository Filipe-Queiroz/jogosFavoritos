import { useMemo, useState } from "react";
import { CyberBackground } from "./components/CyberBackground";
import { Footer } from "./components/Footer";
import { GameCard } from "./components/GameCard";
import { GameModal } from "./components/GameModal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Top10 } from "./components/Top10";
import { favorites, online, played, playing } from "./data/games";
import type { Game } from "./types";

export default function App() {
  const [selected, setSelected] = useState<Game | null>(null);
  const [query, setQuery] = useState("");

  const filteredPlayed = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return played;
    return played.filter(
      (game) =>
        game.title.toLowerCase().includes(needle) ||
        game.genre.toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <div className="min-h-svh overflow-x-hidden">
      <CyberBackground />
      <Header />
      <main>
        <Hero />

        <Section
          id="online"
          index="01"
          kicker="Netplay"
          title="Jogos online"
          count={online.length}
        >
          <div className="neon-frame bg-bark/40 p-4 md:p-6">
            <div className="stagger grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              {online.map((game, index) => (
                <GameCard
                  key={game.id}
                  game={game}
                  index={index}
                  onSelect={setSelected}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="jogando"
          index="02"
          kicker="Em andamento"
          title="Jogando agora"
          count={playing.length}
        >
          <div className="stagger grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
            {playing.map((game, index) => (
              <GameCard
                key={game.id}
                game={game}
                index={index}
                onSelect={setSelected}
              />
            ))}
          </div>
        </Section>

        <Section
          id="favoritos"
          index="03"
          kicker="Preferidos"
          title="Favoritos"
          count={favorites.length}
        >
          <div className="stagger grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {favorites.map((game, index) => (
              <GameCard
                key={game.id}
                game={game}
                index={index}
                onSelect={setSelected}
              />
            ))}
          </div>
        </Section>

        <Section
          id="jogados"
          index="04"
          kicker="Arquivo"
          title="Jogados"
          count={filteredPlayed.length}
        >
          <label className="mb-8 block max-w-md">
            <span className="sr-only">Buscar no arquivo</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por título ou gênero…"
              className="w-full border border-ember/30 bg-ink px-4 py-3 text-sm text-bone placeholder:text-mist outline-none focus:border-gold/60"
            />
          </label>

          {filteredPlayed.length === 0 ? (
            <p className="text-sm text-ash">Nenhum registro encontrado.</p>
          ) : (
            <div
              key={query}
              className="stagger grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5"
            >
              {filteredPlayed.map((game, index) => (
                <GameCard
                  key={game.id}
                  game={game}
                  index={Math.min(index, 12)}
                  onSelect={setSelected}
                />
              ))}
            </div>
          )}
        </Section>

        <Top10 onSelect={setSelected} />
      </main>
      <Footer />
      {selected ? (
        <GameModal game={selected} onClose={() => setSelected(null)} />
      ) : null}
    </div>
  );
}
