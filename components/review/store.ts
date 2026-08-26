"use client";

/**
 * TEMPORARY — copy-review layer, Supabase-backed.
 * One table (`review_comments`) shared across reviewers. Comments are keyed by
 * page path + section. Remove `components/review/`, the `<ReviewLayer />` in
 * app/layout.tsx, and the Supabase table before launch.
 */

import { supabase } from "@/lib/supabase";

export const reviewEnabled = !!supabase;

export type ReviewComment = {
  id: string;
  path: string;
  section: string;
  section_label: string | null;
  author: string;
  body: string;
  resolved: boolean;
  created_at: string;
};

export async function fetchComments(path: string): Promise<ReviewComment[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("review_comments")
    .select("*")
    .eq("path", path)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("[review] fetch:", error.message);
    return [];
  }
  return (data ?? []) as ReviewComment[];
}

/** Every comment across all pages — for the /comments dashboard. */
export async function fetchAllComments(): Promise<ReviewComment[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("review_comments")
    .select("*")
    .order("path", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) {
    console.error("[review] fetchAll:", error.message);
    return [];
  }
  return (data ?? []) as ReviewComment[];
}

export async function addComment(input: {
  path: string;
  section: string;
  section_label: string;
  author: string;
  body: string;
}): Promise<ReviewComment | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("review_comments")
    .insert({
      path: input.path,
      section: input.section,
      section_label: input.section_label,
      author: input.author.trim(),
      body: input.body.trim(),
    })
    .select("*")
    .single();
  if (error) {
    console.error("[review] add:", error.message);
    return null;
  }
  return data as ReviewComment;
}

export async function setResolved(id: string, resolved: boolean): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase
    .from("review_comments")
    .update({ resolved })
    .eq("id", id);
  if (error) console.error("[review] resolve:", error.message);
}

export async function deleteComment(id: string): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase
    .from("review_comments")
    .delete()
    .eq("id", id);
  if (error) console.error("[review] delete:", error.message);
}

/** Live updates: re-run `onChange` whenever this path's comments change. */
export function subscribe(path: string, onChange: () => void): () => void {
  const client = supabase;
  if (!client) return () => {};
  const channel = client
    .channel(`review:${path}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "review_comments",
        filter: `path=eq.${path}`,
      },
      onChange
    )
    .subscribe();
  return () => {
    void client.removeChannel(channel);
  };
}

/** Live updates for every page (used by the /comments dashboard). */
export function subscribeAll(onChange: () => void): () => void {
  const client = supabase;
  if (!client) return () => {};
  const channel = client
    .channel("review:all")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "review_comments" },
      onChange
    )
    .subscribe();
  return () => {
    void client.removeChannel(channel);
  };
}
