"use client";

/**
 * TEMPORARY — copy-review overlay, on every page.
 *
 * Auto-detects sections (no per-page config), drops a comment badge on each,
 * and stores notes in Supabase (shared across reviewers, live). Toggle with the
 * dock at bottom-left; the on/off preference is per-browser (localStorage).
 *
 * Remove `components/review/` and the `<ReviewLayer />` in app/layout.tsx to
 * take it out entirely.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import {
  addComment,
  deleteComment,
  fetchComments,
  reviewEnabled,
  setResolved,
  subscribe,
  type ReviewComment,
} from "./store";
import "./review.css";

type Anchor = { key: string; label: string; el: HTMLElement; host: HTMLElement };

const AUTHOR_KEY = "mbk.review.author";
const ENABLED_KEY = "mbk.review.enabled";

function slug(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40);
}

function labelOf(el: HTMLElement): string {
  const t = el
    .querySelector("h1,h2,h3")
    ?.textContent?.replace(/\s+/g, " ")
    .trim();
  if (t) return t.length > 34 ? t.slice(0, 34) + "…" : t;
  return el.id || "Section";
}

export default function ReviewLayer() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabledState] = useState(true);
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState<ReviewComment[]>([]);
  const [anchors, setAnchors] = useState<Anchor[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [text, setText] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      setAuthor(localStorage.getItem(AUTHOR_KEY) ?? "");
      setEnabledState(localStorage.getItem(ENABLED_KEY) !== "0");
    } catch {
      /* private mode */
    }
  }, []);

  const setEnabled = useCallback((v: boolean) => {
    setEnabledState(v);
    try {
      localStorage.setItem(ENABLED_KEY, v ? "1" : "0");
    } catch {
      /* ignore */
    }
    if (!v) setPanelOpen(false);
  }, []);

  // Load + subscribe to comments for the current path.
  const reload = useCallback(() => {
    fetchComments(pathname).then(setComments);
  }, [pathname]);

  useEffect(() => {
    if (!mounted || !reviewEnabled) return;
    reload();
    return subscribe(pathname, reload);
  }, [mounted, pathname, reload]);

  // Detect sections and attach a badge host to each (waits for paint).
  useEffect(() => {
    if (!mounted || !enabled || !reviewEnabled || pathname === "/comments") {
      setAnchors([]);
      return;
    }
    let created: Anchor[] = [];
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const els = Array.from(
          document.querySelectorAll<HTMLElement>(
            "section, header.hero, header.jr"
          )
        ).filter((el) => el.offsetHeight > 40 && !el.closest(".navmenu"));
        const seen = new Set<string>();
        created = els.map((el, i) => {
          let key = el.id || slug(labelOf(el)) || `sec-${i}`;
          while (seen.has(key)) key = `${key}-${i}`;
          seen.add(key);
          if (getComputedStyle(el).position === "static")
            el.style.position = "relative";
          const host = document.createElement("div");
          host.className = "rvw-host";
          el.appendChild(host);
          return { key, label: labelOf(el), el, host };
        });
        setAnchors(created);
      })
    );
    return () => {
      cancelAnimationFrame(raf);
      created.forEach((a) => a.host.remove());
    };
  }, [mounted, enabled, pathname]);

  const countBy = useMemo(() => {
    const m: Record<string, number> = {};
    comments.forEach((c) => {
      if (!c.resolved) m[c.section] = (m[c.section] ?? 0) + 1;
    });
    return m;
  }, [comments]);

  const openCount = comments.filter((c) => !c.resolved).length;

  const targetKey = filter === "all" ? anchors[0]?.key ?? "page" : filter;
  const targetLabel =
    anchors.find((a) => a.key === targetKey)?.label ?? targetKey;

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const body = text.trim();
      if (!body) return;
      try {
        localStorage.setItem(AUTHOR_KEY, author.trim());
      } catch {
        /* ignore */
      }
      const created = await addComment({
        path: pathname,
        section: targetKey,
        section_label: targetLabel,
        author,
        body,
      });
      setText("");
      if (created) setComments((cur) => [created, ...cur]);
    },
    [text, author, pathname, targetKey, targetLabel]
  );

  if (!mounted || !reviewEnabled || pathname === "/comments") return null;

  const visible =
    filter === "all" ? comments : comments.filter((c) => c.section === filter);

  return (
    <>
      {enabled &&
        anchors.map((a) =>
          createPortal(
            <button
              className={"rvw-badge" + (countBy[a.key] ? " has" : "")}
              onClick={() => {
                setFilter(a.key);
                setPanelOpen(true);
              }}
              title={`Comment — ${a.label}`}
            >
              <span className="rvw-badge__dot" />
              {countBy[a.key] ?? 0}
            </button>,
            a.host,
            a.key
          )
        )}

      <div className="rvw-dock">
        {enabled && (
          <button
            className="rvw-dock__all"
            onClick={() => {
              setFilter("all");
              setPanelOpen(true);
            }}
          >
            {openCount} comment{openCount === 1 ? "" : "s"}
          </button>
        )}
        <button
          className={"rvw-dock__toggle" + (enabled ? " on" : "")}
          onClick={() => setEnabled(!enabled)}
        >
          <span className="rvw-dock__led" />
          Review {enabled ? "on" : "off"}
        </button>
      </div>

      {enabled && panelOpen && (
        <aside className="rvw-panel" data-lenis-prevent>
          <header className="rvw-panel__head">
            <div>
              <div className="rvw-panel__title">Copy review</div>
              <div className="rvw-panel__sub">{pathname}</div>
            </div>
            <button className="rvw-x" onClick={() => setPanelOpen(false)}>
              Close
            </button>
          </header>

          <div className="rvw-tabs">
            <button
              className={"rvw-tab" + (filter === "all" ? " on" : "")}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            {anchors.map((a) => (
              <button
                key={a.key}
                className={"rvw-tab" + (filter === a.key ? " on" : "")}
                onClick={() => {
                  setFilter(a.key);
                  a.el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {a.label}
                {countBy[a.key] ? ` (${countBy[a.key]})` : ""}
              </button>
            ))}
          </div>

          <div className="rvw-list">
            {visible.length === 0 && (
              <p className="rvw-empty">
                No comments yet on this {filter === "all" ? "page" : "section"}.
                Write a note below — it&rsquo;s saved for everyone.
              </p>
            )}
            {visible.map((c) => (
              <article
                key={c.id}
                className={"rvw-item" + (c.resolved ? " done" : "")}
              >
                <div className="rvw-item__meta">
                  <b>{c.author || "Anon"}</b>
                  <span>
                    {new Date(c.created_at).toLocaleString("pt-PT", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <em>{c.section_label ?? c.section}</em>
                </div>
                <p className="rvw-item__body">{c.body}</p>
                <div className="rvw-item__act">
                  <button
                    onClick={async () => {
                      await setResolved(c.id, !c.resolved);
                      setComments((cur) =>
                        cur.map((x) =>
                          x.id === c.id ? { ...x, resolved: !x.resolved } : x
                        )
                      );
                    }}
                  >
                    {c.resolved ? "Reopen" : "Resolve"}
                  </button>
                  <button
                    className="danger"
                    onClick={async () => {
                      await deleteComment(c.id);
                      setComments((cur) => cur.filter((x) => x.id !== c.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>

          <form className="rvw-form" onSubmit={submit}>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your name"
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Note for “${targetLabel}”…`}
            />
            <div className="rvw-form__row">
              <span>Section: {targetLabel}</span>
              <button type="submit" disabled={!text.trim()}>
                Add
              </button>
            </div>
          </form>
        </aside>
      )}
    </>
  );
}
