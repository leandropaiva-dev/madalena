import type { Metadata } from "next";
import Journal from "@/components/Journal";
import SiteEffects from "@/components/SiteEffects";
// TEMPORARY — copywriting review layer. Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";

export const metadata: Metadata = {
  title: "Journal — Madalena Beça Knitwear",
};

export default function JournalPage() {
  return (
    <main className="pagetop">
      <Journal />
      <SiteEffects />
      <ReviewLayer />
    </main>
  );
}
