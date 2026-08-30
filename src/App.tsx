import { useMemo, useState } from "react";
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
    <div className="bg-atmosphere bg-scanlines min-h-svh">
      <Header />
      <main>
        <Hero />

        <Section
          id="favoritos"
          kicker="O clã"
          title="Jogos sagrados"
          description="Shinobi III e Golden Axe III no núcleo Sega, Witcher 3 no continente, e a trilogia Dark Souls — Lordran, Drangleic, Lothric."
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {favorites.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                featured
                onSelect={setSelected}
              />
            ))}
          </div>
        </Section>

        <Section
          id="jogando"
          kicker="A sessão"
          title="Jogando agora"
          description="Campanhas abertas. Elden Ring e Baldur's Gate 3 ainda sem crédito final."
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {playing.map((game) => (
              <GameCard key={game.id} game={game} onSelect={setSelected} />
            ))}
          </div>
        </Section>

        <Section
          id="jogados"
          kicker="O arquivo"
          title="Já joguei"
          description="Do Mega Drive ao PC: ninjas, machados, souls, cartas, crowbar. ESWAT no canto mais difícil da prateleira."
        >
          <label className="mb-8 block max-w-md">
            <span className="sr-only">Buscar no arquivo</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por título ou gênero…"
              className="w-full border border-gold/25 bg-ink px-4 py-3 text-sm text-bone placeholder:text-mist outline-none focus:border-gold/60"
            />
          </label>

          {filteredPlayed.length === 0 ? (
            <p className="text-sm text-ash">Nenhum jogo nesse corredor do castelo.</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              {filteredPlayed.map((game) => (
                <GameCard key={game.id} game={game} onSelect={setSelected} />
              ))}
            </div>
          )}
        </Section>

        <Section
          id="online"
          kicker="Netplay"
          title="Jogos online"
          description="Lobby, wipe, ranked e o extract que nunca chega. Do CS ao Rust, do Rift ao Nuketown."
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {online.map((game) => (
              <GameCard key={game.id} game={game} onSelect={setSelected} />
            ))}
          </div>
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
