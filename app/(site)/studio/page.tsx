import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio — MBK · Madalena Beça Knitwear",
  description:
    "Where ideas take shape in knit. Alongside manufacturing, our in-house Studio brings together creative sensitivity and technical knitwear expertise to support the development of each collection.",
};

const ROLE = [
  {
    n: "01",
    cat: "Yarn",
    lead: "Material is part of the design.",
    body: "We help explore yarns, compositions, colours and qualities in relation to the intended character and performance of the product.",
  },
  {
    n: "02",
    cat: "Structure",
    lead: "Knit is built, not cut.",
    body: "Stitches, gauges, constructions and proportions are developed with an understanding of how each choice shapes the finished garment.",
  },
  {
    n: "03",
    cat: "Development",
    lead: "Ideas become tangible.",
    body: "From swatches and trials to prototypes and refinements, development gives form to the creative direction of the project.",
  },
  {
    n: "04",
    cat: "Fit & Detail",
    lead: "The difference is often in the last few centimetres.",
    body: "Proportion, finishing and detail are refined with the precision required to bring the intended product to life.",
  },
];

const CAPABILITIES = [
  { src: "/images/studio-swatch-1.jpg", alt: "Round texture swatches pinned to a mood board", cat: "Texture", desc: "Stitch & structure" },
  { src: "/images/studio-swatch-2.jpg", alt: "Pointing out a texture swatch on a mood board", cat: "Material", desc: "Yarn & swatch development" },
  { src: "/images/studio-swatch-3.jpg", alt: "Reviewing a knit sample against the pattern on a tablet", cat: "Form", desc: "Fit & proportion" },
];

export default function StudioPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr">
        <div className="jr-hero">
          <div className="label rv">Studio</div>
          <h1 className="jr-hero__title rv">
            Where ideas take shape <em>in knit.</em>
          </h1>
          <p className="jr-hero__sub rv">
            Alongside manufacturing, our in-house Studio brings together
            creative sensitivity and technical knitwear expertise to support
            the development of each collection. From exploring a new
            construction or yarn to developing a product from an early
            reference, we adapt our involvement to what each brand and each
            project requires.
          </p>
        </div>
      </header>

      {/* ---- block 1: the approach (same background as the hero) ---- */}
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
              Creative thinking. <em>Technical understanding.</em>
            </h2>
            <p className="rv">Every project begins somewhere different.</p>
            <p className="rv">
              Some arrive fully developed and ready to move into sampling.
              Others begin with a sketch, a reference, a yarn, an existing
              garment or an idea still being explored.
            </p>
            <p className="rv">Our role adapts accordingly.</p>
            <p className="rv">
              The Studio can work closely with a brand&rsquo;s design and
              product teams, or simply bring its technical perspective where
              useful — translating creative intention into knitwear while
              respecting the identity, requirements and direction of the
              collection.
            </p>
            <p className="note rv">
              Because development and manufacturing sit side by side, ideas
              are considered with both creativity and production in mind from
              the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* ---- block 2: the studio's role ---- */}
      <section className="why section sect--wool">
        <div className="sect-head">
          <span className="sect-head__num">The Studio&rsquo;s role</span>
          <h2 className="sect-head__title">
            Expertise that can enter <em>wherever it is needed.</em>
          </h2>
        </div>
        <div className="why__grid">
          {ROLE.map((it) => (
            <div className="why__item rv" key={it.n}>
              <i>{it.n}</i>
              <div className="label" style={{ margin: "10px 0 6px" }}>
                {it.cat}
              </div>
              <h3>{it.lead}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- block 3: yarn, development & technique (reversed) ---- */}
      <section className="studio section sect--cream">
        <div className="studio__grid studio__grid--wide-text">
          <div className="studio__body">
            <div className="label">Yarn, development &amp; technique</div>
            <h2 className="rv">
              A yarn is never <em>just a yarn.</em>
            </h2>
            <p className="rv">
              In knitwear, material, structure and construction are
              inseparable.
            </p>
            <p className="rv">
              A change in fibre, count, gauge or stitch can transform the
              weight, touch, drape, appearance and behaviour of a garment.
              Understanding those relationships is at the heart of our
              Studio.
            </p>
            <p className="rv">
              Our team brings together knowledge of yarn, programming,
              construction and garment development to explore the most
              appropriate route for each project — whether that means
              interpreting an established specification or developing
              something new alongside the client.
            </p>
            <p className="rv">
              When our experience suggests another route may better serve the
              intended result, we bring it forward for consideration.
            </p>
            <p className="rv" style={{ fontWeight: 500, color: "var(--ink)" }}>
              The creative direction remains yours. Our technical perspective
              is there to help realise it.
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

      {/* ---- block 4: visual capabilities ---- */}
      <section className="swatches">
        <div className="swatches__grid">
          {CAPABILITIES.map((s) => (
            <figure className="rv" key={s.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.alt} />
              <figcaption>
                <b>{s.cat}</b>
                <span>{s.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---- block 5: the relationship between studio and factory ---- */}
      <section className="section sect--wool" style={{ padding: "14vh 0" }}>
        <div className="sect-head">
          <span className="sect-head__num">
            The relationship between Studio and Factory
          </span>
          <h2 className="sect-head__title">
            From idea to industry — <em>born where it will be made.</em>
          </h2>
        </div>
        <p
          className="rv"
          style={{
            maxWidth: "620px",
            margin: "4vh clamp(20px,5vw,72px) 0",
            fontSize: "15px",
            lineHeight: 1.8,
            letterSpacing: ".02em",
            color: "rgba(28,25,19,.62)",
          }}
        >
          The Studio is not separate from our manufacturing floor.
          Development, technical expertise and production belong to the same
          company, allowing ideas to move naturally between the people who
          conceive, interpret, programme, sample and ultimately make the
          garment. That proximity creates continuity from development into
          production — and gives our clients one partner from the first
          conversation to the finished piece.
        </p>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
        <div className="label cta__label rv">Studio</div>
        <p className="cta__txt rv">
          Bring us what <em>you&rsquo;re working on.</em>
        </p>
        <p
          className="rv"
          style={{
            maxWidth: "480px",
            margin: "3vh auto 0",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "rgba(28,25,19,.62)",
          }}
        >
          Whether your product is already defined or still taking shape,
          tell us what you would like to make.
        </p>
        <a className="btn cta__btn rv" href="/start-a-project" data-hover="">
          <span>Start a Project</span>
          <i />
        </a>
      </section>
    </>
  );
}
