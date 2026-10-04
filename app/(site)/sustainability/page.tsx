import type { Metadata } from "next";
import Certs from "@/components/Certs";
import CertAccordion from "@/components/CertAccordion";

const TITLE = "Sustainability — Certifications · Madalena Beça Knitwear";
const DESCRIPTION =
  "Certifications are not badges — they are documented proof of how we choose to produce. Certified to GOTS, GRS, RWS and OCS, audited by Ecocert Greenlife, with a traceable supply chain.";
const OG_IMAGE = "/images/gots-report-cover.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/sustainability",
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

const CERTS = [
  {
    name: "GOTS",
    full: "Global Organic Textile Standard",
    since: "Certified since 2017",
    covers:
      "Textiles made from certified organic natural fibres, with environmental and social criteria applied across processing and manufacturing.",
    requires:
      "Annual in-person auditing, separation of certified production, and documented traceability from certified input through to the finished garment.",
    gives: "A substantiated organic claim supported by transaction documentation.",
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
    gives:
      "A verified recycled-content claim supported by documented chain of custody.",
    condition:
      "Applies when the selected material and supply chain meet the standard's certification and documentation requirements.",
  },
  {
    name: "RWS",
    full: "Responsible Wool Standard",
    since: "Certified since 2022",
    covers:
      "Wool from farms audited for animal welfare and land management, tracked through the supply chain.",
    requires:
      "Certified sourcing and documented custody of the fibre through to the finished garment.",
    gives:
      "A substantiated RWS wool claim supported by documented chain of custody.",
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
      "A verified organic-content claim supported by chain-of-custody documentation.",
    condition: "Applies according to project scope and documentation.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr sust-hero">
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
      <section className="studio section sect--cream sust-commitment">
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
        <div className="sust-sourcing">
          <div className="sect-head">
            <span className="sect-head__num">Responsible sourcing</span>
            <h2 className="sect-head__title">
              Better decisions require <em>better information.</em>
            </h2>
          </div>
          <p className="rv sust-sourcing__copy">
            Our responsibility extends beyond our own facilities and into the
            supply chain behind every product. We work with certified
            suppliers and continually develop our understanding of the
            materials, components and solutions available to support
            different product and sustainability requirements. This
            knowledge allows us to have informed conversations with our
            clients, understand their priorities and support the choices
            appropriate to each project — without imposing a single approach
            to responsible product development.
          </p>
        </div>
      </section>

      {/* ---- certified supply chain (reuses the home Certs section) ---- */}
      <Certs />

      {/* ---- standards intro ---- */}
      <section className="section sect--cream" style={{ padding: "15vh 0 3vh" }}>
        <div className="sect-head">
          <span className="sect-head__num">CERTIFIED &amp; TRACEABLE</span>
          <h2 className="sect-head__title">
            Standards that make <em>responsibility measurable.</em>
          </h2>
        </div>
        <div style={{ maxWidth: "1500px", margin: "4vh auto 0", padding: "0 clamp(20px,5vw,72px)" }}>
          <p
            className="rv"
            style={{
              maxWidth: "620px",
              fontSize: "15px",
              lineHeight: 1.8,
              letterSpacing: ".02em",
              color: "rgba(28,25,19,.62)",
            }}
          >
            Independent certification provides a recognised framework for
            traceability, environmental responsibility and social
            accountability across textile supply chains. Madalena Beça is
            certified under four internationally recognised textile standards:
          </p>
        </div>
      </section>

      {/* ---- certifications accordion ---- */}
      <section className="section sect--cream" style={{ padding: "0 0 3vh" }}>
        <CertAccordion certs={CERTS} />

        {/* ---- Ecocert — subordinate certifying-body line, not a 5th standard ---- */}
        <div className="ecocert-line rv">
          Certified by Ecocert Greenlife &middot; Licence No. 270713
        </div>

        <p
          className="note rv"
          style={{ maxWidth: "640px", margin: "2vh auto 0", textAlign: "center" }}
        >
          Certification of individual products depends on the materials,
          supply chain and certification requirements applicable to each
          project.
        </p>
      </section>

      {/* ---- block: recognised by Global Standard ---- */}
      <section
        className="section sect--wool sust-recognition"
        style={{ paddingTop: "14vh" }}
      >
        <div className="sust-recognition__grid">
          <div className="sust-recognition__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gots-report-cover.jpg"
              alt="Cover of the GOTS Annual Report 2025"
            />
          </div>
          <div className="sust-recognition__body">
            <div className="sect-head">
              <span className="sect-head__num">External recognition</span>
              <h2 className="sect-head__title">
                Featured in the GOTS <em>Annual Report 2025.</em>
              </h2>
            </div>
            <p
              className="rv sust-recognition__lede"
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
            <blockquote className="jr-quote rv sust-recognition__quote">
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
              href="/report.pdf"
              download
              data-hover=""
            >
              <span>Read the report</span>
              <i />
            </a>
          </div>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section sust-cta">
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
          <span>Start a Project</span>
          <i />
        </a>
      </section>
    </>
  );
}
