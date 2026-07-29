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
          <b data-count="28">28</b>
          <span>Years of accumulated technical and commercial experience.</span>
        </div>
        <div className="stat rv">
          <b data-count="12">12</b>
          <span>Countries where our knitwear reaches.</span>
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
