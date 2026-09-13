import Image from "next/image";
import Link from "next/link";

export default function Studio() {
  return (
    <section className="studio section" id="studio">
      <div className="studio__grid">
        <div className="studio__imgwrap">
          <Image
            src="/images/studio-yarn.jpg"
            alt="Comparing yarn shades from a swatch card"
            id="studioImg"
            fill
            sizes="(max-width:900px) 100vw, 45vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="studio__body">
          <div className="label">The Studio</div>
          <h2 className="rv">
            Where ideas take shape in <em>knit.</em>
          </h2>
          <p className="rv">
            Our in-house Studio brings together yarn, programming, construction
            and garment development, connecting creative direction with the
            realities of production.
          </p>
          <Link href="/studio" className="studio__link" data-hover="">
            Explore the Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
