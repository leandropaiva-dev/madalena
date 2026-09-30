import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/journal/ArticleCard";
import {
  formatDate,
  getAllPosts,
  getPost,
  getRelated,
} from "@/lib/journal";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Journal — Madalena Beça Knitwear" };
  return {
    title: `${post.title} — Journal — Madalena Beça Knitwear`,
    description: post.excerpt,
    alternates: {
      canonical: `/journal/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [post.cover],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = getRelated(post.slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/journal/${post.slug}`,
  };

  return (
    <article className="jr-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="jr-article__head">
        <div className="jr-article__meta">
          <span className="jr-card__cat">{post.category}</span>
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime} read</span>
        </div>
        <h1 className="jr-article__title">{post.title}</h1>
        <p className="jr-article__lede">{post.excerpt}</p>
        <div className="jr-article__author">By {post.author}</div>
      </header>

      <div className="jr-article__cover">
        {post.coverVideo ? (
          <video
            src={post.coverVideo}
            poster={post.cover}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover} alt={post.title} />
        )}
      </div>

      <div className="jr-article__body">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {post.pullQuote && (
          <blockquote className="jr-quote">{post.pullQuote}</blockquote>
        )}
      </div>

      {post.gallery && post.gallery.length > 0 && (
        <div className="jr-article__gallery">
          {post.gallery.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={`${post.title} — photo ${i + 1}`} loading="lazy" />
          ))}
        </div>
      )}

      <section className="jr-more">
        <div className="sect-head">
          <span className="sect-head__num">More entries</span>
          <h2 className="sect-head__title">
            Keep <em>reading</em>
          </h2>
        </div>
        <div className="jr-grid">
          {related.map((p, i) => (
            <ArticleCard post={p} index={i} key={p.slug} />
          ))}
        </div>
      </section>
    </article>
  );
}
