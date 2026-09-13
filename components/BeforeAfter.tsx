"use client";

// TEMPORARY — client review tool. Floating toggle so the client can compare
// the live production site ("antes") with our in-progress V4 ("depois").
// Remove before launch (and drop it from the homepage).

import { useEffect, useState } from "react";

const PROD_URL = "https://madalenaknitwear.vercel.app/";
const STORAGE_KEY = "mbk-review-view";

type Mode = "before" | "after";

export default function BeforeAfter() {
  const [mode, setMode] = useState<Mode>("after");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "before" || saved === "after") setMode(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, ready]);

  const showBefore = mode === "before";

  return (
    <>
      {/* Kept mounted at all times so it loads once and preserves scroll
          position — just shown/hidden instead of re-created on toggle. */}
      {ready && (
        <iframe
          src={PROD_URL}
          title="Site em produção (versão atual)"
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            background: "#f2ede4",
            zIndex: 4000,
            opacity: showBefore ? 1 : 0,
            visibility: showBefore ? "visible" : "hidden",
            pointerEvents: showBefore ? "auto" : "none",
            transition: "opacity .2s ease",
          }}
        />
      )}

      <div
        style={{
          position: "fixed",
          bottom: "22px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4001,
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "6px",
          borderRadius: "40px",
          background: "rgba(28,25,19,.88)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,.28)",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <span
          style={{
            color: "rgba(250,247,241,.45)",
            fontSize: "9.5px",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            padding: "0 10px 0 12px",
          }}
        >
          Ver
        </span>
        <Segment
          active={showBefore}
          label="Antes"
          sub="produção"
          onClick={() => setMode("before")}
        />
        <Segment
          active={!showBefore}
          label="Depois"
          sub="novo"
          onClick={() => setMode("after")}
        />
      </div>
    </>
  );
}

function Segment({
  active,
  label,
  sub,
  onClick,
}: {
  active: boolean;
  label: string;
  sub: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1px",
        padding: "8px 18px",
        borderRadius: "30px",
        border: "none",
        cursor: "pointer",
        transition: "background .25s ease, color .25s ease",
        background: active ? "#f2ede4" : "transparent",
        color: active ? "#1c1913" : "rgba(250,247,241,.7)",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          letterSpacing: ".12em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "8.5px",
          letterSpacing: ".14em",
          textTransform: "uppercase",
          opacity: 0.55,
        }}
      >
        {sub}
      </span>
    </button>
  );
}
