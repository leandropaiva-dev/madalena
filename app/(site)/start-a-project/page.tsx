import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

const TITLE = "Start a Project — MBK · Madalena Beça Knitwear";
const DESCRIPTION =
  "Tell us about your project — development, production or both. A few details help us direct your enquiry to the right person.";
const OG_IMAGE = "/images/factory-packing.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/start-a-project",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function StartAProjectPage() {
  return (
    <>
      <header className="jr">
        <div className="jr-hero">
          <div className="label rv">Start a project</div>
          <h1 className="jr-hero__title rv">
            Tell us about <em>your project.</em>
          </h1>
          <p className="jr-hero__sub rv">
            A few details help us understand what you&apos;re looking for and
            direct your enquiry to the right person.
          </p>
        </div>
      </header>

      <section className="enquiry section sect--cream">
        <EnquiryForm />
      </section>
    </>
  );
}
