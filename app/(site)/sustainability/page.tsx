import type { Metadata } from "next";
import Certs from "@/components/Certs";
import CertAccordion from "@/components/CertAccordion";

export const metadata: Metadata = {
  title: "Sustainability — Certifications · Madalena Beça Knitwear",
  description:
    "Certifications are not badges — they are documented proof of how we choose to produce. Certified to GOTS, GRS, RWS and OCS, audited by Ecocert Greenlife, with a traceable supply chain.",
};

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
            Responsibility, <em>in practice.</em>
          </h1>
          <p className="jr-hero__sub rv">
            For us, sustainability is not a separate part of manufacturing.
            It is part of how we make decisions — from the materials and
            components we source to the resources we use, the waste we
            recover and the conditions in which our products are made.
          </p>
          <p className="jr-hero__sub rv">
            Our approach is practical, continuously evolving and supported by
            recognised standards that bring greater traceability,
            accountability and transparency to the way we work.
          </p>
        </div>
      </header>

      {/* ---- block 1: a continuous commitment (same background as the hero) ---- */}
      <section className="studio section sect--cream">
        <div className="studio__grid" style={{ alignItems: "start" }}>
          <div className="studio__body about-lead">
            <div className="label">A continuous commitment</div>
            <h2 className="rv">
              Built into <em>the way we work.</em>
            </h2>
          </div>
          <div className="studio__body">
            <p className="rv">
              Responsible manufacturing is not a fixed destination or a
              collection of isolated initiatives. It requires us to
              continually examine how we work, understand our impact and
              identify where we can do better.
            </p>
            <p className="rv">
              Our environmental and social policies provide a framework for
              that process, with objectives and improvement initiatives
              reviewed annually.
            </p>
            <p className="rv">
              We believe that responsibility is strengthened by
              participation. For that reason, our team is trained to
              understand the standards and requirements relevant to our work
              and to apply them with care and consistency in their
              day-to-day practice.
            </p>
            <p className="note rv">
              Progress is not a finished state. It is a way of working.
            </p>
          </div>
        </div>
      </section>

      {/* ---- block 2: responsible sourcing ---- */}
      <section className="section sect--wool" style={{ padding: "14vh 0" }}>
        <div className="sect-head">
          <span className="sect-head__num">Responsible sourcing</span>
          <h2 className="sect-head__title">
            Better decisions require <em>better information.</em>
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
          Our responsibility extends beyond our own facilities and into the
          supply chain behind every product. We work with certified suppliers
          and continually develop our understanding of the materials,
          components and solutions available to support different product
          and sustainability requirements. This knowledge allows us to have
          informed conversations with our clients, understand their
          priorities and support the choices appropriate to each project —
          without imposing a single approach to responsible product
          development.
        </p>
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

      {/* ---- certifications accordion ---- */}
      <section className="section sect--cream" style={{ padding: "0 0 3vh" }}>
        <CertAccordion certs={CERTS} />

        {/* ---- Ecocert licence — the standalone, high-contrast callout ---- */}
        <div className="ecocert rv">
          <div className="ecocert__label">Certified by</div>
          <div className="ecocert__name">Ecocert Greenlife</div>
          <div className="ecocert__licence">Licence 270713</div>
        </div>
      </section>

      {/* ---- block: recognised by Global Standard ---- */}
      <section className="section sect--wool" style={{ padding: "14vh 0" }}>
        <div className="sect-head">
          <span className="sect-head__num">Recognised by Global Standard</span>
          <h2 className="sect-head__title">
            Featured in the <em>GOTS Annual Report 2025.</em>
          </h2>
        </div>
        <div style={{ maxWidth: "700px", margin: "4vh clamp(20px,5vw,72px) 0" }}>
          <p
            className="rv"
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              letterSpacing: ".02em",
              color: "rgba(28,25,19,.62)",
            }}
          >
            In 2025, Madalena Beça was invited to contribute to the Global
            Standard Annual Report, sharing our experience of certification
            and the role it has played in strengthening transparency,
            accountability and continuous improvement within our company.
          </p>
          <blockquote className="jr-quote rv">
            &ldquo;Sustainability is not a marketing exercise but a
            responsibility that shapes how we work every day.&rdquo;
          </blockquote>
          <p className="jr-article__author rv" style={{ marginTop: 0 }}>
            Tatiana de Beça Teixeira — Head of Commercial &amp; Marketing
            Strategy
            <br />
            Madalena Beça Knitwear — Global Standard Annual Report 2025
          </p>
          <a
            className="btn rv"
            style={{ marginTop: "30px" }}
            href="#"
            data-hover=""
          >
            <span>Read the report</span>
            <i />
          </a>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
        <div className="label cta__label rv">Sustainability</div>
        <p className="cta__txt rv">
          Your standards. <em>Our responsibility.</em>
        </p>
        <p
          className="rv"
          style={{
            maxWidth: "520px",
            margin: "3vh auto 0",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "rgba(28,25,19,.62)",
          }}
        >
          Every brand approaches responsible sourcing differently. We bring
          the knowledge, manufacturing experience and certified capabilities
          to support the requirements of each project.
        </p>
        <a className="btn cta__btn rv" href="/start-a-project" data-hover="">
          <span>Start a project</span>
          <i />
        </a>
      </section>
    </>
  );
}
