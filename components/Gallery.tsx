import Link from "next/link";
import { getAllPosts } from "@/lib/journal";

export default function Gallery() {
  const posts = getAllPosts();

  return (
    <section className="gal section" id="gallery">
      <div className="gal__pin" id="galPin">
        <div className="gal__head">
          <h2>
            From the <em>Journal</em>
          </h2>
          <div className="label" style={{ color: "rgba(250,247,241,.4)" }}>
            Drag through our stories —
          </div>
        </div>
        <div className="gal__track" id="galTrack">
          {posts.map((post, i) => (
            <Link className="gal__item" href={`/journal/${post.slug}`} key={post.slug} data-hover="">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.cover} alt={post.title} />
              </figure>
              <figcaption>
                {post.category} — {post.title}
              </figcaption>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
