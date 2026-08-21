import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — MBK · Madalena Beça Knitwear",
  description:
    "A specialised knitwear factory, built for long relationships. A family company producing flat knitwear in its own facilities in Penafiel, Portugal, since 1998.",
};

const GALLERY = [
  { src: "/images/cap-design.jpg", alt: "Programming in STOLL M1plus", cap: "Programming" },
  { src: "/images/cap-knitting.jpg", alt: "Flat knitting", cap: "Knitting" },
  { src: "/images/cap-confection.jpg", alt: "Garment assembly", cap: "Assembly" },
  { src: "/images/cap-quality.jpg", alt: "Quality control", cap: "Quality control" },
  { src: "/images/cap-fitting.jpg", alt: "Finishing and fit", cap: "Finishing" },
  { src: "/images/gal-05.jpg", alt: "Packing in our own facilities", cap: "Packing" },
];

export default function AboutPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr">
        <div className="jr-hero">
          <div className="label rv">MBK — About</div>
          <h1 className="jr-hero__title rv">
            A specialised knitwear factory, built for{" "}
            <em>long relationships.</em>
          </h1>
          <p className="jr-hero__sub rv">
            Madalena Beça Knitwear has developed and produced flat knitwear since
            1998. We are a family company, producing in our own facilities in
            Penafiel, Portugal.
          </p>
        </div>
      </header>

      {/* ---- block 1: text ---- */}
      <section className="studio section sect--cream">
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
              manufacturer where clients work directly with the teams developing,
              planning and producing their knitwear.
            </p>
            <p className="rv">
              Development, production and quality control sit within one factory
              structure. That means one accountable partner for the garment, a
              closer connection between what is developed and what is made, and a
              direct line to the people making it.
            </p>
            <p className="rv">
              It also means our judgement works in two directions. Yarn, gauge and
              construction reach into price, availability, certification and
              timing, and a sample deadline is usually connected to a campaign, a
              showroom or a launch. Our role is to understand those connections,
              explain the available routes and help you make an informed decision.
            </p>
            <p className="rv">
              We work best with brands that intend to stay. Knowledge accumulates
              across collections — how a yarn behaved, why a measurement was
              adjusted, which construction held in production — and the
              relationship becomes more informed each season.
            </p>
          </div>
        </div>
      </section>

      {/* ---- block 2: the same family, since 1998 (photo) ---- */}
      <section className="studio section sect--wool">
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
            <div className="label">The family</div>
            <h2 className="rv">
              The same family, <em>since 1998.</em>
            </h2>
            <p className="rv">
              The company was founded in 1998 and has been built by the same
              family since. The next generation now works alongside the first, in
              the same facilities where the company began.
            </p>
            <p className="rv">
              Continuity is not only a matter of history. It is why technical
              knowledge stays inside the factory rather than leaving with a
              supplier contact, and why a client returning for a third or fourth
              season is met by people who already know how their product behaves.
              For the accounts we work with most closely, that continuity includes
              regular meetings and review after production.
            </p>
            <div className="studio__sig rv">madalena beça</div>
          </div>
        </div>
      </section>

      {/* ---- block 3: factory gallery ---- */}
      <section className="swatches sect--cream" style={{ paddingTop: "12vh" }}>
        <div
          className="sect-head"
          style={{ maxWidth: "1500px", padding: "0", marginBottom: "6vh" }}
        >
          <span className="sect-head__num">The factory</span>
          <h2 className="sect-head__title">
            Programming to packing, <em>under one roof.</em>
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
          From programming and knitting to garment assembly, quality control and
          packing — produced in our own facilities in Penafiel, Portugal.
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

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
        <div className="label cta__label rv">Work with us</div>
        <p className="cta__txt rv">
          We work best with brands that <em>intend to stay.</em>
        </p>
        <a className="btn cta__btn rv" href="#contact" data-hover="">
          <span>Start a conversation</span>
          <i />
        </a>
      </section>
    </>
  );
}
