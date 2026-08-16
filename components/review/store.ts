"use client";

/**
 * TEMPORARY — copywriting review layer.
 *
 * Tiny external store backed by localStorage, read through
 * `useSyncExternalStore`. No login, no backend: everything lives in the
 * reviewer's browser, so the notes travel via the export/import buttons.
 */

export type ReviewComment = {
  id: string;
  sectionId: string;
  author: string;
  text: string;
  createdAt: number;
  resolved: boolean;
};

const COMMENTS_KEY = "mbk.review.comments.v1";
const AUTHOR_KEY = "mbk.review.author.v1";
const ENABLED_KEY = "mbk.review.enabled.v1";

export type ReviewState = {
  comments: ReviewComment[];
  author: string;
  enabled: boolean;
};

const EMPTY: ReviewState = { comments: [], author: "", enabled: true };

let state: ReviewState = EMPTY;
let hydrated = false;

const listeners = new Set<() => void>();
const emit = () => {
  listeners.forEach((l) => l());
};

export function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function getSnapshot(): ReviewState {
  return state;
}

/** SSR + first client render both see EMPTY, so hydration never mismatches. */
export function getServerSnapshot(): ReviewState {
  return EMPTY;
}

function isComment(v: unknown): v is ReviewComment {
  const c = v as ReviewComment;
  return (
    !!c &&
    typeof c.id === "string" &&
    typeof c.sectionId === "string" &&
    typeof c.text === "string"
  );
}

function readComments(): ReviewComment[] {
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isComment).map((c) => ({
      ...c,
      author: typeof c.author === "string" ? c.author : "",
      createdAt: typeof c.createdAt === "number" ? c.createdAt : 0,
      resolved: !!c.resolved,
    }));
  } catch {
    return [];
  }
}

function persist(next: ReviewState) {
  state = next;
  try {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(next.comments));
    localStorage.setItem(AUTHOR_KEY, next.author);
    localStorage.setItem(ENABLED_KEY, next.enabled ? "1" : "0");
  } catch {
    /* private mode / quota — keep working in memory for this session */
  }
  emit();
}

/** Called once from the client after mount. */
export function hydrateStore() {
  if (hydrated) return;
  hydrated = true;
  let author = "";
  let enabled = true;
  try {
    author = localStorage.getItem(AUTHOR_KEY) ?? "";
    enabled = localStorage.getItem(ENABLED_KEY) !== "0";
  } catch {
    /* ignore */
  }
  state = { comments: readComments(), author, enabled };
  emit();

  window.addEventListener("storage", (e) => {
    if (e.key !== COMMENTS_KEY) return;
    state = { ...state, comments: readComments() };
    emit();
  });
}

function newId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function addComment(sectionId: string, text: string, author: string) {
  const body = text.trim();
  if (!body) return;
  const comment: ReviewComment = {
    id: newId(),
    sectionId,
    author: author.trim(),
    text: body,
    createdAt: Date.now(),
    resolved: false,
  };
  persist({
    ...state,
    author: author.trim(),
    comments: [...state.comments, comment],
  });
}

export function updateComment(id: string, text: string) {
  const body = text.trim();
  if (!body) return;
  persist({
    ...state,
    comments: state.comments.map((c) => (c.id === id ? { ...c, text: body } : c)),
  });
}

export function toggleResolved(id: string) {
  persist({
    ...state,
    comments: state.comments.map((c) =>
      c.id === id ? { ...c, resolved: !c.resolved } : c
    ),
  });
}

export function removeComment(id: string) {
  persist({ ...state, comments: state.comments.filter((c) => c.id !== id) });
}

export function clearComments() {
  persist({ ...state, comments: [] });
}

export function setAuthor(author: string) {
  persist({ ...state, author });
}

export function setEnabled(enabled: boolean) {
  persist({ ...state, enabled });
}

export function importComments(json: string): number {
  const parsed: unknown = JSON.parse(json);
  const incoming = Array.isArray(parsed)
    ? parsed
    : (parsed as { comments?: unknown })?.comments;
  if (!Array.isArray(incoming)) throw new Error("Formato inválido");
  const valid = incoming.filter(isComment);
  const byId = new Map(state.comments.map((c) => [c.id, c]));
  valid.forEach((c) => byId.set(c.id, { ...c, resolved: !!c.resolved }));
  const merged = [...byId.values()].sort((a, b) => a.createdAt - b.createdAt);
  persist({ ...state, comments: merged });
  return valid.length;
}

export function exportJSON(): string {
  return JSON.stringify(
    {
      site: "Madalena Beça Knitwear",
      exportedAt: new Date().toISOString(),
      comments: [...state.comments].sort((a, b) => a.createdAt - b.createdAt),
    },
    null,
    2
  );
}
