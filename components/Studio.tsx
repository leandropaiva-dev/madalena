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
            The creative heart of our factory.{" "}
            <em>Creating tomorrow&apos;s knits.</em>
          </h2>
          <p className="rv">
            Innovation and technical expertise come together to transform ideas
            into unique designs. With a specialized team and state-of-the-art
            equipment, we develop exclusive knits that combine aesthetics,
            functionality and quality.
          </p>
          <p className="rv">
            Our goal is to anticipate trends, create customized solutions, and
            support our clients through every stage of development — from concept
            to final production.
          </p>
          <div className="studio__sig rv">madalena beça</div>
        </div>
      </div>
    </section>
  );
}
