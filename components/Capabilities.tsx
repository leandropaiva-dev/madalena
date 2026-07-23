const ITEMS = [
  {
    n: "01",
    title: "Design & Sampling",
    body: "Our studio partners with your team from the first sketch. Every sample is organized, documented and accessible at every stage — a true development partner, not just a supplier.",
  },
  {
    n: "02",
    title: "Knitting",
    body: "Where the magic happens. Programs developed on our STOLL M1plus system, custom-built for each sample, on flat machines with gauges 3, 5, 7, 10 and 12.",
  },
  {
    n: "03",
    title: "Confection",
    body: "Closely connected to knitting, confection is where everything comes together — strong organization and modern machinery upholding the standards our clients expect.",
  },
  {
    n: "04",
    title: "Quality Control",
    body: "Checkpoints at every stage of production monitor consistency and verify compliance — skilled craftsmanship combined with modern technology, delivering reliability and trust.",
  },
  {
    n: "05",
    title: "Fitting & Finishing",
    body: "Measured, shaped, steamed and folded with care. Each garment leaves the atelier ready to represent your brand — precise, calm, complete.",
  },
];

const MEDIA = [
  { src: "/images/cap-design.jpg", alt: "Design and sampling" },
  { src: "/images/cap-knitting.jpg", alt: "STOLL knitting machine" },
  { src: "/images/cap-confection.jpg", alt: "Confection detail" },
  { src: "/images/cap-quality.jpg", alt: "Quality control measuring" },
  { src: "/images/cap-fitting.jpg", alt: "Fitting on mannequin" },
];

export default function Capabilities() {
  return (
    <section className="caps section" id="capabilities">
      <div className="caps__pin" id="capsPin">
        <div className="caps__grid">
          <div>
            <div className="label" style={{ marginBottom: "26px" }}>
              From yarn to garment — our capabilities
            </div>
            <div className="caps__list" id="capsList">
              {ITEMS.map((it, i) => (
                <div
                  className={"caps__item" + (i === 0 ? " is-active" : "")}
                  data-step={i}
                  key={i}
                >
                  <h3>
                    <i>{it.n}</i>
                    {it.title}
                  </h3>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="caps__media" id="capsMedia">
            {MEDIA.map((m, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={m.src}
                alt={m.alt}
                className={i === 0 ? "is-on" : undefined}
                key={i}
              />
            ))}
            <div className="caps__count" id="capsCount">
              01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
