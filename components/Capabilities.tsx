export const ITEMS = [
  {
    n: "01",
    title: "Review & Quotation",
    body: "We begin by reviewing the project and confirming the route forward. Where relevant, technical considerations are raised before sampling begins, while quotation is aligned with the agreed product, yarn and quantities. This creates a clear foundation for development and production.",
  },
  {
    n: "02",
    title: "Development & Sampling",
    body: "Depending on the project, we can work from complete technical specifications or support earlier stages of knitwear development. Sampling brings the product into form, allowing construction, fit and finish to be assessed and refined before production.",
  },
  {
    n: "03",
    title: "Approval & Planning",
    body: "Once the product is approved, we align the requirements for production and plan according to the agreed quantities and delivery window. Where timing allows, we can also explore production outside traditional peak periods — creating greater flexibility for the brand while helping us build more balanced production throughout the year.",
  },
  {
    n: "04",
    title: "Production & Quality Control",
    body: "Production and quality control remain closely connected within our own facilities in Portugal. Each style follows its approved specifications throughout production, with quality monitored across the process before final release.",
  },
  {
    n: "05",
    title: "Delivery & Reorders",
    body: "Following final control, garments are prepared and shipped according to the agreed delivery schedule. For established styles, reorders can build on work already developed and approved, allowing brands to replenish successful products with greater flexibility and, where possible, lower quantities.",
  },
];

export const MEDIA = [
  { src: "/images/cap-design.jpg", alt: "Review and quotation" },
  { src: "/images/cap-knitting.jpg", alt: "Development and sampling" },
  { src: "/images/cap-confection.jpg", alt: "Approval and planning" },
  { src: "/images/cap-quality.jpg", alt: "Production and quality control" },
  { src: "/images/cap-fitting.jpg", alt: "Delivery and reorders" },
];

export default function Capabilities() {
  return (
    <section className="caps section" id="capabilities">
      <div className="caps__pin" id="capsPin">
        <div className="caps__grid">
          <div>
            <div className="label" style={{ marginBottom: "26px" }}>
              From yarn to garment — how we work
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
