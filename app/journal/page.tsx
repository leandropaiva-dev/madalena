import type { Metadata } from "next";
import JournalListing from "@/components/journal/JournalListing";
import { categories, getPosts, type Category } from "@/lib/journal";

type SearchParams = { category?: string; page?: string };

function parse(searchParams: SearchParams) {
  const category = categories.includes(searchParams.category as Category)
    ? (searchParams.category as Category)
    : undefined;
  const page = Math.max(1, parseInt(searchParams.page ?? "1", 10) || 1);
  return { category, page };
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Metadata {
  const { category, page } = parse(searchParams);
  let title = category ? `Journal · ${category}` : "Journal";
  if (page > 1) title += ` · Page ${page}`;
  return {
    title: `${title} — Madalena Beça Knitwear`,
    description:
      "Notes from the atelier — partnerships, craft and news from Madalena Beça Knitwear.",
  };
}

export default function JournalPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { category, page: requested } = parse(searchParams);
  const { posts, page, totalPages } = getPosts({ category, page: requested });

  return (
    <JournalListing
      posts={posts}
      category={category}
      page={page}
      totalPages={totalPages}
    />
  );
}
