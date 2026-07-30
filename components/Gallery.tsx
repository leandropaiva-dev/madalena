const ITEMS = [
  { src: "/images/gal-01.jpg", alt: "Editorial knitwear", cap: "Half-zip — charcoal rib" },
  { src: "/images/gal-02.jpg", alt: "Cream sweater", cap: "Crewneck — undyed tones" },
  { src: "/images/gal-03.jpg", alt: "Rust sweater", cap: "Raglan — rust melange" },
  { src: "/images/gal-04.jpg", alt: "Blue knit at sea", cap: "Chunky knit — atlantic blue" },
  { src: "/images/gal-05.jpg", alt: "Knit on rail", cap: "Fisherman rib — moss" },
  { src: "/images/gal-06.jpg", alt: "Grey editorial", cap: "Tailored knit — stone grey" },
  { src: "/images/gal-07.jpg", alt: "Cream pointelle knit", cap: "Pointelle — cream on navy" },
  {
    src: "/images/gal-08.jpg",
    alt: "Kid with pony in fair isle knit",
    cap: "Kidswear — fair isle at golden hour",
  },
  { src: "/images/gal-09.jpg", alt: "Ochre half-zip knit", cap: "Half-zip — ochre rib" },
  { src: "/images/gal-10.jpg", alt: "Kids in a poppy field", cap: "Summer knits — poppy field" },
  { src: "/images/gal-11.jpg", alt: "Folded knitwear", cap: "Flat knits — natural palette" },
];

export default function Gallery() {
  return (
    <section className="gal section" id="gallery">
      <div className="gal__pin" id="galPin">
        <div className="gal__head">
          <h2>
            The MBK <em>Journal</em>
          </h2>
          <div className="gal__head-side">
            <div className="label" style={{ color: "rgba(250,247,241,.4)" }}>
              Notes from the factory floor
            </div>
            <a className="btn btn--light" href="/journal" data-hover="">
              <span>Read the Journal</span>
              <i></i>
            </a>
          </div>
        </div>
        <div className="gal__track" id="galTrack">
          {ITEMS.map((it, i) => (
            <div className="gal__item" key={i}>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.alt} />
              </figure>
              <figcaption>{it.cap}</figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
