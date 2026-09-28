import Image from "next/image";
import Link from "next/link";

export const ITEMS = [
  {
    n: "01",
    title: "Review & Quotation",
    short:
      "Project route, technical considerations and quotation aligned before development begins.",
    body: "We begin by reviewing the project and confirming the route forward. Where relevant, technical considerations are raised before sampling begins, while quotation is aligned with the agreed product, yarn and quantities. This creates a clear foundation for development and production.",
  },
  {
    n: "02",
    title: "Development & Sampling",
    short:
      "From technical specifications or early references to a product ready to assess and refine.",
    body: "Depending on the project, we can work from complete technical specifications or support earlier stages of knitwear development. Sampling brings the product into form, allowing construction, fit and finish to be assessed and refined before production.",
  },
  {
    n: "03",
    title: "Approval & Planning",
    short:
      "Approved product, quantities and delivery window aligned before production.",
    body: "Once the product is approved, we align the requirements for production and plan according to the agreed quantities and delivery window. Where timing allows, we can also explore production outside traditional peak periods — creating greater flexibility for the brand while helping us build more balanced production throughout the year.",
  },
  {
    n: "04",
    title: "Production & Quality Control",
    short:
      "Production follows approved specifications, with quality monitored across the process.",
    body: "Production and quality control remain closely connected within our own facilities in Portugal. Each style follows its approved specifications throughout production, with quality monitored across the process before final release.",
  },
  {
    n: "05",
    title: "Delivery & Reorders",
    short:
      "Final control and shipment, with established styles able to build on previous development.",
    body: "Following final control, garments are prepared and shipped according to the agreed delivery schedule. For established styles, reorders can build on work already developed and approved, allowing brands to replenish successful products with greater flexibility and, where possible, lower quantities.",
  },
];

export const MEDIA = [
  { src: "/images/cap-design.jpg", alt: "Review and quotation" },
  { src: "/images/cap-knitting.jpg", alt: "Development and sampling" },
  { src: "/images/cap-confection.jpg", alt: "Approval and planning" },
  { src: "/images/cap-quality.jpg", alt: "Production and quality control" },
  { src: "/images/cap-fitting.jpg", alt: "Delivery and reorders" },
];

export default function Capabilities() {
  return (
    <section className="hww section" id="capabilities">
      <div className="hww__head">
        <div className="label">From development to production.</div>
        <h2 className="hww__title rv">
          Five stages, <em>one accountable partner.</em>
        </h2>
        <p className="hww__sub rv">
          <Link href="/how-we-work" className="hww__link" data-hover="">
            Explore how we work
          </Link>
        </p>
      </div>

      <div className="hww__grid">
        {ITEMS.map((it, i) => (
          <div className="hww__step rv" key={it.n}>
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
              {it.n}. {it.title.split(" & ")[0]} &<br />
              {it.title.split(" & ")[1]}
            </h3>
            <p className="hww__steptext">{it.short}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
