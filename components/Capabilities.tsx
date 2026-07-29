const ITEMS = [
  {
    n: "01",
    title: "Feasibility & Quotation",
    body: "We review your brief, including measurements, gauge, construction and intended result, and flag concerns before development starts. Alongside this, we provide an estimated quotation based on yarn, quantities and target parameters, so cost is never a surprise later. This avoids avoidable prototypes and development starting without price awareness.",
  },
  {
    n: "02",
    title: "Yarn & Development",
    body: "We evaluate yarn options, including handfeel, composition, certification, price and availability, against your target and colour needs. Once approved, we move into programming, gauge, structure, fit and assembly. This protects the intended result before it becomes a finished garment.",
  },
  {
    n: "03",
    title: "Approval & Planning",
    body: "You review the prototype and we track every adjustment through to sign-off. With delivery window and yarn confirmed, we plan capacity and timing, including off-peak production where useful. This keeps changes controlled and protects your delivery window.",
  },
  {
    n: "04",
    title: "Production & Quality Control",
    body: "Knitting, washing, linking, sewing, assembly and quality checks happen under one roof, in our own facilities in Portugal. Every piece is checked against approved specifications before it moves forward. One factory, one accountable partner.",
  },
  {
    n: "05",
    title: "Delivery & Reruns",
    body: "Final review, packing and shipment follow your agreed date. Once a style is proven, future runs can build on the existing program and known yarn behaviour, allowing more focused replenishment, subject to yarn availability and schedule.",
  },
];

const MEDIA = [
  { src: "/images/cap-design.jpg", alt: "Feasibility and quotation" },
  { src: "/images/cap-knitting.jpg", alt: "Yarn and development" },
  { src: "/images/cap-confection.jpg", alt: "Approval and planning" },
  { src: "/images/cap-quality.jpg", alt: "Production and quality control" },
  { src: "/images/cap-fitting.jpg", alt: "Delivery and reruns" },
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
