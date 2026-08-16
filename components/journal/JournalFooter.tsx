import Link from "next/link";

export default function JournalFooter() {
  return (
    <footer className="jr-foot">
      <div className="jr-foot__inner">
        <div className="jr-foot__brand">
          <Link className="jr-foot__logo" href="/" data-hover="">
            madalena<small>beça knitwear</small>
          </Link>
        </div>
        <div className="jr-foot__links">
          <Link href="/" data-hover="">
            Home
          </Link>
          <a
            href="https://www.instagram.com/madalenabecaknitwear"
            target="_blank"
            rel="noopener"
            data-hover=""
          >
            Instagram
          </a>
          <a href="mailto:info@malhasmadalena.com" data-hover="">
            Contact
          </a>
        </div>
      </div>
      <div className="jr-foot__base">
        <span>© Madalena Beça Têxtil, Lda — Since 1998</span>
        <span>Made in Portugal</span>
      </div>
    </footer>
  );
}
