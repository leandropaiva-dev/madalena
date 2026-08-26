"use client";

/**
 * TEMPORARY — copy-review dashboard.
 * Reads every comment from Supabase and groups them by page → section.
 * Excluded from the review overlay (see ReviewLayer). Remove with the rest of
 * the review layer before launch.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  deleteComment,
  fetchAllComments,
  reviewEnabled,
  setResolved,
  subscribeAll,
  type ReviewComment,
} from "@/components/review/store";

type Filter = "open" | "resolved" | "all";

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/how-we-work": "How We Work",
  "/studio": "Studio",
  "/sustainability": "Sustainability",
  "/journal": "Journal",
};

const PAGE_ORDER = [
  "/",
  "/about",
  "/how-we-work",
  "/studio",
  "/sustainability",
  "/journal",
];

function pageName(path: string): string {
  if (PAGE_NAMES[path]) return PAGE_NAMES[path];
  if (path.startsWith("/journal/")) return `Journal · ${path.split("/").pop()}`;
  return path;
}

function fmt(iso: string): string {
  return new Date(iso).toLocaleString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CommentsPage() {
  const [comments, setComments] = useState<ReviewComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("open");

  const load = useCallback(() => {
    fetchAllComments().then((c) => {
      setComments(c);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    document.title = "Copy review — comments";
    if (!reviewEnabled) {
      setLoading(false);
      return;
    }
    load();
    return subscribeAll(load);
  }, [load]);

  const stats = useMemo(() => {
    const open = comments.filter((c) => !c.resolved).length;
    return { total: comments.length, open, resolved: comments.length - open };
  }, [comments]);

  const filtered = useMemo(
    () =>
      comments.filter((c) =>
        filter === "all" ? true : filter === "open" ? !c.resolved : c.resolved
      ),
    [comments, filter]
  );

  const groups = useMemo(() => {
    const byPath = new Map<
      string,
      Map<string, { label: string; items: ReviewComment[] }>
    >();
    for (const c of filtered) {
      if (!byPath.has(c.path)) byPath.set(c.path, new Map());
      const secs = byPath.get(c.path)!;
      if (!secs.has(c.section))
        secs.set(c.section, { label: c.section_label ?? c.section, items: [] });
      secs.get(c.section)!.items.push(c);
    }
    const paths = [...byPath.keys()].sort((a, b) => {
      const ia = PAGE_ORDER.indexOf(a);
      const ib = PAGE_ORDER.indexOf(b);
      if (ia !== -1 || ib !== -1)
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
      return a.localeCompare(b);
    });
    return paths.map((p) => ({
      path: p,
      sections: [...byPath.get(p)!.values()],
    }));
  }, [filtered]);

  const openCountFor = useCallback(
    (path: string) =>
      comments.filter((c) => c.path === path && !c.resolved).length,
    [comments]
  );

  const doResolve = async (c: ReviewComment) => {
    await setResolved(c.id, !c.resolved);
    setComments((cur) =>
      cur.map((x) => (x.id === c.id ? { ...x, resolved: !x.resolved } : x))
    );
  };

  const doDelete = async (c: ReviewComment) => {
    if (!window.confirm("Delete this comment?")) return;
    await deleteComment(c.id);
    setComments((cur) => cur.filter((x) => x.id !== c.id));
  };

  return (
    <main className="cmt">
      <header className="cmt-head">
        <div>
          <div className="label">Internal · copy review</div>
          <h1 className="cmt-head__title">Comments</h1>
          <div className="cmt-head__sub">
            <span>
              <b>{stats.open}</b> open
            </span>
            <span>
              <b>{stats.resolved}</b> resolved
            </span>
            <span>
              <b>{stats.total}</b> total
            </span>
          </div>
        </div>
        <div className="cmt-tools">
          {(["open", "all", "resolved"] as Filter[]).map((f) => (
            <button
              key={f}
              className={"cmt-pill" + (filter === f ? " on" : "")}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
          <button className="cmt-pill" onClick={load}>
            Refresh
          </button>
        </div>
      </header>

      {!reviewEnabled && (
        <div className="cmt-state">
          Supabase isn&rsquo;t configured — set NEXT_PUBLIC_SUPABASE_URL and
          NEXT_PUBLIC_SUPABASE_ANON_KEY.
        </div>
      )}

      {reviewEnabled && loading && <div className="cmt-state">Loading…</div>}

      {reviewEnabled && !loading && groups.length === 0 && (
        <div className="cmt-empty">
          No {filter === "all" ? "" : filter + " "}comments yet.
        </div>
      )}

      {groups.map((g) => (
        <section className="cmt-group" key={g.path}>
          <div className="cmt-group__head">
            <span className="cmt-group__name">{pageName(g.path)}</span>
            <a
              className="cmt-group__path"
              href={g.path}
              target="_blank"
              rel="noopener"
            >
              {g.path} ↗
            </a>
            <span className="cmt-group__count">{openCountFor(g.path)} open</span>
          </div>

          {g.sections.map((s, si) => (
            <div className="cmt-sec" key={si}>
              <div className="cmt-sec__label">{s.label}</div>
              {s.items.map((c) => (
                <article
                  className={"cmt-card" + (c.resolved ? " done" : "")}
                  key={c.id}
                >
                  <div className="cmt-card__meta">
                    <b>{c.author || "Anon"}</b>
                    <span>{fmt(c.created_at)}</span>
                    {c.resolved && <span className="cmt-chip">Resolved</span>}
                  </div>
                  <p className="cmt-card__body">{c.body}</p>
                  <div className="cmt-card__act">
                    <button onClick={() => doResolve(c)}>
                      {c.resolved ? "Reopen" : "Resolve"}
                    </button>
                    <button className="danger" onClick={() => doDelete(c)}>
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
