"use client";

import { useEffect, useState } from "react";

export interface CertItem {
  name: string;
  full: string;
  since: string;
  covers: string;
  requires: string;
  gives: string;
  condition: string;
}

export default function CertAccordion({ certs }: { certs: CertItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  // Arriving from another page with a hash (e.g. /sustainability#cert-gots) —
  // open the matching item on first mount, same as the in-page "cert:open" event.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const i = certs.findIndex((c) => `cert-${c.name.toLowerCase()}` === hash);
    if (i !== -1) setOpen(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onCertOpen(e: Event) {
      const slug = (e as CustomEvent<{ slug: string }>).detail?.slug;
      const i = certs.findIndex((c) => c.name.toLowerCase() === slug);
      if (i !== -1) setOpen(i);
    }
    window.addEventListener("cert:open", onCertOpen);
    return () => window.removeEventListener("cert:open", onCertOpen);
  }, [certs]);

  return (
    <div className="certacc">
      {certs.map((c, i) => {
        const isOpen = open === i;
        return (
          <div
            className="certacc__item"
            id={`cert-${c.name.toLowerCase()}`}
            key={c.name}
          >
            <button
              className="certacc__row"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="certacc__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="certacc__name">{c.name}</span>
              <span className="certacc__full">{c.full}</span>
              <span className="certacc__since">{c.since}</span>
              <span
                className={"certacc__plus" + (isOpen ? " is-open" : "")}
                aria-hidden="true"
              />
            </button>
            <div
              className={"certacc__panelWrap" + (isOpen ? " is-open" : "")}
            >
              <div className="certacc__panel">
                <dl className="certfields">
                  <div>
                    <dt>What it covers</dt>
                    <dd>{c.covers}</dd>
                  </div>
                  <div>
                    <dt>What it requires of us</dt>
                    <dd>{c.requires}</dd>
                  </div>
                  <div>
                    <dt>What it gives your brand</dt>
                    <dd>{c.gives}</dd>
                  </div>
                  <div>
                    <dt>Condition</dt>
                    <dd>{c.condition}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
