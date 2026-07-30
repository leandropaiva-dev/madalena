import type { Metadata } from "next";
import Capabilities from "@/components/Capabilities";
import Why from "@/components/Why";
import SiteEffects from "@/components/SiteEffects";
// TEMPORARY — copywriting review layer. Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";

export const metadata: Metadata = {
  title: "How We Work — Madalena Beça Knitwear",
};

export default function HowWeWork() {
  return (
    <main className="pagetop">
      <Capabilities />
      <Why />
      <SiteEffects />
      <ReviewLayer />
    </main>
  );
}
