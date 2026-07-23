export default function Loader() {
  return (
    <div className="loader" id="loader">
      <div className="loader__logo">
        <em>m</em>adalena{" "}
        <span
          style={{
            fontSize: ".5em",
            letterSpacing: ".4em",
            color: "var(--warmgrey)",
          }}
        >
          — knitwear
        </span>
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
