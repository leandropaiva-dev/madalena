export default function Hero() {
  return (
    <header className="hero" id="top">
      <canvas id="knit-canvas"></canvas>
      <div className="hero__veil"></div>
      <div className="hero__grain"></div>
      <div className="hero__inner">
        {/* Hidden for now — see conversation with client.
        <div className="hero__kicker rv" id="heroKicker">
          Knitwear manufacturing partner — since 1998
        </div>
        */}
        <h1 className="hero__title" id="heroTitle">
          <span className="line">
            <span>
              <em>Quiet</em> excellence
            </span>
          </span>
          <span className="line">
            <span>in contemporary</span>
          </span>
          <span className="line">
            <span>knitwear</span>
          </span>
        </h1>

        {/* Company descriptor — the first screen's informative layer.
            Sits between the display title and the supporting references. */}
        <p className="hero__lede rv" id="heroLede">
          An independent, family-owned knitwear manufacturer in Penafiel,
          Portugal. Since 1998 we have developed and produced flat knitwear in
          our own facilities — from yarn to finished garment.
        </p>

        <div className="hero__foot rv" id="heroFoot">
          <div className="hero__refs">
            <span className="hero__ref">Made in Portugal</span>
            <span className="hero__ref hero__ref--certs">
              <span>GOTS</span>
              <span>RWS</span>
              <span>GRS</span>
              <span>OCS</span>
            </span>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll</span>
        <i></i>
      </div>
    </header>
  );
}
