import Image from "next/image";

const CARDS = [
  { src: "/images/craft-women.jpg", alt: "Womenswear knit", cap: "Womenswear" },
  { src: "/images/craft-men.jpg", alt: "Menswear knit", cap: "Menswear" },
  { src: "/images/craft-kids.jpg", alt: "Kidswear knit", cap: "Kidswear" },
  { src: "/images/craft-baby.jpg", alt: "Babywear knit", cap: "Babywear" },
  {
    src: "/images/craft-accessories.jpg",
    alt: "Knit accessories",
    cap: "Accessories",
  },
];

export default function FanSlider() {
  return (
    <section className="breadth section" id="craft">
      <div className="breadth__grain"></div>
      <div className="breadth__head">
        <div className="breadth__label">What we make</div>
        <h2 className="breadth__title rv">
          Knitwear across <em>collections.</em>
        </h2>
      </div>
      <div className="breadth__grid">
        {CARDS.map((c) => (
          <figure className="breadth__card rv" key={c.cap}>
            <div className="breadth__imgwrap">
              <div className="breadth__imgclip">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width:620px) 100vw, (max-width:1024px) 33vw, 20vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <figcaption>{c.cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
