import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — MBK · Madalena Beça Knitwear",
  description:
    "A specialised knitwear manufacturer with continuity at its core. Since 1998, Madalena Beça Knitwear has developed and produced flat knitwear in Penafiel, Portugal.",
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
      <header className="jr">
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
      <section className="studio section sect--cream">
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
      <section className="swatches sect--wool" style={{ paddingTop: "12vh" }}>
        <div
          className="sect-head"
          style={{ maxWidth: "1500px", padding: "0", marginBottom: "6vh" }}
        >
          <span className="sect-head__num">A real manufacturer</span>
          <h2 className="sect-head__title">
            Made in our own facilities <em>in Portugal.</em>
          </h2>
        </div>
        <p
          className="rv"
          style={{
            maxWidth: "620px",
            margin: "0 0 6vh",
            fontSize: "15px",
            lineHeight: 1.8,
            letterSpacing: ".02em",
            color: "rgba(28,25,19,.62)",
          }}
        >
          MBK is a manufacturer, not a sourcing agency. Our core flat-knit
          development and production take place in our own facilities in
          Penafiel, keeping the people responsible for the product close to
          the people making it. That structure gives us direct responsibility
          for what leaves the factory and clear visibility over the
          production process.
        </p>
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
      <section className="studio section sect--cream">
        <div className="studio__grid" style={{ alignItems: "start" }}>
          <div className="studio__body about-lead">
            <div className="label">Continuity of knowledge</div>
            <h2 className="rv">
              Experience that stays <em>in the company.</em>
            </h2>
          </div>
          <div className="studio__body">
            <p className="rv">
              Technical knowledge in knitwear is cumulative.
            </p>
            <p className="rv">
              It comes from years of working with yarns, gauges,
              constructions, measurements and finishing, and from
              understanding how each decision affects the final garment.
            </p>
            <p className="rv">
              That knowledge is not valuable because it belongs to the past.
              It is valuable because it is applied to the next product.
            </p>
            <p className="rv">
              The longer we work with a brand, the more we understand its
              product, fit, quality expectations, timelines and way of
              working.
            </p>
            <p className="rv">
              That continuity makes future development more informed and
              helps create a stronger foundation for long-term collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* ---- block 4: who we are (pre-existing content, not covered by the
           document — kept as the implicit "Section 5" between Continuity of
           knowledge (4) and the CTA (6)) ---- */}
      <section className="studio section sect--wool">
        <div className="studio__grid" style={{ alignItems: "start" }}>
          <div className="studio__body about-lead">
            <div className="label">Who we are</div>
            <h2 className="rv">
              One factory. <em>One accountable partner.</em>
            </h2>
            <p className="note rv" style={{ marginTop: "24px" }}>
              Founded 1998 · Penafiel, Portugal
            </p>
          </div>
          <div className="studio__body">
            <p className="rv">
              We are neither an impersonal industrial operation nor an
              inaccessible luxury house. We are an independent, specialised
              manufacturer where clients work directly with the teams
              developing, planning and producing their knitwear.
            </p>
            <p className="rv">
              Development, production and quality control sit within one
              factory structure. That means one accountable partner for the
              garment, a closer connection between what is developed and
              what is made, and a direct line to the people making it.
            </p>
            <p className="rv">
              It also means our judgement works in two directions. Yarn,
              gauge and construction reach into price, availability,
              certification and timing, and a sample deadline is usually
              connected to a campaign, a showroom or a launch. Our role is
              to understand those connections, explain the available routes
              and help you make an informed decision.
            </p>
            <p className="rv">
              We work best with brands that intend to stay. Knowledge
              accumulates across collections — how a yarn behaved, why a
              measurement was adjusted, which construction held in
              production — and the relationship becomes more informed each
              season.
            </p>
          </div>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
        <div className="label cta__label rv">MBK</div>
        <p className="cta__txt rv">
          Looking for a long-term knitwear{" "}
          <em>manufacturing partner?</em>
        </p>
        <a className="btn cta__btn rv" href="/start-a-project" data-hover="">
          <span>Start a project</span>
          <i />
        </a>
      </section>
    </>
  );
}
