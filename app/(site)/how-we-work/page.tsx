import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work — MBK · Madalena Beça Knitwear",
  description:
    "From programming and knitting to assembly, quality control and packing — produced in our own facilities in Penafiel, Portugal. One factory, one accountable partner.",
};

const STEPS = [
  {
    n: "01",
    title: "Feasibility & Quotation",
    body: "We review your brief — measurements, gauge, construction and intended result — and flag concerns before development starts. Alongside this, we provide an estimated quotation based on yarn, quantities and target parameters, so cost is never a surprise later.",
  },
  {
    n: "02",
    title: "Yarn & Development",
    body: "We evaluate yarn options — handfeel, composition, certification, price and availability — against your target and colour needs. Once approved, we move into programming, gauge, structure, fit and assembly.",
  },
  {
    n: "03",
    title: "Approval & Planning",
    body: "You review the prototype and we track every adjustment through to sign-off. With delivery window and yarn confirmed, we plan capacity and timing, including off-peak production where useful.",
  },
  {
    n: "04",
    title: "Production & Quality Control",
    body: "Knitting, washing, linking, sewing, assembly and quality checks happen under one roof, in our own facilities in Portugal. Every piece is checked against approved specifications before it moves forward.",
  },
  {
    n: "05",
    title: "Delivery & Reruns",
    body: "Final review, packing and shipment follow your agreed date. Once a style is proven, future runs can build on the existing program and known yarn behaviour, allowing more focused replenishment.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr">
        <div className="jr-hero">
          <div className="label rv">How we work</div>
          <h1 className="jr-hero__title rv">
            From yarn to garment, <em>under one roof.</em>
          </h1>
          <p className="jr-hero__sub rv">
            Development, production and quality control within one factory
            structure — one accountable partner for the garment, and a direct
            line to the people making it.
          </p>
        </div>
      </header>

      {/* ---- block 1: the process (reuses the home "how we work" list) ---- */}
      <section className="section sect--wool" style={{ padding: "16vh 0" }}>
        <div className="sect-head">
          <span className="sect-head__num">The process</span>
          <h2 className="sect-head__title">
            Five stages, <em>one factory.</em>
          </h2>
        </div>
        <div
          className="caps__list"
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,72px)",
          }}
        >
          {STEPS.map((it) => (
            <div
              className="caps__item is-active rv"
              style={{ cursor: "default" }}
              key={it.n}
            >
              <h3>
                <i>{it.n}</i>
                {it.title}
              </h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- block 2: made in our own facilities ---- */}
      <section className="studio section sect--cream">
        <div className="studio__grid">
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cap-knitting.jpg"
              alt="Programming and flat knitting in our own facilities"
              data-parallax=""
            />
          </div>
          <div className="studio__body">
            <div className="label">In-house production</div>
            <h2 className="rv">
              Made in our <em>own facilities.</em>
            </h2>
            <p className="rv">
              From programming and knitting to garment assembly, quality control
              and packing — produced in our own facilities in Penafiel, Portugal.
            </p>
            <p className="rv">
              Each style is programmed in STOLL M1plus for the gauge and
              construction it requires. Our flat machines cover gauges 3, 5, 7, 10
              and 12, which allows a brand to move between heavy constructions and
              fine-gauge product without changing manufacturer.
            </p>
            <p className="rv">
              Development, production and quality control sit within one factory
              structure. Checkpoints are placed across the process — yarn and
              colour behaviour, measurements after washing, workmanship at linking
              and assembly, and conformity before packing — so that a deviation is
              identified while it can still be corrected, rather than at final
              inspection.
            </p>
            <p className="rv">
              Producing in Europe, in our own facilities, means the partner you
              brief is the partner who makes the garment.
            </p>
            <p className="note rv">
              Specialised services such as embroidery, printing or garment-dye
              processes may be carried out by selected external partners.
            </p>
          </div>
        </div>
      </section>

      {/* ---- block 3: craft ---- */}
      <section className="studio section sect--wool">
        <div
          className="studio__grid"
          style={{ gridTemplateColumns: "1.1fr .9fr" }}
        >
          <div className="studio__body">
            <div className="label">Craft</div>
            <h2 className="rv">
              What time in one place <em>produces.</em>
            </h2>
            <p className="rv">
              Madalena Beça Knitwear has developed and produced flat knitwear
              since 1998, in the same place, as a family company.
            </p>
            <p className="rv">
              What a factory inherits is not equipment. It is a body of knowledge
              that only accumulates by staying: how a particular yarn behaves after
              washing, which measurements need adjusting before they reach the
              knitting program, where a construction tends to fail at linking,
              which gauge holds a shape and which one drops it.
            </p>
            <p className="rv">
              That knowledge sits with the people who develop and make the
              product, and it is applied to a client&rsquo;s first sample rather
              than discovered on the fourth. It is also what allows a technical
              concern to be raised early — the most useful thing a factory can
              offer, and the difference between a prototype that teaches you
              something and a prototype that costs you a season.
            </p>
            <p className="rv">
              The same continuity applies to a relationship. Knowledge accumulates
              across collections: the longer we work with a brand, the more
              informed the judgement becomes, and the fewer decisions have to be
              made twice.
            </p>
          </div>
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/knit-texture.jpg"
              alt="Knit texture — calm movement, natural light"
              data-parallax=""
            />
          </div>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
        <div className="label cta__label rv">How we work</div>
        <p className="cta__txt rv">
          The partner you brief is <em>the partner who makes it.</em>
        </p>
        <a className="btn cta__btn rv" href="#contact" data-hover="">
          <span>Start a Project</span>
          <i />
        </a>
      </section>
    </>
  );
}
