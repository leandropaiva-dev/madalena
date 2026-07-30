export default function Studio() {
  return (
    <section className="studio section" id="studio">
      <div className="studio__grid">
        <div className="studio__imgwrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/studio-yarn.jpg" alt="Yarn cones" id="studioImg" />
        </div>
        <div className="studio__body">
          <div className="label">The Studio Design</div>
          <h2 className="rv">
            Creativity connected to manufacturability.{" "}
            <em>Client-specific knitwear development.</em>
          </h2>
          <p className="rv">
            Studio Design supports client-specific development: translating
            references, sketches and early-stage concepts into knitwear that can
            be made. We develop technical routes, knit structures, measurements
            and fit.
          </p>
          <p className="rv">
            Some clients arrive with a complete tech pack. Others arrive with a
            reference and a target price. Both are workable starting points.
            Where commissioned, we can contribute to a specific collection:
            always within the client&apos;s creative direction.
          </p>
          <div className="studio__sig rv">madalena beça</div>
        </div>
      </div>
    </section>
  );
}
