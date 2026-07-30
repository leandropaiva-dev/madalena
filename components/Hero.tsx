export default function Hero() {
  return (
    <header className="hero" id="top">
      <canvas id="knit-canvas"></canvas>
      <div className="hero__veil"></div>
      <div className="hero__grain"></div>
      <div className="hero__inner">
        <div className="hero__kicker rv" id="heroKicker">
          Flat-knit development and manufacturing: since 1998
        </div>
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
        <div className="hero__sub rv" id="heroSub">
          <span>Made in Portugal</span>
          <span>From yarn to garment</span>
          <span>For premium brands</span>
        </div>
        <div className="hero__cta rv" id="heroCta">
          <a className="btn" href="/contacts" data-hover="">
            <span>Start a Project</span>
            <i></i>
          </a>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll</span>
        <i></i>
      </div>
    </header>
  );
}
