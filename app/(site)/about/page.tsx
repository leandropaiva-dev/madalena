import type { Metadata } from "next";

const TITLE = "About — MBK · Madalena Beça Knitwear";
const DESCRIPTION =
  "A specialised knitwear manufacturer with continuity at its core. Since 1998, Madalena Beça Knitwear has developed and produced flat knitwear in Penafiel, Portugal.";
const OG_IMAGE = "/images/about-knitting.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
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

const GALLERY = [
  { src: "/images/about-programming.jpg", alt: "Programming a knit pattern at the workstation", cap: "Programming" },
  { src: "/images/about-knitting.jpg", alt: "Operating a circular knitting machine", cap: "Knitting" },
  { src: "/images/about-assembly.jpg", alt: "Linking a knitted panel by hand on an industrial machine", cap: "Assembly" },
  { src: "/images/about-quality.jpg", alt: "Measuring a finished sweater during quality control", cap: "Quality control" },
  { src: "/images/about-finishing.jpg", alt: "Hand-finishing the edge of a knitted garment", cap: "Finishing" },
  { src: "/images/about-packing.jpg", alt: "Folded knitwear packed and ready for dispatch", cap: "Packing" },
];

export default function AboutPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr about-hero">
        <div className="jr-hero">
          <div className="label rv">MBK — About</div>
          <h1 className="jr-hero__title rv">
            A specialised knitwear manufacturer with{" "}
            <em>continuity at its core.</em>
          </h1>
          <p className="jr-hero__sub rv">
            Since 1998, Madalena Beça Knitwear has developed and produced flat
            knitwear in Penafiel, Portugal. Independent and family-owned, we
            combine long-term manufacturing knowledge with the standards
            required by contemporary international fashion brands.
          </p>
        </div>
      </header>

      {/* ---- block 1: family ownership (same background as the hero) ---- */}
      <section className="studio section sect--cream about-family">
        <div className="studio__grid">
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tatianacomamae.jpg"
              alt="Tatiana with her mother on the factory floor — the same family since 1998"
              data-parallax=""
            />
          </div>
          <div className="studio__body">
            <div className="label">Family ownership</div>
            <h2 className="rv">
              Family-owned <em>since 1998.</em>
            </h2>
            <p className="rv">
              For MBK, family ownership is not a story about nostalgia. It
              means continuity, accountability and a long-term view of the
              company and its relationships.
            </p>
            <p className="rv">
              The same ownership has guided the business across decades of
              change in the textile industry, allowing knowledge, decisions
              and relationships to build over time rather than constantly
              reset.
            </p>
            <div className="studio__sig rv">madalena beça</div>
          </div>
        </div>
      </section>

      {/* ---- block 2: a real manufacturer (factory gallery) ---- */}
      <section
        className="swatches sect--wool about-gallery"
        style={{ paddingTop: "5vh" }}
      >
        <div className="facilities-head">
          <div className="sect-head">
            <span className="sect-head__num">A real manufacturer</span>
            <h2 className="sect-head__title">
              Made in our own facilities <em>in Portugal.</em>
            </h2>
          </div>
          <div className="facilities-head__copy">
            <p className="rv">
              MBK is a manufacturer, with core flat-knit development and
              production carried out in our own facilities in Penafiel.
            </p>
            <p className="rv">
              Clients work directly with the teams responsible for
              developing and producing their knitwear. This structure gives
              us direct visibility over production and one clear point of
              accountability for the garment.
            </p>
          </div>
        </div>
        <div className="swatches__grid">
          {GALLERY.map((g) => (
            <figure className="rv" key={g.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} />
              <figcaption>{g.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---- block 3: continuity of knowledge (text only) ---- */}
      <section className="studio section sect--cream about-continuity">
        <div className="studio__grid" style={{ alignItems: "start" }}>
          <div className="studio__body about-lead">
            <div className="label">Continuity of knowledge</div>
            <h2 className="rv">
              Experience that stays <em>in the company.</em>
            </h2>
          </div>
          <div className="studio__body">
            <p className="rv">
              Technical knowledge in knitwear is cumulative. It comes from
              years of working with yarns, gauges, constructions,
              measurements and finishing — and from understanding how each
              decision affects the finished garment.
            </p>
            <p className="rv">
              That knowledge is not valuable because it belongs to the past.
              It is valuable because it is applied to the next product.
            </p>
            <p className="rv">
              As we work with a brand across collections, we build a deeper
              understanding of its product, fit, quality expectations,
              timelines and way of working. That continuity makes future
              development more informed and collaboration more efficient.
            </p>
          </div>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section about-cta">
        <div className="label cta__label rv">MBK</div>
        <p className="cta__txt rv">
          Looking for a long-term knitwear{" "}
          <em>manufacturing partner?</em>
        </p>
        <a className="btn cta__btn rv" href="/start-a-project" data-hover="">
          <span>Start a Project</span>
          <i />
        </a>
      </section>
    </>
  );
}
