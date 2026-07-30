import type { Metadata } from "next";
import Manifesto from "@/components/Manifesto";
import Studio from "@/components/Studio";
import SiteEffects from "@/components/SiteEffects";
// TEMPORARY — copywriting review layer. Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";

export const metadata: Metadata = {
  title: "About MBK — Madalena Beça Knitwear",
};

export default function About() {
  return (
    <main className="pagetop">
      <Manifesto />
      <Studio />
      <SiteEffects />
      <ReviewLayer />
    </main>
  );
}
