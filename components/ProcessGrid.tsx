"use client";

import { useState } from "react";
import Image from "next/image";
import MobileCarousel from "./MobileCarousel";
import { MEDIA } from "./Capabilities";

const STAGES = [
  {
    n: "01",
    title: "Review & Quotation",
    paragraphs: [
      "We begin by understanding the project as a whole — the intended product, fit, construction, gauge, stitch or structure, yarn, quantities, target price and delivery requirements.",
      "Where required, we can source yarn options, support product definition and assess whether the requested combination of yarn, gauge, construction and target price is technically and commercially viable before development begins. When another route may better protect the intended result, we raise it for consideration.",
      "Once the route is agreed, quotation is aligned with the approved product parameters so development starts with a clear commercial framework.",
    ],
  },
  {
    n: "02",
    title: "Development & Sampling",
    paragraphs: [
      "Once the route and price framework are agreed, development begins. We can work from a complete tech pack or support the development of fit and measurements where these still need to be defined.",
      "We develop swatches in the approved yarn to establish the appropriate stitch length, density and structure before moving into the first garment sample. From there, construction, fit, measurements, finishing and assembly can be assessed and refined through the sampling process.",
      "During development, we can also source the trims and components required for the product, including zips, buttons and labels.",
    ],
  },
  {
    n: "03",
    title: "Approval & Planning",
    paragraphs: [
      "Each sample round is reviewed against the agreed specifications and adjustments are documented through approval.",
      "Once the style, yarn, trims, quantities and delivery window are confirmed, we plan production capacity and timing. Where appropriate, production outside traditional peak periods may also be considered to create greater flexibility in planning.",
    ],
  },
  {
    n: "04",
    title: "Production & Quality Control",
    paragraphs: [
      "Production is carried out on our flat-knitting machines across gauges 3, 5, 7, 10 and 12, allowing us to work from heavier constructions to fine-gauge knitwear.",
      "Each style follows its approved specifications through knitting, garment assembly, finishing and final preparation. Quality control is integrated throughout the process rather than treated as a single final inspection.",
      "Relevant checkpoints include measurements after finishing, workmanship control and final conformity checks before release.",
    ],
  },
  {
    n: "05",
    title: "Delivery & Reorders",
    paragraphs: [
      "Following final control, garments are prepared, packed and shipped according to the agreed delivery schedule.",
      "For established styles, future reorders can build on the approved programme, specifications and known product behaviour, allowing the process to move more efficiently.",
    ],
  },
];

export default function ProcessGrid() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="hww section sect--cream hww-process">
      <div className="hww__head">
        <div className="label">From yarn to garment</div>
        <h2 className="hww__title rv">
          How we work, <em>stage by stage.</em>
        </h2>
      </div>

      <MobileCarousel className="hww__grid" count={STAGES.length}>
        {STAGES.map((s, i) => (
          <div className="hww__step rv" key={s.n}>
            <div className="hww__imgwrap">
              <Image
                src={MEDIA[i].src}
                alt={MEDIA[i].alt}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1100px) 33vw, 20vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="hww__steptitle">
              {s.n}. {s.title.split(" & ")[0]} &<br />
              {s.title.split(" & ")[1]}
            </h3>
            <div className={"hww__textclip" + (expanded ? " is-open" : "")}>
              {s.paragraphs.map((p, j) => (
                <p className="hww__steptext" key={j}>
                  {p}
                </p>
              ))}
              {!expanded && <div className="hww__textfade" />}
            </div>
          </div>
        ))}
      </MobileCarousel>

      <span
        className="hww__more"
        role="button"
        tabIndex={0}
        onClick={() => setExpanded((e) => !e)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setExpanded((ex) => !ex);
        }}
      >
        {expanded ? "Read less" : "Read more"}
      </span>
    </section>
  );
}
