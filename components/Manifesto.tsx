export default function Manifesto() {
  return (
    <section className="manifesto section" id="about">
      <div className="manifesto__inner">
        <div className="label rv">
          Technical development. In-house manufacturing. One accountable
          partner.
        </div>
        <h2 className="manifesto__txt rv">
          A <em>family</em> of makers
        </h2>
        <div className="manifesto__body">
          <p className="rv">
            Precise, attentive and closely involved in every stage of
            development. Made entirely in our own facilities in Portugal.
          </p>
          <p className="rv">
            From development and programming to knitting, garment assembly,
            finishing and quality control, MBK keeps the core stages of flat-knit
            production closely connected — giving fashion brands direct access to
            the people developing and making their product.
          </p>
        </div>

        <div className="proof">
          <div className="proof__item rv">
            <div className="proof__label">Client-specific development</div>
            <p>Technical support from yarn and structure through fit and approval.</p>
          </div>
          <div className="proof__item rv">
            <div className="proof__label">In-house flat-knit production</div>
            <p>Core development and production in our own facilities in Penafiel, Portugal.</p>
          </div>
          <div className="proof__item rv">
            <div className="proof__label">Family-owned since 1998</div>
            <p>Continuity of knowledge, people and relationships across collections.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
