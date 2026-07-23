const CARDS = [
  { src: "/images/craft-women.jpg", alt: "Womenswear knit", cap: "Womenswear" },
  { src: "/images/craft-men.jpg", alt: "Menswear knit", cap: "Menswear" },
  { src: "/images/craft-baby.jpg", alt: "Babywear knit", cap: "Baby" },
  { src: "/images/craft-kids.jpg", alt: "Kidswear knit", cap: "Kidswear" },
  {
    src: "/images/craft-accessories.jpg",
    alt: "Knit accessories",
    cap: "Accessories",
  },
];

export default function FanSlider() {
  return (
    <section className="fan section" id="craft">
      <div className="fan__grain"></div>
      <div className="fan__head">
        <div className="fan__label">The craft — one loop at a time</div>
        <h2 className="fan__title">
          Knitted for{" "}
          <span className="fan__word">
            <span className="fw" id="fanWord">
              women
            </span>
          </span>
        </h2>
        <div className="fan__micro" id="fanMicro">
          soft volumes, precise lines.
        </div>
      </div>
      <div className="fan__stage" id="fanStage">
        {CARDS.map((c, i) => (
          <div className="fan__card" data-i={i} key={i}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.alt} />
              <figcaption>{c.cap}</figcaption>
            </figure>
          </div>
        ))}
        <button
          className="fan__nav fan__nav--prev"
          id="fanPrev"
          data-hover=""
          aria-label="Previous"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M19 12H5m6-7-7 7 7 7" />
          </svg>
        </button>
        <button
          className="fan__nav fan__nav--next"
          id="fanNext"
          data-hover=""
          aria-label="Next"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M5 12h14m-6-7 7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="fan__foot" id="fanDots"></div>
    </section>
  );
}
