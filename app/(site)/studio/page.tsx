import type { Metadata } from "next";

const TITLE = "Studio — MBK · Madalena Beça Knitwear";
const DESCRIPTION =
  "Where ideas take shape in knit. Alongside manufacturing, our in-house Studio brings together creative sensitivity and technical knitwear expertise to support the development of each collection.";
const OG_IMAGE = "/images/studio-yarn.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/studio",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const ROLE = [
  {
    n: "01",
    cat: "Yarn",
    lead: "Material is part of the design.",
    body: "We help explore yarns, compositions, colours and qualities in relation to the intended character and performance of the product.",
    img: "/selection/IMG_7030.jpg",
    imgAlt: "Round yarn and colour texture swatches laid out for review",
  },
  {
    n: "02",
    cat: "Structure",
    lead: "Knit is built, not cut.",
    body: "Stitches, gauges, constructions and proportions are developed with an understanding of how each choice shapes the finished garment.",
    img: "/selection/IMG_7465.jpg",
    imgAlt: "Knit programming linked to stitch and structure development",
  },
  {
    n: "03",
    cat: "Development",
    lead: "Ideas become tangible.",
    body: "From swatches and trials to prototypes and refinements, development gives form to the creative direction of the project.",
    img: "/selection/studio3.jfif",
    imgAlt: "Reviewing a knitted sample against the pattern on a tablet",
  },
  {
    n: "04",
    cat: "Fit & Detail",
    lead: "The difference is often in the last few centimetres.",
    body: "Proportion, finishing and detail are refined with the precision required to bring the intended product to life.",
    img: "/images/cap-quality.jpg",
    imgAlt: "Hand-finishing detail on a knitted garment",
  },
];

export default function StudioPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr studio-hero">
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
      <section className="studio studio-approach section sect--cream">
        <div className="studio__grid">
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/studio-swatch-2.jpg"
              alt="Sketching and reviewing colour and texture references against swatch cards"
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
              <div className="why__imgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.img} alt={it.imgAlt} />
              </div>
              <div className="why__meta">
                <i>{it.n}</i>
                <span className="label">{it.cat}</span>
              </div>
              <h3>{it.lead}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- block 3: yarn, development & technique (reversed) ---- */}
      <section className="studio studio-yarn section sect--cream">
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
              src="/selection/IMG_7512.jpg"
              alt="Comparing yarn shades from a swatch card"
              data-parallax=""
            />
          </div>
        </div>
      </section>

      {/* ---- block 5: studio + factory ---- */}
      <section className="studio studio-factory section sect--wool">
        <div className="studio__grid">
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/selection/IMG_6970.jpg"
              alt="Scanning a garment's QR code tag for traceability on the factory floor"
              data-parallax=""
            />
          </div>
          <div className="studio__body">
            <div className="label">Studio + Factory</div>
            <h2 className="rv">
              Studio and factory, <em>working as one.</em>
            </h2>
            <p className="rv studio-factory__lede">
              Development happens where the product will be made.
            </p>
            <p className="rv">
              The Studio is not separate from our manufacturing floor.
              Development, technical expertise and production belong to the
              same company, allowing ideas to move directly between the
              people who interpret, programme, sample and ultimately make the
              garment.
            </p>
            <p className="rv">
              That proximity creates continuity from development into
              production — and gives our clients one partner from the first
              conversation to the finished piece.
            </p>
          </div>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta studio-cta section">
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
