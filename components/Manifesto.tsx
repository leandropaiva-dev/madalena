export default function Manifesto() {
  return (
    <section className="manifesto section" id="about">
      <p className="manifesto__txt" id="manifestoTxt">
        A <em>family</em> of makers: precise, attentive and closely involved in
        every stage of development. Calm, technical, and made entirely in our own
        facilities in Portugal.
      </p>
      <div className="stats">
        <div className="stat rv">
          <b data-count="1998">1998</b>
          <span>Year of foundation.</span>
        </div>
        <div className="stat rv">
          <b data-count="4">4</b>
          <span>Internationally recognised textile certifications.</span>
        </div>
        <div className="stat rv">
          <b data-count="15">15</b>
          <span>Countries our knitwear has been exported to.</span>
        </div>
        <div className="stat rv">
          <b>
            <span data-count="100">100</span>%
          </b>
          <span>Made in Portugal.</span>
        </div>
      </div>
    </section>
  );
}
