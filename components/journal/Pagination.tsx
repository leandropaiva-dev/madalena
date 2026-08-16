import Link from "next/link";
import type { Category } from "@/lib/journal";

function hrefFor(category: Category | undefined, page: number): string {
  const p = new URLSearchParams();
  if (category) p.set("category", category);
  if (page > 1) p.set("page", String(page));
  const qs = p.toString();
  return qs ? `/journal?${qs}` : "/journal";
}

/** [1, …, 4, 5, 6, …, 12] — first, last, and a window around the current page. */
function windowed(current: number, total: number): Array<number | "…"> {
  const out: Array<number | "…"> = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - current) <= 1) {
      out.push(i);
    } else if (out[out.length - 1] !== "…") {
      out.push("…");
    }
  }
  return out;
}

export default function Pagination({
  page,
  totalPages,
  category,
}: {
  page: number;
  totalPages: number;
  category?: Category;
}) {
  if (totalPages <= 1) return null;
  const items = windowed(page, totalPages);

  return (
    <nav className="jr-pag" aria-label="Pagination">
      {page > 1 && (
        <Link
          className="jr-pag__arrow"
          href={hrefFor(category, page - 1)}
          data-hover=""
          aria-label="Previous page"
          rel="prev"
        >
          ←
        </Link>
      )}
      {items.map((it, idx) =>
        it === "…" ? (
          <span className="jr-pag__gap" key={`gap-${idx}`}>
            …
          </span>
        ) : (
          <Link
            key={it}
            className={"jr-pag__num" + (it === page ? " is-active" : "")}
            href={hrefFor(category, it)}
            data-hover=""
            aria-current={it === page ? "page" : undefined}
          >
            {String(it).padStart(2, "0")}
          </Link>
        )
      )}
      {page < totalPages && (
        <Link
          className="jr-pag__arrow"
          href={hrefFor(category, page + 1)}
          data-hover=""
          aria-label="Next page"
          rel="next"
        >
          →
        </Link>
      )}
    </nav>
  );
}
