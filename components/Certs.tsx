const BADGES = [
  { name: "GOTS", year: "2017" },
  { name: "RWS", year: "2022" },
  { name: "GRS", year: "2022" },
  { name: "OCS", year: "2023" },
];

export default function Certs() {
  return (
    <section className="certs section" id="responsibility">
      <div
        className="certs__bg"
        id="certsBg"
        style={{ backgroundImage: "url(/images/certs-bg.jpg)" }}
      ></div>
      <div className="certs__veil"></div>
      <div className="certs__inner">
        <div
          className="label"
          style={{ color: "rgba(250,247,241,.5)", marginBottom: "5vh" }}
        >
          Responsibility
        </div>
        <div className="certs__quote rv">
          A fully certified supply chain that respects{" "}
          <em>both people and the environment.</em>
        </div>
        <div className="certs__badges">
          {BADGES.map((b, i) => (
            <div className="badge rv" data-hover="" key={i}>
              <b>{b.name}</b>
              <span>{b.year}</span>
            </div>
          ))}
        </div>
        <div className="certs__lic rv">
          Certified by Ecocert Greenlife — License 270713
        </div>
      </div>
    </section>
  );
}
