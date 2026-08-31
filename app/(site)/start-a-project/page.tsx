import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Start a Project — MBK · Madalena Beça Knitwear",
  description:
    "Tell us about your project — development, production or both. A few details help us direct your enquiry to the right person.",
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
