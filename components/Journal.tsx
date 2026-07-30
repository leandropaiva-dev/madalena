/**
 * Journal — static for now.
 *
 * POSTS is hardcoded placeholder content so the page and its layout exist.
 * When a publishing system is chosen (MDX files or a CMS), replace this array
 * with the real source; the markup below stays as-is.
 */
const POSTS = [
  {
    date: "Placeholder",
    kicker: "Development",
    title: "Article title goes here",
    excerpt:
      "Placeholder excerpt. Two or three lines describing the piece, at roughly the length the real articles will run to.",
  },
  {
    date: "Placeholder",
    kicker: "Yarn",
    title: "Article title goes here",
    excerpt:
      "Placeholder excerpt. Two or three lines describing the piece, at roughly the length the real articles will run to.",
  },
  {
    date: "Placeholder",
    kicker: "Inside the factory",
    title: "Article title goes here",
    excerpt:
      "Placeholder excerpt. Two or three lines describing the piece, at roughly the length the real articles will run to.",
  },
];

export default function Journal() {
  return (
    <section className="journal section" id="journal">
      <div className="sect-head">
        <span className="sect-head__num">Journal</span>
        <h2 className="sect-head__title">
          Notes from <em>the factory floor</em>.
        </h2>
      </div>
      <div className="journal__grid">
        {POSTS.map((p, i) => (
          <article className="journal__item rv" key={i}>
            <div className="journal__meta">
              <span className="label">{p.kicker}</span>
              <span className="journal__date">{p.date}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
