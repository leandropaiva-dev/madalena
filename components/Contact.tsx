export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div
        className="contact__bg"
        style={{ backgroundImage: "url(/images/contact-bg.jpg)" }}
      ></div>
      <div className="contact__inner">
        <div
          className="label"
          style={{ color: "rgba(250,247,241,.4)", marginBottom: "4vh" }}
        >
          Get in touch
        </div>
        <h2 className="contact__title rv">
          Where your next <em>knit</em> begins.
        </h2>
        <div className="contact__rows">
          <a
            className="contact__row rv"
            href="mailto:info@malhasmadalena.com"
            data-hover=""
          >
            <span>Email</span>
            <b>info@malhasmadalena.com</b>
          </a>
          <a
            className="contact__row rv"
            href="https://www.instagram.com/madalenabecaknitwear"
            target="_blank"
            rel="noopener"
            data-hover=""
          >
            <span>Instagram</span>
            <b>@madalenabecaknitwear</b>
          </a>
          <a
            className="contact__row rv"
            href="https://www.linkedin.com/company/madalenabecaknitwear/"
            target="_blank"
            rel="noopener"
            data-hover=""
          >
            <span>LinkedIn</span>
            <b>madalenabecaknitwear</b>
          </a>
        </div>
      </div>
      <div className="footer">
        <span>© Madalena Beça Têxtil, Lda — Since 1998</span>
        <span>Flat knitwear manufacturing in Portugal since 1998.</span>
        <span>Made in Portugal</span>
      </div>
    </section>
  );
}
