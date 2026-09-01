import { games } from "../data/games";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-ember/25 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="font-brush text-2xl text-ember">記録</p>
        <p className="font-display text-sm tracking-[0.12em] text-ash uppercase md:tracking-[0.28em]">
          Memorial de Jogos
        </p>
        <p className="font-pixel text-[7px] leading-relaxed text-mist uppercase">
          {games.length} registros
        </p>
      </div>
    </footer>
  );
}
