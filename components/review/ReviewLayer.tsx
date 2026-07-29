"use client";

/**
 * TEMPORARY — copywriting review layer.
 *
 * Adds a comment badge to every reviewable section plus a floating dock to
 * show/hide the whole thing. No login: comments are kept in the reviewer's
 * localStorage and travel out through "Exportar".
 *
 * Delete `components/review/`, the `<ReviewLayer />` in app/page.tsx and the
 * `id="why"` on Why.tsx to remove it entirely.
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { REVIEW_SECTIONS, SECTION_LABELS, type ReviewSection } from "./sections";
import {
  addComment,
  clearComments,
  exportJSON,
  getServerSnapshot,
  getSnapshot,
  hydrateStore,
  importComments,
  removeComment,
  setEnabled,
  subscribe,
  toggleResolved,
  type ReviewComment,
} from "./store";
import "./review.css";

type Anchor = { section: ReviewSection; host: HTMLElement };

export default function ReviewLayer() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [mounted, setMounted] = useState(false);
  const [anchors, setAnchors] = useState<Anchor[]>([]);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    hydrateStore();
    setMounted(true);
  }, []);

  // Attach a positioning host inside each section rather than editing every
  // component — keeps the GSAP/ScrollTrigger markup untouched.
  useEffect(() => {
    if (!mounted) return;
    const created: Anchor[] = [];
    REVIEW_SECTIONS.forEach((section) => {
      const target = document.getElementById(section.id);
      if (!target) return;
      if (getComputedStyle(target).position === "static") {
        target.style.position = "relative";
      }
      const host = document.createElement("div");
      host.className = "rvw-anchor";
      host.dataset.section = section.id;
      target.appendChild(host);
      created.push({ section, host });
    });
    setAnchors(created);
    return () => {
      created.forEach(({ host }) => host.remove());
    };
  }, [mounted]);

  const openPanel = useCallback((sectionId: string) => {
    setFilter(sectionId);
    setOpenSection(sectionId);
  }, []);

  const closePanel = useCallback(() => setOpenSection(null), []);

  useEffect(() => {
    if (!openSection) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSection, closePanel]);

  const countBySection = useMemo(() => {
    const map: Record<string, number> = {};
    state.comments.forEach((c) => {
      if (c.resolved) return;
      map[c.sectionId] = (map[c.sectionId] ?? 0) + 1;
    });
    return map;
  }, [state.comments]);

  const openCount = state.comments.filter((c) => !c.resolved).length;

  if (!mounted) return null;

  return (
    <>
      {state.enabled &&
        anchors.map(({ section, host }) =>
          createPortal(
            <button
              type="button"
              className={`rvw-badge${openSection === section.id ? " is-active" : ""}`}
              onClick={() => openPanel(section.id)}
              aria-label={`Comentários — ${section.label}`}
            >
              {section.label}
              <span
                className={`rvw-badge__count${
                  countBySection[section.id] ? "" : " is-zero"
                }`}
              >
                {countBySection[section.id] ?? 0}
              </span>
            </button>,
            host,
            section.id
          )
        )}

      <div className="rvw-dock">
        {state.enabled && !openSection && (
          <button
            type="button"
            className="rvw-btn"
            onClick={() => {
              setFilter("all");
              setOpenSection("all");
            }}
          >
            Todos os comentários ({openCount})
          </button>
        )}
        <button
          type="button"
          className={`rvw-btn${state.enabled ? " is-on" : ""}`}
          onClick={() => {
            const next = !state.enabled;
            setEnabled(next);
            if (!next) closePanel();
          }}
          aria-pressed={state.enabled}
        >
          <span className="rvw-dot" />
          Comentários {state.enabled ? "on" : "off"}
        </button>
      </div>

      {state.enabled && openSection && (
        <Panel
          comments={state.comments}
          author={state.author}
          filter={filter}
          onFilter={setFilter}
          countBySection={countBySection}
          onClose={closePanel}
        />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */

