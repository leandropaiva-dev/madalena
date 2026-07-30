"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/about", label: "About MBK" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/responsibility", label: "Responsibility" },
  { href: "/journal", label: "Journal" },
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
          <Link className="nav__logo" href="/" data-hover="">
            madalena<small>beça knitwear</small>
          </Link>
        </div>
        <div className="nav__links">
          {LINKS.map((l) => (
            <Link href={l.href} data-hover="" key={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link className="nav__cta" href="/contacts" data-hover="">
          Contacts
        </Link>
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
            <Link href={l.href} key={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="navmenu__foot">
          <Link href="/contacts">Contacts</Link>
        </div>
      </div>
    </>
  );
}
