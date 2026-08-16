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
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import SiteEffects from "@/components/SiteEffects";
// TEMPORARY — copywriting review layer. Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Nav />
      <Hero />
      <Manifesto />
      <FanSlider />
      <Capabilities />
      <Certs />
      <Studio />
      <Gallery />
      <Why />
      <Contact />
      <SiteEffects />
      <ReviewLayer />
    </>
  );
}
