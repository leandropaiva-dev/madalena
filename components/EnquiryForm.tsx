"use client";

import { useState, type FormEvent } from "react";

const QUANTITY_OPTIONS = [
  "Under 100 units",
  "100 – 500 units",
  "500 – 1,000 units",
  "1,000+ units",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Mocked submit — no backend wired yet. Swap this for a real
    // submission (Supabase insert + storage upload) once the quantity
    // options and enquiry routing are confirmed.
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="enquiry__success rv">
        <h2>Thank you.</h2>
        <p>
          We&apos;ve received your enquiry and will be in touch shortly to
          discuss the right next step.
        </p>
      </div>
    );
  }

  return (
    <form className="enquiry__form" onSubmit={handleSubmit}>
      <div className="enquiry__row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="company">Company / Brand</label>
          <input id="company" name="company" type="text" required />
        </div>
      </div>

      <div className="enquiry__row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="website">Website (optional)</label>
          <input id="website" name="website" type="text" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="country">Country</label>
        <input id="country" name="country" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="brief">
          What are you looking to develop or produce?
        </label>
        <textarea id="brief" name="brief" required />
      </div>

      <div className="enquiry__row">
        <div className="field">
          <label htmlFor="quantities">Estimated quantities</label>
          <select id="quantities" name="quantities" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {QUANTITY_OPTIONS.map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="delivery">Target delivery / season (optional)</label>
          <input
            id="delivery"
            name="delivery"
            type="text"
            placeholder="e.g. Spring/Summer 2027"
          />
        </div>
      </div>

      <div className="field field--file">
        <label htmlFor="attachment">
          Anything you&apos;d like us to see? (optional)
        </label>
        <span className="field__hint">
          Upload a tech pack, reference or project information.
        </span>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        {fileName && <span className="field__file">{fileName}</span>}
      </div>

      <button className="btn enquiry__submit" type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Send Enquiry"}</span>
        <i />
      </button>
    </form>
  );
}
