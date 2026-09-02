"use client";

import { useState } from "react";
import { ITEMS, MEDIA } from "./Capabilities";

export default function ProcessShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="caps caps--showcase section sect--wool" style={{ padding: "14vh 0" }}>
      <div className="caps__grid" style={{ alignItems: "start" }}>
        <div>
          <div className="label" style={{ marginBottom: "26px" }}>
            From yarn to garment — how we work
          </div>
          <div className="caps__list">
            {ITEMS.map((it, i) => (
              <div
                className={"caps__item" + (i === active ? " is-active" : "")}
                key={i}
                onClick={() => setActive(i)}
              >
                <h3>
                  <i>{it.n}</i>
                  {it.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="caps__mediacol">
          <div className="caps__media">
            {MEDIA.map((m, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={m.src}
                alt={m.alt}
                className={i === active ? "is-on" : undefined}
                key={i}
              />
            ))}
            <div className="caps__count">
              {String(active + 1).padStart(2, "0")}
            </div>
          </div>
          <p className="caps__desc">{ITEMS[active].body}</p>
        </div>
      </div>
    </section>
  );
}
