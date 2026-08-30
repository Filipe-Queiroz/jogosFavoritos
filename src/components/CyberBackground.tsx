import { useEffect } from "react";

export function CyberBackground() {
  useEffect(() => {
    let frame = 0;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      frame = 0;
      const root = document.documentElement;
      root.style.setProperty("--mx", `${lastX}px`);
      root.style.setProperty("--my", `${lastY}px`);
      root.style.setProperty(
        "--mnx",
        (lastX / window.innerWidth - 0.5).toFixed(3),
      );
      root.style.setProperty(
        "--mny",
        (lastY / window.innerHeight - 0.5).toFixed(3),
      );
    };

    const onMove = (event: PointerEvent) => {
      lastX = event.clientX;
      lastY = event.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="cyber-stage" aria-hidden="true">
        <div className="cyber-grid" />
        <div className="cyber-floor" />
        <div className="cyber-horizon" />
      </div>
      <div className="cursor-aura" aria-hidden="true" />
    </>
  );
}
