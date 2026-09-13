"use client";

import { useEffect } from "react";
import type GsapType from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

type Gsap = typeof GsapType;
type ST = typeof ScrollTriggerType;
type Three = typeof import("three");
type LenisCtor = typeof import("lenis").default;

/**
 * Faithful port of the original inline <script> from the standalone HTML.
 * All effects run client-side after mount. Libraries (gsap, ScrollTrigger,
 * three) are imported dynamically so nothing touches `window` during SSR.
 */
export default function SiteEffects() {
  useEffect(() => {
    let disposed = false;
    let cleanupFn: (() => void) | null = null;

    (async () => {
      const [gsapMod, stMod, THREE, lenisMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("three"),
        import("lenis"),
      ]);
      if (disposed) return;
      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      const Lenis = lenisMod.default;
      cleanupFn = init(gsap, ScrollTrigger, THREE, Lenis);
    })();

    return () => {
      disposed = true;
      cleanupFn?.();
    };
  }, []);

  return null;
}

function init(
  gsap: Gsap,
  ScrollTrigger: ST,
  THREE: Three,
  Lenis: LenisCtor
): () => void {
  gsap.registerPlugin(ScrollTrigger);
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const isMobile = window.matchMedia("(max-width: 900px)").matches;

  // --- cleanup bookkeeping ---
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
  let rafId = 0;
  let cursorTick: (() => void) | null = null;
  const disposables: Array<{ dispose: () => void }> = [];

  // --- Lenis smooth scroll, driven by gsap.ticker + synced to ScrollTrigger ---
  let lenis: InstanceType<LenisCtor> | null = null;
  let lenisRaf: ((time: number) => void) | null = null;
  if (!prefersReduced) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    lenisRaf = (time: number) => lenis!.raf(time * 1000);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);
    // smooth-scroll the in-page anchor links (nav, CTA, logo)
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
    /* ============ CURSOR ============ */
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

    /* ============ THREE.JS KNIT FABRIC HERO ============ */
    (() => {
      const canvas = document.getElementById(
        "knit-canvas"
      ) as HTMLCanvasElement | null;
      if (!canvas) return;
      try {
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true,
        });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0xf2ede4, 6.5, 15.5);
        const camera = new THREE.PerspectiveCamera(
          42,
          innerWidth / innerHeight,
          0.1,
          100
        );
        camera.position.set(0, 2.1, 7.6);
        camera.lookAt(0, -0.9, 0);

        scene.add(new THREE.AmbientLight(0xf2ece0, 0.72));
        const key = new THREE.DirectionalLight(0xf0e6d6, 0.62);
        key.position.set(4, 7, 5);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xd8cfbf, 0.3);
        rim.position.set(-6, 2, -4);
        scene.add(rim);

        const texLoader = new THREE.TextureLoader();
        // the reduced-motion path draws a single frame, so it has to repaint
        // once the texture resolves — the animation loop gets that for free
        const knitTex = texLoader.load("/images/knit-texture.jpg", () => {
          if (prefersReduced) renderFrame(0);
        });
        knitTex.wrapS = knitTex.wrapT = THREE.MirroredRepeatWrapping;
        knitTex.repeat.set(1.9, 1.3);
        knitTex.center.set(0.5, 0.5);
        knitTex.rotation = 0.08;
        knitTex.anisotropy = 8;

        const W = 24,
          H = 10,
          SX = isMobile ? 80 : 150,
          SY = isMobile ? 46 : 84;
        const geo = new THREE.PlaneGeometry(W, H, SX, SY);
        const mat = new THREE.MeshStandardMaterial({
          map: knitTex,
          roughness: 0.96,
          metalness: 0,
          color: 0xede5d6,
          side: THREE.DoubleSide,
        });
        const fabric = new THREE.Mesh(geo, mat);
        fabric.rotation.x = -0.78;
        fabric.position.set(0, -3.9, 0);
        scene.add(fabric);

        disposables.push(renderer, geo, mat, knitTex);

        const pos = geo.attributes.position;
        const base = (pos.array as Float32Array).slice();
        let mx = 0,
          my = 0,
          tmx = 0,
          tmy = 0,
          ripple = 0;
        let scrollY = 0;
        if (!prefersReduced) {
          on(window, "mousemove", (e) => {
            const me = e as MouseEvent;
            tmx = (me.clientX / innerWidth - 0.5) * 2;
            tmy = (me.clientY / innerHeight - 0.5) * 2;
            ripple = Math.min(1, ripple + 0.022);
          });
          on(
            window,
            "scroll",
            () => {
              scrollY = window.scrollY;
            },
            { passive: true }
          );
        }

        const clock = new THREE.Clock();

        const renderFrame = (t: number) => {
          mx += (tmx - mx) * 0.05;
          my += (tmy - my) * 0.05;
          ripple *= 0.985;
          const amp = 0.34 + ripple * 0.5;
          const arr = pos.array as Float32Array;
          for (let i = 0; i < pos.count; i++) {
            const ix = i * 3;
            const x = base[ix],
              y = base[ix + 1];
            const dmx = x / (W / 2) - mx * 2.2,
              dmy = y / (H / 2) + my * 1.4;
            const dist = Math.sqrt(dmx * dmx + dmy * dmy);
            const z =
              Math.sin(x * 0.55 + t * 0.7) * Math.cos(y * 0.72 + t * 0.52) * amp +
              Math.sin(x * 1.35 - t * 0.42 + y * 0.8) * amp * 0.45 +
              Math.cos(dist * 2.4 - t * 1.6) *
                ripple *
                0.55 *
                Math.max(0, 1.2 - dist * 0.4);
            arr[ix + 2] = z;
          }
          pos.needsUpdate = true;
          geo.computeVertexNormals();
          knitTex.offset.x = t * 0.004 + mx * 0.01;
          knitTex.offset.y = Math.sin(t * 0.05) * 0.015;
          fabric.rotation.z = mx * 0.045;
          camera.position.y = 2.1 + scrollY * 0.0012;
          camera.position.x = mx * 0.3;
          camera.lookAt(0, -0.9 - scrollY * 0.0009, 0);
          renderer.render(scene, camera);
        };

        const resize = () => {
          renderer.setSize(innerWidth, innerHeight);
          camera.aspect = innerWidth / innerHeight;
          camera.updateProjectionMatrix();
          // no animation loop is running in reduced motion, so repaint here
          if (prefersReduced) renderFrame(0);
        };
        on(window, "resize", resize);
        resize();

        if (prefersReduced) {
          // Same knit imagery, held as a single still frame.
          renderFrame(0);
        } else {
          (function tick() {
            rafId = requestAnimationFrame(tick);
            renderFrame(clock.getElapsedTime());
          })();
        }
      } catch (e) {
        canvas.style.background =
          "radial-gradient(120% 90% at 60% 80%, #E4DDD0 0%, #F2EDE4 60%)";
      }
    })();

    /* ============ LOADER + HERO INTRO ============ */
    (() => {
      const pct = document.getElementById("loaderPct");
      const bar = document.getElementById("loaderBar");
      if (!pct || !bar) return;
      const o = { v: 0 };
      const setProgress = () => {
        pct.textContent = String(Math.round(o.v)).padStart(2, "0");
        bar.style.transform = `scaleX(${o.v / 100})`;
      };

      /* --- reduced motion: cross-fades only, no travel, no curtain slide --- */
      if (prefersReduced) {
        gsap.set(["#heroTitle .line span", "#heroLede", "#heroFoot"], {
          y: 0,
          opacity: 0,
        });
        gsap
          .timeline()
          .to(o, { v: 100, duration: 0.5, ease: "none", onUpdate: setProgress })
          .to("#loader", { opacity: 0, duration: 0.4, ease: "none" })
          .to(
            ["#heroTitle .line span", "#heroLede", "#heroFoot"],
            { opacity: 1, duration: 0.5, stagger: 0.07, ease: "none" },
            "-=.2"
          )
          .set("#heroTitle .line span", { willChange: "auto" })
          .set("#loader", { display: "none" });
        return;
      }

      const tl = gsap.timeline();
      tl.to(o, {
        v: 100,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: setProgress,
      })
        .to(
          "#loader",
          { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
          "+=.15"
        )
        /* The lines rise inside a mask whose lower edge is feathered in CSS,
           and they carry their own fade — so a line is never caught by a hard
           clip edge part-way through the movement. */
        .from(
          "#heroTitle .line span",
          {
            yPercent: 118,
            opacity: 0,
            duration: 1.3,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=.45"
        )
        .to(
          "#heroLede",
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=.85"
        )
        .to(
          "#heroFoot",
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=.65"
        )
        .set("#heroTitle .line span", { willChange: "auto" })
        .set("#loader", { display: "none" });
    })();

    /* ============ GENERIC REVEALS ============ */
    document.querySelectorAll(".rv").forEach((el) => {
      if (el.id === "heroLede" || el.id === "heroFoot") return;
      if (prefersReduced) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    /* ============ STATS COUNTERS ============ */
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const end = parseInt(el.dataset.count as string, 10);
      const o = { v: end > 100 ? end - 60 : 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(o, {
            v: end,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = String(Math.round(o.v));
            },
          }),
      });
    });

    /* ============ STUDIO IMAGE PARALLAX ============ */
    if (!prefersReduced) {
      gsap.fromTo(
        "#studioImg",
        { scale: 1.18, yPercent: -6 },
        {
          scale: 1,
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: "#studio",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    /* ============ HERO TITLE PARALLAX OUT ============ */
    if (!prefersReduced) {
      gsap.to(".hero__inner", {
        yPercent: -14,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    ScrollTrigger.refresh();
  });

  // --- cleanup ---
  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    if (cursorTick) gsap.ticker.remove(cursorTick);
    if (lenisRaf) gsap.ticker.remove(lenisRaf);
    if (lenis) lenis.destroy();
    gsap.ticker.lagSmoothing(500, 33);
    listeners.forEach(({ t, type, fn, opts }) =>
      t.removeEventListener(type, fn, opts)
    );
    disposables.forEach((d) => {
      try {
        d.dispose();
      } catch {}
    });
    ctx.revert();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