function Panel({
  comments,
  author,
  filter,
  onFilter,
  countBySection,
  onClose,
}: {
  comments: ReviewComment[];
  author: string;
  filter: string;
  onFilter: (v: string) => void;
  countBySection: Record<string, number>;
  onClose: () => void;
}) {
  const [name, setName] = useState(author);
  const [text, setText] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => setName(author), [author]);

  const targetSection = filter === "all" ? REVIEW_SECTIONS[0].id : filter;

  const visible = useMemo(() => {
    const list = filter === "all" ? comments : comments.filter((c) => c.sectionId === filter);
    return [...list].sort((a, b) => b.createdAt - a.createdAt);
  }, [comments, filter]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addComment(targetSection, text, name);
    setText("");
  };

  const goTo = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const download = () => {
    const blob = new Blob([exportJSON()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mbk-copy-review.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const n = importComments(await file.text());
      window.alert(`${n} comentário(s) importado(s).`);
    } catch {
      window.alert("Não foi possível ler esse ficheiro.");
    }
    e.target.value = "";
  };

  return (
    <aside className="rvw-panel" aria-label="Painel de revisão de copy">
      <div className="rvw-panel__head">
        <div>
          <div className="rvw-panel__title">Revisão de copy</div>
          <span className="rvw-panel__sub">
            {visible.length} comentário{visible.length === 1 ? "" : "s"}
          </span>
        </div>
        <button type="button" className="rvw-close" onClick={onClose}>
          Fechar
        </button>
      </div>

      <div className="rvw-tabs" data-lenis-prevent>
        <button
          type="button"
          className={`rvw-tab${filter === "all" ? " is-active" : ""}`}
          onClick={() => onFilter("all")}
        >
          Todas
        </button>
        {REVIEW_SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`rvw-tab${filter === s.id ? " is-active" : ""}`}
            onClick={() => {
              onFilter(s.id);
              goTo(s.id);
            }}
          >
            {s.label}
            {countBySection[s.id] ? <sup>{countBySection[s.id]}</sup> : null}
          </button>
        ))}
      </div>

      <div className="rvw-list" data-lenis-prevent>
        {visible.length === 0 && (
          <p className="rvw-empty">
            Ainda sem comentários{filter === "all" ? "" : " nesta secção"}. Escreve
            a anotação abaixo — fica guardada neste browser.
          </p>
        )}
        {visible.map((c) => (
          <article
            key={c.id}
            className={`rvw-item${c.resolved ? " is-resolved" : ""}`}
          >
            <div className="rvw-item__meta">
              <span className="rvw-item__author">{c.author || "Anónimo"}</span>
              <span>{formatDate(c.createdAt)}</span>
              <button
                type="button"
                className="rvw-item__where"
                onClick={() => goTo(c.sectionId)}
              >
                {SECTION_LABELS[c.sectionId] ?? c.sectionId}
              </button>
            </div>
            <div className="rvw-item__text">{c.text}</div>
            <div className="rvw-item__actions">
              <button
                type="button"
                className="rvw-link"
                onClick={() => toggleResolved(c.id)}
              >
                {c.resolved ? "Reabrir" : "Resolver"}
              </button>
              <button
                type="button"
                className="rvw-link rvw-link--danger"
                onClick={() => removeComment(c.id)}
              >
                Apagar
              </button>
            </div>
          </article>
        ))}
      </div>

      <form className="rvw-form" onSubmit={submit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="O teu nome (opcional)"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Anotação para “${SECTION_LABELS[targetSection]}”…`}
        />
        <div className="rvw-form__row">
          <span className="rvw-hint">
            Secção: {SECTION_LABELS[targetSection]}
          </span>
          <button type="submit" className="rvw-submit" disabled={!text.trim()}>
            Adicionar
          </button>
        </div>
      </form>

      <div className="rvw-tools">
        <button type="button" className="rvw-link" onClick={download}>
          Exportar JSON
        </button>
        <button
          type="button"
          className="rvw-link"
          onClick={() => fileRef.current?.click()}
        >
          Importar
        </button>
        <button
          type="button"
          className="rvw-link rvw-link--danger"
          onClick={() => {
            if (window.confirm("Apagar todos os comentários deste browser?")) {
              clearComments();
            }
          }}
        >
          Limpar tudo
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={onImportFile}
        />
      </div>
    </aside>
  );
}

function formatDate(ts: number) {
  if (!ts) return "";
  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ts));
}
