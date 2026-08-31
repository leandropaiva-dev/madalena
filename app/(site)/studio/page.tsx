import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Design — Client-Specific Knitwear Development · Madalena Beça Knitwear",
  description:
    "Studio Design is client-specific knitwear development: creative and technical support made to measure, connecting creativity to manufacturability — from a reference or sketch to a garment that can be made.",
};

const PROCESS = [
  {
    n: "01",
    title: "Brief & references",
    body: "Clients arrive at different points. Some send a complete tech pack; others send a photograph, a yarn and a measurement. Both are workable — they simply begin at a different place in the same process.",
  },
  {
    n: "02",
    title: "Yarn routes",
    body: "We research and compare yarn routes against your target price, your colour and quantity structure and your delivery window — including stock-service qualities, minimums per colour and small-lot surcharges.",
  },
  {
    n: "03",
    title: "Programming & swatches",
    body: "Each style is programmed for the gauge and construction it requires. We develop stitch structures and swatches, and translate measurement charts into knitting programs.",
  },
  {
    n: "04",
    title: "Fit & approval",
    body: "We check fit and behaviour on a finished garment, after washing rather than before. Adjustments are documented, and the version that enters production is the version you approved.",
  },
];

const SWATCHES = [
  { src: "/images/studio-swatch-1.jpg", alt: "Round texture swatches pinned to a mood board", cap: "Stitch structures" },
  { src: "/images/studio-swatch-2.jpg", alt: "Pointing out a texture swatch on a mood board", cap: "Swatch development" },
  { src: "/images/studio-swatch-3.jpg", alt: "Reviewing a knit sample against the pattern on a tablet", cap: "Fit & measurement" },
];

export default function StudioPage() {
  return (
    <>
      {/* ---- page hero (reuses the Journal hero type system) ---- */}
      <header className="jr">
        <div className="jr-hero">
          <div className="label rv">Studio Design</div>
          <h1 className="jr-hero__title rv">
            Client-specific knitwear <em>development.</em>
          </h1>
          <p className="jr-hero__sub rv">
            Client-specific development, not generic white-label collections —
            creative and technical support, made to measure, from the first
            reference to a garment that can be made.
          </p>
        </div>
      </header>

      {/* ---- block 1: creativity connected to manufacturability ---- */}
      <section className="studio section sect--cream">
        <div className="studio__grid">
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cap-design.jpg"
              alt="Technical review in progress — analysing references, measurements and alternatives"
              data-parallax=""
            />
          </div>
          <div className="studio__body">
            <div className="label">The approach</div>
            <h2 className="rv">
              Creativity connected to <em>manufacturability.</em>
            </h2>
            <p className="rv">
              Most factories are asked to execute a style. We are asked to help
              decide what the style should be.
            </p>
            <p className="rv">
              Studio Design is where a reference, a sketch or an idea becomes a
              knitwear product that can be made — in the right yarn, at the right
              gauge, at a price the collection can carry and within the season it
              belongs to. It sits before production rather than beside it, and it
              exists because the decisions taken at that stage determine almost
              everything that follows.
            </p>
            <p className="rv">
              Clients arrive at different points. Some send a complete tech pack.
              Others send a photograph, a yarn and a measurement. Both are
              workable; they simply begin at a different place in the same
              process. Where a client wants it, the studio can contribute to a
              specific collection.
            </p>
            <p className="rv">
              What we bring is judgement, not authorship. We ask who the product
              is for, what it needs to retail at, where it sits in the
              collection, how many colours and sizes it carries and whether the
              style is meant to return next season — because those answers change
              the technical route. A style built for one drop is not developed the
              same way as a style intended to be replenished.
            </p>
            <p className="note rv">
              Studio Design is client-specific work. It does not offer a seasonal
              collection for open selection, it does not replace the client&rsquo;s
              creative direction, and not every client needs it.
            </p>
          </div>
        </div>
      </section>

      {/* ---- process: how the studio works (reuses the Why grid pattern) ---- */}
      <section className="why section sect--wool">
        <div className="sect-head">
          <span className="sect-head__num">The process</span>
          <h2 className="sect-head__title">
            How the studio <em>thinks and collaborates.</em>
          </h2>
        </div>
        <div className="why__grid">
          {PROCESS.map((it) => (
            <div className="why__item rv" key={it.n}>
              <i>{it.n}</i>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- block 2: the yarn decides more than the handfeel (reversed) ---- */}
      <section className="studio section sect--cream">
        <div
          className="studio__grid"
          style={{ gridTemplateColumns: "1.1fr .9fr" }}
        >
          <div className="studio__body">
            <div className="label">Yarn, development &amp; technique</div>
            <h2 className="rv">
              The yarn decides more than <em>the handfeel.</em>
            </h2>
            <p className="rv">
              Yarn determines weight, price, availability, certification
              eligibility and how a garment behaves after washing. We research and
              compare routes against your target price, your colour and quantity
              structure and your delivery window — including stock-service
              qualities, minimums per colour and the surcharges that apply to
              small lots.
            </p>
            <p className="rv">
              From there the work is technical. Each style is programmed for the
              gauge and construction it requires. We develop stitch structures and
              swatches, translate measurement charts into knitting programs, and
              check fit and behaviour on a finished garment, after washing rather
              than before.
            </p>
            <p className="rv">
              When a measurement, yarn, gauge or construction appears unlikely to
              produce the intended result, we raise it before proceeding, explain
              why and propose alternatives for approval. The objective is to avoid
              foreseeable prototypes, delays and costs — not to redesign your
              product. Comments are tracked, adjustments are documented, and the
              version that enters production is the version you approved.
            </p>
          </div>
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/studio-yarn.jpg"
              alt="Comparing yarn shades from a swatch card"
              data-parallax=""
            />
          </div>
        </div>
      </section>

      {/* ---- swatch strip ---- */}
      <section className="swatches">
        <div className="swatches__grid">
          {SWATCHES.map((s) => (
            <figure className="rv" key={s.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.alt} />
              <figcaption>{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
        <div className="label cta__label rv">Studio Design</div>
        <p className="cta__txt rv">
          Brief Studio Design.{" "}
          <em>Tell us where your product currently stands.</em>
        </p>
        <a className="btn cta__btn rv" href="/start-a-project" data-hover="">
          <span>Start a Project</span>
          <i />
        </a>
      </section>

      {/* The Contact section (site-wide footer) closes the page — rendered by the layout. */}
    </>
  );
}
