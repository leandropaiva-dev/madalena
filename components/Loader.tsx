export default function Loader() {
  return (
    <div className="loader" id="loader">
      <div className="loader__logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-madalena.png" alt="Madalena Beça Knitwear" />
      </div>
      <div className="loader__bar">
        <i id="loaderBar"></i>
      </div>
      <div className="loader__pct" id="loaderPct">
        00
      </div>
    </div>
  );
}
