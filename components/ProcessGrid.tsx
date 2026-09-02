import { ITEMS } from "./Capabilities";

export default function ProcessGrid() {
  return (
    <section className="why section sect--wool">
      <div className="sect-head">
        <span className="sect-head__num">From yarn to garment</span>
        <h2 className="sect-head__title">
          How we work, <em>stage by stage.</em>
        </h2>
      </div>
      <div className="why__grid why__grid--five">
        {ITEMS.map((it) => (
          <div className="why__item rv" key={it.n}>
            <i>{it.n}</i>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
