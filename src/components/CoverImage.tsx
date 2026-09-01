import { useState } from "react";
import { coverSources } from "../lib/covers";

type CoverImageProps = {
  steamId?: number;
  coverUrl?: string;
  title: string;
  className?: string;
  priority?: boolean;
};

export function CoverImage({
  steamId,
  coverUrl,
  title,
  className,
  priority = false,
}: CoverImageProps) {
  const sources = coverSources(steamId, coverUrl);
  const [index, setIndex] = useState(0);
  const src = sources[index];

  if (!src) {
    return (
      <div
        className={`flex items-end bg-linear-to-br from-stone via-bark to-void p-4 ${className ?? ""}`}
      >
        <span className="font-display text-sm tracking-wide text-gold">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Capa de ${title}`}
      className={`max-w-full object-cover ${className ?? ""}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setIndex((current) => current + 1)}
    />
  );
}
