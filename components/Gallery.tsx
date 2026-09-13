import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/journal";

export default function Gallery() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="gal section" id="gallery">
      <div className="gal__head">
        <div>
          <div className="label" style={{ color: "rgba(250,247,241,.82)" }}>
            The Journal
          </div>
          <h2 className="gal__title">
            From the <em>Journal.</em>
          </h2>
          <p className="gal__sub">
            Technical knowledge, materials, responsible manufacturing and
            perspectives from inside MBK.
          </p>
        </div>
        <Link href="/journal" className="gal__link" data-hover="">
          Explore all articles
        </Link>
      </div>

      <div className="gal__grid">
        {posts.map((post) => (
          <Link
            className="gal__item"
            href={`/journal/${post.slug}`}
            key={post.slug}
            data-hover=""
          >
            <figure>
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <figcaption>
              {post.category} — {post.title}
            </figcaption>
          </Link>
        ))}
      </div>
    </section>
  );
}
