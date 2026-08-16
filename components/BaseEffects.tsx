"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type GsapType from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

type Gsap = typeof GsapType;
type ST = typeof ScrollTriggerType;
type LenisCtor = typeof import("lenis").default;

/**
 * Lightweight page chrome effects shared by non-home routes (e.g. Journal):
 * custom cursor, Lenis smooth scroll (driven by gsap.ticker) and generic
 * `.rv` scroll reveals. Same lineage as SiteEffects, minus the home-only
 * WebGL hero / sliders. Libraries load dynamically to stay clear of SSR.
 *
 * Re-runs on every route change (`pathname`) because the Journal layout — and
 * thus this component — persists across /journal <-> /journal/[slug]
 * navigation. Re-initialising resets the scroll to the top of the new page and
 * re-applies `.rv` reveals to the freshly mounted content.
 */
export default function BaseEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // We own the scroll (Lenis), so stop the browser from restoring a previous
    // position and jump to the top of every new route immediately.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    let disposed = false;
    let cleanupFn: (() => void) | null = null;

    (async () => {
      const [gsapMod, stMod, lenisMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      if (disposed) return;
      cleanupFn = init(gsapMod.default, stMod.ScrollTrigger, lenisMod.default);
    })();

    return () => {
      disposed = true;
      cleanupFn?.();
    };
  }, [pathname]);

  return null;
}

function init(gsap: Gsap, ScrollTrigger: ST, Lenis: LenisCtor): () => void {
  gsap.registerPlugin(ScrollTrigger);
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const listeners: Array<{
    t: EventTarget;
    type: string;
    fn: EventListenerOrEventListenerObject;
    opts?: boolean | AddEventListenerOptions;
  }> = [];
  const on = (
    t: EventTarget,
    type: string,
    fn: EventListenerOrEventListenerObject,
    opts?: boolean | AddEventListenerOptions
  ) => {
    t.addEventListener(type, fn, opts);
    listeners.push({ t, type, fn, opts });
  };
  let cursorTick: (() => void) | null = null;

  // --- Lenis smooth scroll ---
  let lenis: InstanceType<LenisCtor> | null = null;
  let lenisRaf: ((time: number) => void) | null = null;
  if (!prefersReduced) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.scrollTo(0, { immediate: true }); // start the new page at the top
    lenis.on("scroll", ScrollTrigger.update);
    lenisRaf = (time: number) => lenis!.raf(time * 1000);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      on(a, "click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        lenis!.scrollTo(target as HTMLElement);
      });
    });
  }

  const ctx = gsap.context(() => {
    /* ---- cursor ---- */
    (() => {
      const c = document.getElementById("cursor");
      if (!c) return;
      let x = innerWidth / 2,
        y = innerHeight / 2,
        tx = x,
        ty = y;
      on(window, "mousemove", (e) => {
        const me = e as MouseEvent;
        tx = me.clientX;
        ty = me.clientY;
      });
      cursorTick = () => {
        x += (tx - x) * 0.22;
        y += (ty - y) * 0.22;
        c.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      };
      gsap.ticker.add(cursorTick);
      document.querySelectorAll("[data-hover]").forEach((el) => {
        on(el, "mouseenter", () => c.classList.add("is-hover"));
        on(el, "mouseleave", () => c.classList.remove("is-hover"));
      });
    })();

    /* ---- generic reveals ---- */
    document.querySelectorAll(".rv").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });

    ScrollTrigger.refresh();
  });

  return () => {
    if (cursorTick) gsap.ticker.remove(cursorTick);
    if (lenisRaf) gsap.ticker.remove(lenisRaf);
    if (lenis) lenis.destroy();
    gsap.ticker.lagSmoothing(500, 33);
    listeners.forEach(({ t, type, fn, opts }) =>
      t.removeEventListener(type, fn, opts)
    );
    ctx.revert();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
