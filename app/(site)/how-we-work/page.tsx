import type { Metadata } from "next";
import ProcessGrid from "@/components/ProcessGrid";

const TITLE = "How We Work — MBK · Madalena Beça Knitwear";
const DESCRIPTION =
  "From programming and knitting to assembly, quality control and packing — produced in our own facilities in Penafiel, Portugal. One factory, one accountable partner.";
const OG_IMAGE = "/images/cap-knitting.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/how-we-work",
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

export default function HowWeWorkPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr hww-hero">
        <div className="jr-hero">
          <div className="label rv">How we work</div>
          <h1 className="jr-hero__title rv">
            From development to production, <em>under one roof.</em>
          </h1>
          <p className="jr-hero__sub rv">
            From complete technical specifications to earlier-stage
            development, we adapt the process to the needs of each project.
          </p>
        </div>
      </header>

      {/* ---- block 1: the process — static grid, all 5 stages visible at once,
           same card visual as the homepage Capabilities block ---- */}
      <ProcessGrid />

      {/* ---- block 2: made in our own facilities (now placed after the process,
           proving the structure behind the sequence already explained) ---- */}
      <section className="studio section sect--cream hww-facility">
        <div className="studio__grid">
          <div className="hww-facility-media">
            <div className="hww-facility-media__main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-knitting.jpg"
                alt="Circular knitting machine in operation in our facilities"
              />
            </div>
            <div className="hww-facility-media__side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-assembly.jpg"
                alt="Linking a knitted panel by hand"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-finishing.jpg"
                alt="Hand-finishing the edge of a knitted garment"
              />
            </div>
          </div>
          <div className="studio__body">
            <div className="label">In-house production</div>
            <h2 className="rv">
              Made in our <em>own facilities.</em>
            </h2>
            <p className="rv">
              Development, programming, knitting, garment assembly, finishing
              and quality control come together within our facilities in
              Penafiel, Portugal.
            </p>
            <p className="rv">
              Keeping the core stages of knitwear production closely connected
              gives our teams direct visibility over the product from
              development through to completion — and gives our clients one
              accountable manufacturing partner throughout.
            </p>
            <p className="note rv">
              Specialised processes outside our facilities are entrusted to
              selected partners when required.
            </p>
          </div>
        </div>
      </section>

      {/* ---- block 3: craft ---- */}
      <section className="studio section sect--cream hww-knowhow">
        <div className="studio__grid studio__grid--wide-text">
          <div className="studio__body">
            <div className="label">Know-how</div>
            <h2 className="rv">
              What time in one place <em>produces.</em>
            </h2>
            <p className="rv">
              Madalena Beça Knitwear has been developing and producing flat
              knitwear since 1998.
            </p>
            <p className="rv">
              Over time, technical knowledge becomes judgement: the ability to
              recognise what deserves a closer look, anticipate potential
              challenges and bring experience into a project at the moments
              where it can make a difference.
            </p>
            <p className="rv">
              We work from each brand&rsquo;s creative and technical
              direction, contributing our manufacturing perspective whenever
              we believe it can help protect the intended result, simplify
              development or avoid unnecessary iterations.
            </p>
            <p className="rv">
              As partnerships grow, so does our understanding of each brand.
              Collection after collection, familiarity with its product,
              standards and ways of working makes collaboration increasingly
              fluid, informed and efficient.
            </p>
          </div>
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-quality.jpg"
              alt="Measuring and reviewing a finished garment during quality control"
              data-parallax=""
            />
          </div>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section hww-cta">
        <div className="label cta__label rv">How we work</div>
        <p className="cta__txt rv">
          The partner you brief is <em>the partner who makes it.</em>
        </p>
        <a className="btn cta__btn rv" href="/start-a-project" data-hover="">
          <span>Start a Project</span>
          <i />
        </a>
      </section>
    </>
  );
}
