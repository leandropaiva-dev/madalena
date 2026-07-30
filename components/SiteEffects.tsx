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
        const knitTex = texLoader.load("/images/knit-texture.jpg");
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
        on(window, "mousemove", (e) => {
          const me = e as MouseEvent;
          tmx = (me.clientX / innerWidth - 0.5) * 2;
          tmy = (me.clientY / innerHeight - 0.5) * 2;
          ripple = Math.min(1, ripple + 0.022);
        });

        let scrollY = 0;
        on(
          window,
          "scroll",
          () => {
            scrollY = window.scrollY;
          },
          { passive: true }
        );

        const clock = new THREE.Clock();
        const resize = () => {
          renderer.setSize(innerWidth, innerHeight);
          camera.aspect = innerWidth / innerHeight;
          camera.updateProjectionMatrix();
        };
        on(window, "resize", resize);
        resize();

        (function tick() {
          rafId = requestAnimationFrame(tick);
          const t = clock.getElapsedTime();
          mx += (tmx - mx) * 0.05;
          my += (tmy - my) * 0.05;
          ripple *= 0.985;
          const amp = prefersReduced ? 0.1 : 0.34 + ripple * 0.5;
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
        })();
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
      const tl = gsap.timeline();
      tl.to(o, {
        v: 100,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          pct.textContent = String(Math.round(o.v)).padStart(2, "0");
          bar.style.transform = `scaleX(${o.v / 100})`;
        },
      })
        .to(
          "#loader",
          { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
          "+=.15"
        )
        .from(
          "#heroTitle .line span",
          { yPercent: 115, duration: 1.15, stagger: 0.12, ease: "power4.out" },
          "-=.45"
        )
        .to(
          "#heroKicker",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=.7"
        )
        .to(
          "#heroSub",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=.55"
        )
        .to(
          "#heroCta",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=.55"
        )
        .set("#loader", { display: "none" });
    })();

    /* ============ GENERIC REVEALS ============ */
    document.querySelectorAll(".rv").forEach((el) => {
      if (el.id === "heroKicker" || el.id === "heroSub" || el.id === "heroCta")
        return;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    /* ============ MANIFESTO WORD REVEAL ============ */
    (() => {
      const p = document.getElementById("manifestoTxt");
      if (!p) return;
      const nodes = [...p.childNodes];
      p.innerHTML = "";
      nodes.forEach((n) => {
        if (n.nodeType === 3) {
          (n.textContent || "")
            .split(/\s+/)
            .filter(Boolean)
            .forEach((w) => {
              const s = document.createElement("span");
              s.className = "w";
              s.textContent = w;
              p.appendChild(s);
              p.appendChild(document.createTextNode(" "));
            });
        } else if (n.nodeType === 1) {
          (n as HTMLElement).classList.add("w");
          p.appendChild(n);
          p.appendChild(document.createTextNode(" "));
        }
      });
      gsap.to(p.querySelectorAll(".w"), {
        opacity: 1,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: p,
          start: "top 78%",
          end: "bottom 45%",
          scrub: true,
        },
      });
    })();

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

    /* ============ FAN SLIDER ============ */
    (() => {
      const cards = [
        ...document.querySelectorAll<HTMLElement>(".fan__card"),
      ];
      const stage = document.getElementById("fanStage");
      const wordEl = document.getElementById("fanWord");
      const microEl = document.getElementById("fanMicro");
      const dotsWrap = document.getElementById("fanDots");
      if (!stage || !wordEl || !microEl || !dotsWrap || !cards.length) return;
      const DATA = [
        { w: "women", m: "soft volumes, precise lines." },
        { w: "men", m: "structured, calm, essential." },
        { w: "baby", m: "tiny stitches, endless care." },
        { w: "kids", m: "playful knits, made to last." },
        { w: "the details", m: "small pieces, full character." },
      ];
      const N = cards.length;
      let active = 0,
        animating = false;

      DATA.forEach((_, i) => {
        const d = document.createElement("div");
        d.className = "fan__dot" + (i === 0 ? " is-on" : "");
        d.dataset.hover = "";
        d.addEventListener("click", () => go(i));
        dotsWrap.appendChild(d);
      });
      const dots = [...dotsWrap.children];

      function layout(animate = true) {
        const stepDeg = isMobile ? 38 : 27;
        const R = isMobile
          ? Math.min(innerWidth * 1.1, 520)
          : Math.min(innerWidth * 0.58, 840);
        cards.forEach((card, i) => {
          let off = i - active;
          if (off > N / 2) off -= N;
          if (off < -N / 2) off += N;
          const abs = Math.abs(off);
          const a = (off * stepDeg * Math.PI) / 180;
          const props = {
            xPercent: -50,
            x: Math.sin(a) * R,
            y: (1 - Math.cos(a)) * R * 1.05,
            rotation: off * (stepDeg * 0.78),
            scale: off === 0 ? 1 : 0.84 - abs * 0.04,
            opacity: abs > 2 ? 0 : off === 0 ? 1 : 0.42,
            zIndex: 10 - abs,
            filter: off === 0 ? "brightness(1)" : "brightness(.45)",
          };
          if (animate && !prefersReduced) {
            gsap.to(card, { ...props, duration: 1.05, ease: "power4.inOut" });
          } else gsap.set(card, props);
          card.classList.toggle("is-active", off === 0);
        });
      }

      function swapText(i: number) {
        gsap.to([wordEl, microEl], {
          yPercent: -60,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => {
            wordEl!.textContent = DATA[i].w;
            microEl!.textContent = DATA[i].m;
            gsap.fromTo(
              [wordEl, microEl],
              { yPercent: 60, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
            );
          },
        });
      }

      function go(i: number) {
        if (animating || i === active) return;
        animating = true;
        active = ((i % N) + N) % N;
        layout();
        swapText(active);
        dots.forEach((d, k) => d.classList.toggle("is-on", k === active));
        setTimeout(() => (animating = false), 750);
      }

      document
        .getElementById("fanNext")!
        .addEventListener("click", () => go(active + 1));
      document
        .getElementById("fanPrev")!
        .addEventListener("click", () => go(active - 1));
      let sx: number | null = null;
      on(
        stage,
        "touchstart",
        (e) => (sx = (e as TouchEvent).touches[0].clientX),
        { passive: true }
      );
      on(
        stage,
        "touchend",
        (e) => {
          if (sx === null) return;
          const dx = (e as TouchEvent).changedTouches[0].clientX - sx;
          if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
          sx = null;
        },
        { passive: true }
      );
      on(window, "resize", () => layout(false));
      layout(false);

      /* subtle mouse parallax on stage */
      if (!isMobile && !prefersReduced) {
        on(stage, "mousemove", (e) => {
          const me = e as MouseEvent;
          const r = stage.getBoundingClientRect();
          const nx = (me.clientX - r.left) / r.width - 0.5;
          gsap.to(stage, { x: nx * 18, duration: 0.8, ease: "power2.out" });
        });
        on(stage, "mouseleave", () =>
          gsap.to(stage, { x: 0, duration: 0.8 })
        );
      }
    })();

    /* ============ CAPABILITIES PINNED SEQUENCE ============ */
    (() => {
      const items = [
        ...document.querySelectorAll<HTMLElement>(".caps__item"),
      ];
      const imgs = [
        ...document.querySelectorAll<HTMLElement>(".caps__media img"),
      ];
      const count = document.getElementById("capsCount");
      if (!items.length || !count) return;
      let current = 0;
      function setStep(i: number) {
        if (i === current) return;
        current = i;
        items.forEach((el, k) => el.classList.toggle("is-active", k === i));
        imgs.forEach((el, k) => el.classList.toggle("is-on", k === i));
        count!.textContent = String(i + 1).padStart(2, "0");
      }
      items.forEach((el, i) =>
        el.addEventListener("click", () => setStep(i))
      );
      ScrollTrigger.create({
        trigger: "#capsPin",
        start: "top top",
        end: "+=" + items.length * 85 + "%",
        pin: true,
        scrub: true,
        onUpdate: (self) =>
          setStep(
            Math.min(items.length - 1, Math.floor(self.progress * items.length))
          ),
      });
    })();

    /* ============ CERTS PARALLAX ============ */
    if (document.getElementById("certsBg")) {
      gsap.to("#certsBg", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: "#responsibility",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    /* ============ STUDIO IMAGE PARALLAX ============ */
    if (document.getElementById("studioImg")) {
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

    /* ============ HORIZONTAL GALLERY ============ */
    (() => {
      const track = document.getElementById("galTrack");
      const pin = document.getElementById("galPin");
      if (!track || !pin) return;
      const dist = () => Math.max(0, track.scrollWidth - innerWidth);
      gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => "+=" + (dist() + innerHeight * 0.2),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    })();

    /* ============ HERO TITLE PARALLAX OUT ============ */
    if (document.querySelector(".hero__inner")) {
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
