import type { Metadata } from "next";
import Certs from "@/components/Certs";

export const metadata: Metadata = {
  title: "Sustainability — Certifications · Madalena Beça Knitwear",
  description:
    "Certifications are not badges — they are documented proof of how we choose to produce. Certified to GOTS, GRS, RWS and OCS, audited by Ecocert Greenlife, with a traceable supply chain.",
};

const MEANS = [
  "Fibre eligibility established before development begins, not after",
  "Traceability you can document rather than describe",
  "Transaction documentation to support your own claims",
  "Audited processes, verified annually",
  "Production aligned with the requirements of the European premium market",
];

const CERTS = [
  {
    name: "GOTS",
    full: "Global Organic Textile Standard",
    since: "Certified since 2017",
    covers:
      "Textiles made from certified organic natural fibres, with environmental and social criteria applied across processing and manufacturing.",
    requires:
      "Annual in-person auditing, separation of certified production, and documented traceability from certified input through to the finished garment.",
    gives: "A substantiated organic claim, supported by transaction documentation.",
    condition:
      "Applies when the selected yarn is certified and the project includes the required documentation.",
  },
  {
    name: "GRS",
    full: "Global Recycled Standard",
    since: "Certified since 2022",
    covers:
      "Verified recycled content, with chain-of-custody, social, environmental and chemical criteria.",
    requires:
      "Audited handling of recycled inputs and documented custody through each production stage.",
    gives: "A verified recycled-content claim rather than a stated one.",
    condition: "Applies when the yarn route and documentation support it.",
  },
  {
    name: "RWS",
    full: "Responsible Wool Standard",
    since: "Certified since 2022",
    covers:
      "Wool from farms audited for animal welfare and land management, tracked through the supply chain.",
    requires:
      "Certified sourcing and documented custody of the fibre through to the finished garment.",
    gives: "A wool claim with verified provenance behind it.",
    condition:
      "Applies when the selected wool quality is certified and documentation is in place.",
  },
  {
    name: "OCS",
    full: "Organic Content Standard",
    since: "Certified since 2023",
    covers: "Verification of organic fibre content and its chain of custody.",
    requires: "Documented input and custody, verified by audit.",
    gives:
      "A verified content claim where the full GOTS processing criteria are not required.",
    condition: "Applies according to project scope and documentation.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr">
        <div className="jr-hero">
          <div className="label rv">Sustainability</div>
          <h1 className="jr-hero__title rv">
            Our certifications are not badges.{" "}
            <em>Documented proof of how we produce.</em>
          </h1>
          <p className="jr-hero__sub rv">
            Certified to GOTS, GRS, RWS and OCS, and working with certified
            supply-chain partners — traceability, audited processes, social
            compliance and environmental responsibility.
          </p>
        </div>
      </header>

      {/* ---- mission ---- */}
      <section className="studio section sect--cream">
        <div className="studio__grid" style={{ alignItems: "start" }}>
          <div className="studio__body about-lead">
            <div className="label">The mission</div>
            <h2 className="rv">
              Certification was <em>the instrument.</em>
            </h2>
          </div>
          <div className="studio__body">
            <p className="rv">
              In 2017 the company restructured, and certification was the
              instrument. It required the professionalisation of processes, the
              documentation of the supply chain and investment in a more traceable
              way of producing. At a moment when European manufacturing was under
              pressure from low-cost production, certification allowed us to state
              clearly — and evidence — what producing in Europe means: traceability,
              audited processes, social compliance and environmental
              responsibility.
            </p>
            <p className="rv">
              We did not adopt new values. We used certification to structure and
              verify the ones the company already held. GOTS came first, in 2017,
              with in-person auditing every year since. GRS and RWS followed in
              2022, and OCS completes the current scope.
            </p>
            <p className="rv">
              Madalena Beça Knitwear is certified to GOTS, GRS, RWS and OCS
              standards and works with certified supply-chain partners. Certified
              production is developed according to the selected materials, project
              scope and required transaction documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ---- what this means for your brand ---- */}
      <section className="why section sect--wool">
        <div className="sect-head">
          <span className="sect-head__num">In practice</span>
          <h2 className="sect-head__title">
            What this means <em>for your brand.</em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "clamp(24px,3vw,50px)",
            maxWidth: "1500px",
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,72px)",
          }}
        >
          {MEANS.map((point, i) => (
            <div className="why__item rv" key={i}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              <h3>{point}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ---- certified supply chain (reuses the home Certs section) ---- */}
      <Certs />

      {/* ---- standards intro ---- */}
      <section className="section sect--cream" style={{ padding: "15vh 0 3vh" }}>
        <div className="sect-head">
          <span className="sect-head__num">The standards</span>
          <h2 className="sect-head__title">
            Four certifications, <em>one traceable chain.</em>
          </h2>
        </div>
      </section>

      {/* ---- one full section per certification ---- */}
      {CERTS.map((c, i) => (
        <section
          className={`section ${
            i % 2 === 0 ? "sect--wool" : "sect--cream certsec--rev"
          }`}
          style={{ padding: "11vh 0" }}
          key={c.name}
        >
          <div className="studio__grid" style={{ alignItems: "start" }}>
            <div className="studio__body">
              <div className="label">
                Certification {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="rv" style={{ margin: "14px 0 0" }}>
                {c.name}
              </h2>
              <div className="certsec__full rv">{c.full}</div>
              <div className="certsec__since rv">{c.since}</div>
            </div>
            <dl className="certfields rv">
              <div>
                <dt>What it covers</dt>
                <dd>{c.covers}</dd>
              </div>
              <div>
                <dt>What it requires of us</dt>
                <dd>{c.requires}</dd>
              </div>
              <div>
                <dt>What it gives your brand</dt>
                <dd>{c.gives}</dd>
              </div>
              <div>
                <dt>Condition</dt>
                <dd>{c.condition}</dd>
              </div>
            </dl>
          </div>
        </section>
      ))}

      {/* ---- Ecocert licence ---- */}
      <section
        className="section sect--cream"
        style={{ padding: "3vh 0 12vh", textAlign: "center" }}
      >
        <p
          className="rv"
          style={{
            fontSize: "10.5px",
            letterSpacing: ".34em",
            textTransform: "uppercase",
            color: "var(--warmgrey)",
          }}
        >
          Certified by Ecocert Greenlife — Licence 270713
        </p>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
        <div className="label cta__label rv">Sustainability</div>
        <p className="cta__txt rv">
          Discuss certification. <em>We will confirm the route for your project.</em>
        </p>
        <a className="btn cta__btn rv" href="#contact" data-hover="">
          <span>Discuss certification</span>
          <i />
        </a>
      </section>
    </>
  );
}
