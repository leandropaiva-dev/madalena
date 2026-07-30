import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import FanSlider from "@/components/FanSlider";
import Gallery from "@/components/Gallery";
import SiteEffects from "@/components/SiteEffects";
// TEMPORARY — copywriting review layer. Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";

export default function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <FanSlider />
      <Gallery />
      <SiteEffects />
      <ReviewLayer />
    </>
  );
}
