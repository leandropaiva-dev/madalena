import type { Metadata } from "next";
import Contact from "@/components/Contact";
import SiteEffects from "@/components/SiteEffects";
// TEMPORARY — copywriting review layer. Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";

export const metadata: Metadata = {
  title: "Contacts — Madalena Beça Knitwear",
};

export default function Contacts() {
  return (
    <main>
      <Contact />
      <SiteEffects />
      <ReviewLayer />
    </main>
  );
}
