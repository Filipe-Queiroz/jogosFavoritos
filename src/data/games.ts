import type { Game, RankedGame } from "../types";

export const games: Game[] = [
  {
    id: "shinobi-3",
    title: "Shinobi III: Return of the Ninja Master",
    year: 1993,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Shinobi_III_Return_of_the_Ninja_Master.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    genre: "Ação",
    platform: "Mega Drive",
    status: "played",
    favorite: true,
    hours: 8,
    rating: 10,
    blurb:
      "A primeira fase ainda é o padrão. Floresta densa, tronco, capim e o céu ciano no vão das folhas — Joe Musashi no timing certo.",
  },
  {
    id: "golden-axe-3",
    title: "Golden Axe III",
    year: 1993,
    steamId: 211202,
    genre: "Beat 'em up",
    platform: "Mega Drive",
    status: "played",
    favorite: true,
    hours: 6,
    rating: 10,
    blurb:
      "O favorito da série. Cooperativo bruto, magia que explode a tela e aquele ritmo de tavern-brawler que o Mega Drive fazia melhor que ninguém.",
  },
  {
    id: "witcher-3",
    title: "The Witcher 3: Wild Hunt",
    year: 2015,
    steamId: 292030,
    genre: "RPG",
    platform: "PC",
    status: "played",
    favorite: true,
    hours: 186,
    rating: 10,
    blurb:
      "O continente inteiro cabe numa escolha. Geralt, as escolas, os contratos — e a sensação de que cada vila tem uma história que vale a pena ouvir.",
  },
  {
    id: "dark-souls",
    title: "Dark Souls",
    year: 2011,
    steamId: 570940,
    genre: "Soulslike",
    platform: "PC",
    status: "played",
    favorite: true,
    hours: 94,
    rating: 10,
    blurb:
      "Lordran ensina na porrada. Fogueira, atalho, o peso da armadura e aquele silêncio depois do chefe que ninguém explica direito.",
  },
  {
    id: "dark-souls-2",
    title: "Dark Souls II",
    year: 2014,
    steamId: 335300,
    genre: "Soulslike",
    platform: "PC",
    status: "played",
    favorite: true,
    hours: 78,
    rating: 9,
    blurb:
      "Drangleic é estranho, cruel e teimoso. Adaptar o jeito de jogar faz parte do encanto — e o Scholar ainda guarda mistério.",
  },
  {
    id: "dark-souls-3",
    title: "Dark Souls III",
    year: 2016,
    steamId: 374320,
    genre: "Soulslike",
    platform: "PC",
    status: "played",
    favorite: true,
    hours: 112,
    rating: 10,
    blurb:
      "O fogo no fim do ciclo. Ritmo preciso, chefes que viram ritual, e Lothric como um epitáfio dourado da trilogia.",
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    year: 2022,
    steamId: 1245620,
    genre: "Soulslike",
    platform: "PC",
    status: "playing",
    hours: 210,
    rating: 10,
    note: "Não terminei",
    blurb:
      "As Terras Intermédias ainda não acabaram. Sempre tem uma árvore no horizonte e um chefe escondido atrás de uma névoa.",
  },
  {
    id: "bg3",
    title: "Baldur's Gate 3",
    year: 2023,
    steamId: 1086940,
    genre: "RPG",
    platform: "PC",
    status: "playing",
    hours: 84,
    rating: 9.5,
    note: "Não terminei",
    blurb:
      "Uma campanha que respeita o caos. Cada diálogo é uma bifurcação e o grupo virou gente de verdade. Ato final ainda espera.",
  },
  {
    id: "shinobi-aov",
    title: "Shinobi: Art of Vengeance",
    year: 2025,
    steamId: 2361770,
    genre: "Ação",
    platform: "PC",
    status: "played",
    hours: 12,
    rating: 9,
    blurb:
      "O clã de volta em traço de Lizardcube. Combo, kunai e um visual que conversa direto com o Mega Drive sem parecer pastiche.",
  },
  {
    id: "golden-axe",
    title: "Golden Axe",
    year: 1989,
    coverUrl: "https://m.media-amazon.com/images/M/MV5BOTkxM2I1MTItYWI3YS00OTI5LTkwMjEtYWMxZTcyYjE3YjA5XkEyXkFqcGc@._V1_.jpg",
    genre: "Beat 'em up",
    platform: "Mega Drive",
    status: "played",
    hours: 4,
    rating: 8.5,
    blurb:
      "O original. Machadada, magia e o som de Death Adder. Curto, direto, e ainda ensina o idioma da série.",
  },
  {
    id: "golden-axe-2",
    title: "Golden Axe II",
    year: 1991,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/e/e3/Golden_Axe_II_NA_Box_Art.jpeg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    genre: "Beat 'em up",
    platform: "Mega Drive",
    status: "played",
    hours: 4,
    rating: 8,
    blurb:
      "O irmão do meio. Mais polido que o um, menos selvagem que o três — mas a taverna continua valendo o coop.",
  },
  {
    id: "swat",
    title: "ESWAT: City Under Siege",
    year: 1990,
    steamId: 71110,
    coverUrl: "/covers/eswat.png",
    genre: "Run and gun",
    platform: "Mega Drive",
    status: "played",
    hours: 6,
    rating: 9.5,
    note: "O mais difícil",
    blurb:
      "O jogo mais difícil que eu joguei. Cyber-cop no Mega Drive: rua, jetpack, armadura ESWAT e uma cidade que não perdoa o timing.",
  },
  {
    id: "katana-zero",
    title: "Katana ZERO",
    year: 2019,
    coverUrl: "https://bdjogos.com.br/capas/9013-katana-zero-capa-1.jpg",
    genre: "Ação",
    platform: "PC",
    status: "played",
    hours: 10,
    rating: 9.5,
    blurb:
      "Neon, fita cassete e um corte que rebobina o tempo. Cada quarto é um puzzle de sangue com trilha que não larga.",
  },
  {
    id: "messenger",
    title: "The Messenger",
    year: 2018,
    steamId: 764790,
    genre: "Metroidvania",
    platform: "PC",
    status: "played",
    hours: 16,
    rating: 9,
    blurb:
      "Ninja de 8 bits que vira 16 no meio do caminho. Humor afiado, mapa esperto e um spoiler que vale a viagem no tempo.",
  },
  {
    id: "dantes-inferno",
    title: "Dante's Inferno",
    year: 2010,
    coverUrl:
      "https://m.media-amazon.com/images/M/MV5BMjJjNmM0ZDEtMTA4YS00ZGJiLWI2YTUtNDY0MmUzNGE0YzJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: "Ação",
    platform: "Console",
    status: "played",
    hours: 12,
    rating: 8,
    blurb:
      "O Inferno como hack-and-slash. Excessivo, teatral, e com um Dante que resolve teologia na foice.",
  },
  {
    id: "bayonetta",
    title: "Bayonetta",
    year: 2010,
    steamId: 460790,
    genre: "Ação",
    platform: "PC",
    status: "played",
    hours: 18,
    rating: 9.5,
    blurb:
      "Witch-time, salto alto e combo que vira coreografia. O action game como espetáculo.",
  },
  {
    id: "diablo-3",
    title: "Diablo III",
    year: 2012,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png",
    genre: "ARPG",
    platform: "PC",
    status: "played",
    hours: 90,
    rating: 8.5,
    blurb:
      "Loot que canta, rifts que não acabam. Menos sombrio que o dois, mais viciante do que admite.",
  },
  {
    id: "cuphead",
    title: "Cuphead",
    year: 2017,
    steamId: 268910,
    genre: "Run and gun",
    platform: "PC",
    status: "played",
    hours: 20,
    rating: 9,
    blurb:
      "Cartoon dos anos 30 com hitbox de aço. Cada chefe é um exame, cada parry uma pequena vitória.",
  },
  {
    id: "dave-diver",
    title: "Dave the Diver",
    year: 2023,
    steamId: 1868140,
    genre: "Aventura",
    platform: "PC",
    status: "played",
    hours: 32,
    rating: 9,
    blurb:
      "Mergulho de dia, sushi de noite. Loop perfeito — e o oceano sempre guarda mais uma coisa estranha.",
  },
  {
    id: "darksiders",
    title: "Darksiders",
    year: 2010,
    steamId: 462780,
    genre: "Ação",
    platform: "PC",
    status: "played",
    hours: 16,
    rating: 8,
    blurb:
      "Guerra a cavalo no fim do mundo. Zelda com machado, visual de HQ e um apocalipse que pede continuação.",
  },
  {
    id: "gmod",
    title: "Garry's Mod",
    year: 2006,
    steamId: 4000,
    genre: "Sandbox",
    platform: "PC",
    status: "played",
    hours: 200,
    rating: 9,
    blurb:
      "A caixa de areia infinita. Prop hunt, builds tortos e a certeza de que alguém vai spawnar um ragdoll no teto.",
  },
  {
    id: "inscryption",
    title: "Inscryption",
    year: 2021,
    steamId: 1092790,
    genre: "Roguelike",
    platform: "PC",
    status: "played",
    hours: 14,
    rating: 9.5,
    blurb:
      "Cartas, cabana e um spoiler que não se conta. O deckbuilder que vira outra coisa no meio da noite.",
  },
  {
    id: "half-life",
    title: "Half-Life",
    year: 1998,
    steamId: 70,
    genre: "FPS",
    platform: "PC",
    status: "played",
    hours: 12,
    rating: 10,
    blurb:
      "Black Mesa sem cutscene barata. A câmera nunca sai da mão — e o silêncio do corredor ainda funciona.",
  },
  {
    id: "half-life-2",
    title: "Half-Life 2",
    year: 2004,
    steamId: 220,
    genre: "FPS",
    platform: "PC",
    status: "played",
    hours: 16,
    rating: 10,
    blurb:
      "City 17, gravidade e a crowbar. O FPS como cinema em primeira pessoa — ainda o recorde a bater.",
  },
  {
    id: "sekiro",
    title: "Sekiro: Shadows Die Twice",
    year: 2019,
    steamId: 814380,
    genre: "Ação",
    platform: "PC",
    status: "played",
    hours: 52,
    rating: 10,
    blurb:
      "Hesitação é derrota. Quando o ritmo encaixa, cada duelo vira uma conversa de lâminas.",
  },
  {
    id: "cyberpunk",
    title: "Cyberpunk 2077",
    year: 2020,
    steamId: 1091500,
    genre: "RPG",
    platform: "PC",
    status: "played",
    hours: 73,
    rating: 9,
    blurb:
      "Night City brilha e machuca. Depois das correções, virou o RPG urbano que prometia ser.",
  },
  {
    id: "celeste",
    title: "Celeste",
    year: 2018,
    steamId: 504230,
    genre: "Plataforma",
    platform: "PC",
    status: "played",
    hours: 19,
    rating: 9,
    blurb:
      "A montanha é o pico e o medo. Preciso, generoso, e honestamente difícil no melhor sentido.",
  },
  {
    id: "portal-2",
    title: "Portal 2",
    year: 2011,
    steamId: 620,
    genre: "Puzzle",
    platform: "PC",
    status: "played",
    hours: 16,
    rating: 10,
    blurb:
      "Ciência, bolo e timing cômico. Ainda o padrão de ouro de puzzle com personalidade.",
  },
  {
    id: "stardew",
    title: "Stardew Valley",
    year: 2016,
    steamId: 413150,
    genre: "Simulação",
    platform: "PC",
    status: "played",
    hours: 120,
    rating: 9,
    blurb:
      "A fazenda como refúgio. Pescar até de madrugada e fingir que é só mais uma estação.",
  },
  {
    id: "valorant",
    title: "Valorant",
    year: 2020,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg",
    genre: "Tático",
    platform: "PC",
    status: "online",
    rating: 8,
    blurb:
      "Tiro no pixel e ultimate no clutch. Ranked que come a noite — e um agente sempre parece injusto até você pegar.",
  },
  {
    id: "lol",
    title: "League of Legends",
    year: 2009,
    coverUrl:
      "https://images.trustinnews.pt/uploads/sites/5/2019/12/14387772lol.jpg",
    genre: "MOBA",
    platform: "PC",
    status: "online",
    rating: 8,
    blurb:
      "A rift que não larga. Uma draft, um tilt, um pentakill — e a fila de novo.",
  },
  {
    id: "dbd",
    title: "Dead by Daylight",
    year: 2016,
    steamId: 381210,
    genre: "Horror",
    platform: "PC",
    status: "online",
    rating: 8,
    blurb:
      "Um killer, quatro sobreviventes, geradores que nunca acabam. Terror assimétrico com main que vira identidade.",
  },
  {
    id: "deadlock",
    title: "Deadlock",
    year: 2024,
    steamId: 1422450,
    genre: "Hero shooter",
    platform: "PC",
    status: "online",
    rating: 8.5,
    blurb:
      "A Valve misturando MOBA e tiro. Ainda em ebulição — e já vicia no roteamento da lane.",
  },
  {
    id: "cs",
    title: "Counter-Strike 2",
    year: 2023,
    steamId: 730,
    genre: "Tático",
    platform: "PC",
    status: "online",
    rating: 9,
    blurb:
      "A pistola eco, o clutch de 1v3, o spray que só você acredita. Dust, Mirage, e o tick da cabeça.",
  },
  {
    id: "sea-of-thieves",
    title: "Sea of Thieves",
    year: 2018,
    steamId: 1172620,
    genre: "Aventura",
    platform: "PC",
    status: "online",
    rating: 8.5,
    blurb:
      "Mar aberto, tripulação duvidosa e um galeão no horizonte. O saque é o pretexto — a sessão é a história.",
  },
  {
    id: "rocket-league",
    title: "Rocket League",
    year: 2015,
    steamId: 252950,
    genre: "Esporte",
    platform: "PC",
    status: "online",
    rating: 9,
    blurb:
      "Futebol de foguete. Um kickoff, um air dribble, e a certeza de que o time ia defender.",
  },
  {
    id: "overwatch",
    title: "Overwatch",
    year: 2022,
    coverUrl:
      "https://m.media-amazon.com/images/M/MV5BYjY0ZjJiMDQtNTY0Yy00ODJlLWEzYmYtMGZkZjNjNzc1NzE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: "Hero shooter",
    platform: "PC",
    status: "online",
    rating: 8,
    blurb:
      "Team fight em 30 segundos. Um main que define a noite e um counter que aparece na hora errada.",
  },
  {
    id: "arena-breakout",
    title: "Arena Breakout: Infinite",
    year: 2025,
    steamId: 2073620,
    genre: "Extraction",
    platform: "PC",
    status: "online",
    rating: 8,
    blurb:
      "Entra com o kit, sai com o medo. Extraction que cobra cada passo — e o extract nunca parece perto o bastante.",
  },
  {
    id: "bo2",
    title: "Call of Duty: Black Ops II",
    year: 2012,
    steamId: 202970,
    genre: "FPS",
    platform: "PC",
    status: "online",
    rating: 9,
    blurb:
      "Nuketown, league play e o lobby que criou uma geração. O CoD que ainda volta na conversa.",
  },
  {
    id: "l4d",
    title: "Left 4 Dead",
    year: 2008,
    steamId: 500,
    genre: "Co-op",
    platform: "PC",
    status: "online",
    rating: 9,
    blurb:
      "Quatro sobreviventes, um director doente. O grito do Hunter ainda acelera o pulso.",
  },
  {
    id: "l4d2",
    title: "Left 4 Dead 2",
    year: 2009,
    steamId: 550,
    genre: "Co-op",
    platform: "PC",
    status: "online",
    rating: 9.5,
    blurb:
      "Versus, campanhas e a Crowbar no horde. O coop zumbi que o tempo não envelheceu.",
  },
  {
    id: "rust",
    title: "Rust",
    year: 2018,
    steamId: 252490,
    genre: "Survival",
    platform: "PC",
    status: "online",
    rating: 8.5,
    blurb:
      "Naked na praia, AK no wipe. Traição, base e a voz no chat que nunca deveria ter sido amiga.",
  },
];

