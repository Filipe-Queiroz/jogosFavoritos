import { useEffect, useRef } from "react";

export function NeonCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let raf = 0;

    let awake = false;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!awake) {
        awake = true;
        ringX = targetX;
        ringY = targetY;
        ringRef.current?.classList.add("is-awake");
        dotRef.current?.classList.add("is-awake");
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      const hot = (event.target as Element | null)?.closest(
        "a, button, input, [role='dialog']",
      );
      if (ringRef.current) {
        ringRef.current.dataset.hot = hot ? "true" : "false";
      }
    };

    const loop = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="neon-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="neon-cursor-dot" aria-hidden="true" />
    </>
  );
}
