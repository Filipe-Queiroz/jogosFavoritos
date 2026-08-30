const leaves = [
  { left: "8%", delay: "0s", duration: "10s", size: 8 },
  { left: "22%", delay: "2.2s", duration: "13s", size: 6 },
  { left: "41%", delay: "1.1s", duration: "11s", size: 9 },
  { left: "58%", delay: "3.4s", duration: "14s", size: 7 },
  { left: "73%", delay: "0.6s", duration: "12s", size: 8 },
  { left: "88%", delay: "2.8s", duration: "15s", size: 6 },
] as const;

export function StageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf) => (
        <span
          key={leaf.left}
          className="animate-fall absolute top-[-8%] rounded-[1px] bg-[#70a040]"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size * 1.6,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            boxShadow: "1px 1px 0 #285028",
          }}
        />
      ))}
    </div>
  );
}
