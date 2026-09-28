"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mobile-only swipe carousel. On desktop/tablet it renders the children inside
 * the given grid class untouched; at <=620px the same track becomes a
 * horizontal scroll-snap carousel with dots below and autoplay.
 */
export default function MobileCarousel({
  className,
  count,
  autoplayMs = 4000,
  children,
}: {
  className: string;
  count: number;
  autoplayMs?: number;
  children: React.ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(false);

  // track the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 620px)");
    const apply = () => setMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // sync the active dot with the scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !mobile) return;
    const onScroll = () => {
      if (track.clientWidth === 0) return;
      setActive(Math.round(track.scrollLeft / track.clientWidth));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [mobile]);

  // autoplay (paused while the user is interacting; off for reduced-motion)
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !mobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    const onDown = () => {
      paused = true;
    };
    const onUp = () => {
      paused = false;
    };
    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    const id = window.setInterval(() => {
      if (paused || track.clientWidth === 0) return;
      const cur = Math.round(track.scrollLeft / track.clientWidth);
      const next = (cur + 1) % count;
      track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
    }, autoplayMs);

    return () => {
      window.clearInterval(id);
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [mobile, count, autoplayMs]);

  // mouse drag-to-scroll (touch already swipes natively)
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !mobile) return;
    let down = false;
    let startX = 0;
    let startLeft = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      startX = e.clientX;
      startLeft = track.scrollLeft;
      track.style.scrollSnapType = "none";
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      track.scrollLeft = startLeft - (e.clientX - startX);
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      track.style.scrollSnapType = "";
      const i = Math.round(track.scrollLeft / track.clientWidth);
      track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
    };
    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [mobile]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (track) track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      <div className={className + " mcar__track"} ref={trackRef}>
        {children}
      </div>
      <div className="mcar__dots" aria-hidden={!mobile}>
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={"mcar__dot" + (i === active ? " is-on" : "")}
            onClick={() => goTo(i)}
            aria-label={`Ir para o item ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
