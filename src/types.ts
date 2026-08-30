export type GameStatus = "playing" | "played" | "online";

export type Game = {
  id: string;
  title: string;
  year: number;
  steamId?: number;
  coverUrl?: string;
  genre: string;
  platform: string;
  status: GameStatus;
  favorite?: boolean;
  hours?: number;
  rating: number;
  blurb: string;
  note?: string;
};

export type RankedGame = {
  gameId: string;
  reason: string;
};
