"use client";

import { useState } from "react";

const LINKS = [
  { href: "#craft", label: "Craft" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#studio", label: "Studio" },
  { href: "#responsibility", label: "Responsibility" },
  { href: "#gallery", label: "Editorial" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__left">
          <button
            className="nav__burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
          </button>
          <a className="nav__logo" href="#top" data-hover="">
            madalena<small>beça knitwear</small>
          </a>
        </div>
        <div className="nav__links">
          {LINKS.map((l) => (
            <a href={l.href} data-hover="" key={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="nav__cta" href="#contact" data-hover="">
          Let&apos;s talk
        </a>
      </nav>

      {/* mobile menu overlay */}
      <div
        className={"navmenu" + (open ? " is-open" : "")}
        data-lenis-prevent=""
        onClick={() => setOpen(false)}
      >
        <button className="navmenu__close" aria-label="Close menu">
          Close
        </button>
        <div className="navmenu__links">
          {LINKS.map((l) => (
            <a href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="navmenu__foot">
          <a href="#contact">Let&apos;s talk</a>
        </div>
      </div>
    </>
  );
}
