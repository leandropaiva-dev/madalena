import Link from "next/link";
import { formatDate, type JournalPost } from "@/lib/journal";

export default function ArticleCard({
  post,
  index = 0,
}: {
  post: JournalPost;
  index?: number;
}) {
  return (
    <Link
      className="jr-card"
      href={`/journal/${post.slug}`}
      data-hover=""
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="jr-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="jr-card__meta">
        <span className="jr-card__cat">{post.category}</span>
        <span>{formatDate(post.date)}</span>
      </div>
      <h3 className="jr-card__title">{post.title}</h3>
      <p className="jr-card__excerpt">{post.excerpt}</p>
    </Link>
  );
}
