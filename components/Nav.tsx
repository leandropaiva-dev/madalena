"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { hash: "#craft", label: "Craft" },
  { hash: "#capabilities", label: "Capabilities" },
  { hash: "#studio", label: "Studio" },
  { hash: "#responsibility", label: "Responsibility" },
  { hash: "#gallery", label: "Editorial" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // On the homepage keep plain <a href="#x"> so the Lenis smooth-scroll
  // handler in SiteEffects picks it up. Elsewhere use a Next <Link href="/#x">
  // so we navigate home first, then jump to the section.
  const hashLink = (
    hash: string,
    label: ReactNode,
    className?: string,
    key?: string
  ): ReactNode =>
    onHome ? (
      <a href={hash} className={className} data-hover="" key={key}>
        {label}
      </a>
    ) : (
      <Link href={`/${hash}`} className={className} data-hover="" key={key}>
        {label}
      </Link>
    );

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
          {onHome ? (
            <a className="nav__logo" href="#top" data-hover="">
              madalena<small>beça knitwear</small>
            </a>
          ) : (
            <Link className="nav__logo" href="/" data-hover="">
              madalena<small>beça knitwear</small>
            </Link>
          )}
        </div>
        <div className="nav__links">
          {SECTIONS.map((s) => hashLink(s.hash, s.label, undefined, s.hash))}
          <Link href="/journal" data-hover="">
            Journal
          </Link>
        </div>
        {hashLink("#contact", "Let’s talk", "nav__cta")}
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
          {SECTIONS.map((s) => hashLink(s.hash, s.label, undefined, s.hash))}
          <Link href="/journal">Journal</Link>
        </div>
        <div className="navmenu__foot">{hashLink("#contact", "Let’s talk")}</div>
      </div>
    </>
  );
}
