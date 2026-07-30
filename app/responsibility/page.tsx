import type { Metadata } from "next";
import Certs from "@/components/Certs";
import SiteEffects from "@/components/SiteEffects";
// TEMPORARY — copywriting review layer. Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";

export const metadata: Metadata = {
  title: "Responsibility — Madalena Beça Knitwear",
};

export default function Responsibility() {
  return (
    <main>
      <Certs />
      <SiteEffects />
      <ReviewLayer />
    </main>
  );
}
