const ITEMS = [
  {
    n: "01",
    title: "Technology & Excellence",
    body: "STOLL programming, modern flat machines and technical development refined over two decades of specialized knitwear manufacturing.",
  },
  {
    n: "02",
    title: "Bespoke Production",
    body: "Every program is custom-built around your sample. We don't produce catalogues — we build your collection, stitch by stitch.",
  },
  {
    n: "03",
    title: "Customer Focus",
    body: "Direct access to our team at every stage. We collaborate, advise, adjust, solve and refine — a partner, not a supplier.",
  },
  {
    n: "04",
    title: "Certified Partner",
    body: "GOTS, RWS, GRS and OCS certified. The confidence of a fully certified supply chain, audited by Ecocert Greenlife.",
  },
];

export default function Why() {
  return (
    <section className="why section" id="why">
      <div className="sect-head">
        <span className="sect-head__num">Why us</span>
        <h2 className="sect-head__title">
          Small enough to care, <em>expert enough to deliver.</em>
        </h2>
      </div>
      <div className="why__grid">
        {ITEMS.map((it, i) => (
          <div className="why__item rv" key={i}>
            <i>{it.n}</i>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
