import type { Metadata } from "next";
import ProcessGrid from "@/components/ProcessGrid";
import ProcessShowcase from "@/components/ProcessShowcase";

export const metadata: Metadata = {
  title: "How We Work — MBK · Madalena Beça Knitwear",
  description:
    "From programming and knitting to assembly, quality control and packing — produced in our own facilities in Penafiel, Portugal. One factory, one accountable partner.",
};

export default function HowWeWorkPage() {
  return (
    <>
      {/* ---- page hero ---- */}
      <header className="jr">
        <div className="jr-hero">
          <div className="label rv">How we work</div>
          <h1 className="jr-hero__title rv">
            From development to production, <em>under one roof.</em>
          </h1>
          <p className="jr-hero__sub rv">
            Every brand works differently. So do we.
          </p>
        </div>
      </header>

      {/* ---- block 1: made in our own facilities (same background as the hero, so it reads as one continuous opening) ---- */}
      <section className="studio section sect--cream">
        <div className="studio__grid">
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cap-knitting.jpg"
              alt="Programming and flat knitting in our own facilities"
              data-parallax=""
            />
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
            <p className="rv">
              Our machinery supports a broad range of gauges and
              constructions, allowing us to produce across different product
              categories, weights and seasons.
            </p>
            <p className="note rv">
              Specialised processes outside our facilities are entrusted to
              selected partners when required.
            </p>
          </div>
        </div>
      </section>

      {/* ---- block 2: the process — static grid, all 5 stages visible at once ---- */}
      <ProcessGrid />

      {/* ---- block 2b (draft alternative for comparison): list left, photo right,
           description below the photo — same visual language as the homepage
           Capabilities block, but click-to-switch instead of scroll-pinned ---- */}
      <ProcessShowcase />

      {/* ---- block 3: craft ---- */}
      <section className="studio section sect--cream">
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
              And as partnerships grow, so does our understanding of each
              brand. Collection after collection, familiarity with its
              product, standards and ways of working makes collaboration
              increasingly fluid, informed and efficient.
            </p>
          </div>
          <div className="studio__imgwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/knit-texture.jpg"
              alt="Knit texture — calm movement, natural light"
              data-parallax=""
            />
          </div>
        </div>
      </section>

      {/* ---- closing CTA (bridges into the contact footer) ---- */}
      <section className="cta section">
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
