import Link from "next/link";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import { categories, type Category, type JournalPost } from "@/lib/journal";

function tabHref(category?: Category): string {
  return category ? `/journal?category=${encodeURIComponent(category)}` : "/journal";
}

export default function JournalListing({
  posts,
  category,
  page,
  totalPages,
}: {
  posts: JournalPost[];
  category?: Category;
  page: number;
  totalPages: number;
}) {
  const tabs: Array<{ label: string; value?: Category }> = [
    { label: "All" },
    ...categories.map((c) => ({ label: c, value: c })),
  ];

  return (
    <section className="jr">
      <header className="jr-hero">
        <div className="label rv">Journal</div>
        <h1 className="jr-hero__title rv">
          Notes on knitwear, manufacturing and{" "}
          <em>what we learn along the way.</em>
        </h1>
        <p className="jr-hero__sub rv">
          Technical knowledge, materials, responsible manufacturing and
          perspectives from inside Madalena Beça Knitwear.
        </p>
        <p className="jr-hero__sub rv">
          A place to share what is worth knowing — and occasionally, what is
          new.
        </p>
      </header>

      <div className="jr-filter" aria-label="Categories">
        {tabs.map((t) => (
          <Link
            key={t.label}
            href={tabHref(t.value)}
            className={"jr-pill" + (category === t.value ? " is-active" : "")}
            aria-current={category === t.value ? "page" : undefined}
            data-hover=""
          >
            {t.label}
          </Link>
        ))}
      </div>

      <div className="jr-grid">
        {posts.map((post, i) => (
          <ArticleCard post={post} index={i} key={post.slug} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} category={category} />
    </section>
  );
}
