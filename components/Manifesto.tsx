export default function Manifesto() {
  return (
    <section className="manifesto section" id="about">
      <p className="manifesto__txt" id="manifestoTxt">
        We are not an industrial giant. We are not a distant luxury house. We are
        a <em>family</em> of makers — small enough to care, expert enough to
        deliver. Precision, calm and texture, knitted into every garment.
      </p>
      <div className="stats">
        <div className="stat rv">
          <b data-count="1998">1998</b>
          <span>Founded in Portugal</span>
        </div>
        <div className="stat rv">
          <b>
            <span data-count="27">27</span>+
          </b>
          <span>Years of knitwear</span>
        </div>
        <div className="stat rv">
          <b data-count="4">4</b>
          <span>Certifications</span>
        </div>
        <div className="stat rv">
          <b>3–12</b>
          <span>Machine gauges</span>
        </div>
      </div>
    </section>
  );
}
