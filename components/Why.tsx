const ITEMS = [
  {
    n: "01",
    title: "Decision support",
    body: "We review yarn, gauge, construction, fit and measurements before development begins. When something is unlikely to produce the intended result, we raise it, explain why and propose alternatives for your approval.",
  },
  {
    n: "02",
    title: "Own-facility accountability",
    body: "Programming, knitting, washing, linking, sewing, assembly, finishing, quality control and packing are carried out in our own facilities in Portugal. One structure, one accountable partner.",
  },
  {
    n: "03",
    title: "Commercial understanding",
    body: "Yarn affects price, availability and certification. Gauge affects weight and production. We ask about target consumer, target price, quantities and timing, because a style only works if it is commercially usable.",
  },
  {
    n: "04",
    title: "Continuity",
    body: "Once a style has been developed and produced, future runs build on the existing program, measurements and known yarn behaviour. This reduces repeated development, subject to yarn availability and scheduling.",
  },
];

export default function Why() {
  return (
    <section className="why section" id="why">
      <div className="sect-head">
        <span className="sect-head__num">Why us</span>
        <h2 className="sect-head__title">
          We advise, adjust, solve and refine: <em>directly with the teams</em> who make
          your knitwear.
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
