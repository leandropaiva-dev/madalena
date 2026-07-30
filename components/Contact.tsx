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
          Start a Project
        </div>
        <h2 className="contact__title rv">
          Let&apos;s knit <em>tomorrow</em> together.
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
          <a className="contact__row rv" href="tel:+351919534493" data-hover="">
            <span>Phone</span>
            <b>+351 919 534 493</b>
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
            href="https://www.madalenabecaknitwear.com"
            target="_blank"
            rel="noopener"
            data-hover=""
          >
            <span>Website</span>
            <b>madalenabecaknitwear.com</b>
          </a>
        </div>
      </div>
      <div className="footer">
        <span>© Madalena Beça Têxtil, Lda: Since 1998</span>
        <span>Quiet excellence in contemporary knitwear</span>
        <span>Made in Portugal</span>
      </div>
    </section>
  );
}
