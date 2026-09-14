import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import FanSlider from "@/components/FanSlider";
import Capabilities from "@/components/Capabilities";
import Certs from "@/components/Certs";
import Studio from "@/components/Studio";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import SiteEffects from "@/components/SiteEffects";
import BeforeAfter from "@/components/BeforeAfter";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Cursor />
      <Loader />
      <Nav />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <FanSlider />
        <Capabilities />
        <Studio />
        <Certs />
        <Gallery />
        <Contact />
      </main>
      <SiteEffects />
      <BeforeAfter />
    </>
  );
}
