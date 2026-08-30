const STEAM_CDN =
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps";

export function steamCover(appId: number) {
  return `${STEAM_CDN}/${appId}/library_600x900.jpg`;
}

export function steamHeader(appId: number) {
  return `${STEAM_CDN}/${appId}/header.jpg`;
}

export function coverSources(steamId?: number, coverUrl?: string) {
  return [
    coverUrl,
    steamId != null ? steamCover(steamId) : undefined,
    steamId != null ? steamHeader(steamId) : undefined,
  ].filter((src): src is string => Boolean(src));
}