export const top10: RankedGame[] = [
  {
    gameId: "witcher-3",
    reason:
      "O RPG que fez o mundo aberto parecer vivo de verdade. Contratos, personagens e um tom que nunca escorrega no cínico barato.",
  },
  {
    gameId: "dark-souls-3",
    reason:
      "O fechamento da trilogia no auge do combate. Chefes que viram rito, e Lothric como um poema de cinzas.",
  },
  {
    gameId: "shinobi-3",
    reason:
      "A primeira fase é um manifesto. Floresta, tronco, timing — o Mega Drive no auge do ninja.",
  },
  {
    gameId: "golden-axe-3",
    reason:
      "O melhor Golden Axe. Coop, magia e o beat 'em up que a série estava tentando ser desde o começo.",
  },
  {
    gameId: "dark-souls",
    reason:
      "O original ainda ensina o idioma. Nível, atalho, medo — a geometria da coragem.",
  },
  {
    gameId: "katana-zero",
    reason:
      "Estilo puro. Tempo, fita e um corte que cabe num quarto de hotel.",
  },
  {
    gameId: "dark-souls-2",
    reason:
      "O irmão do meio, teimoso e insubstituível. Adaptar o corpo ao jogo é metade da graça.",
  },
  {
    gameId: "elden-ring",
    reason:
      "A liberdade das Terras Intermédias — ainda em sessão, ainda escondendo coisa atrás da névoa.",
  },
  {
    gameId: "swat",
    reason:
      "O mais difícil. Cyber-cop no Mega Drive: um erro de timing e a cidade te enterra.",
  },
  {
    gameId: "half-life-2",
    reason:
      "City 17 ainda é o recorde. Gravidade, crowbar e um silêncio que o FPS moderno esqueceu.",
  },
];

export function gameById(id: string) {
  const game = games.find((item) => item.id === id);
  if (!game) {
    throw new Error(`Jogo não encontrado: ${id}`);
  }
  return game;
}

export const favorites = games.filter((game) => game.favorite);
export const playing = games.filter((game) => game.status === "playing");
export const played = games.filter((game) => game.status === "played");
export const online = games.filter((game) => game.status === "online");
