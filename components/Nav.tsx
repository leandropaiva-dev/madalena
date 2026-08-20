"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/studio", label: "Studio" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/journal", label: "Journal" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  const isActive = (href: string) =>
    href === "/journal" ? pathname.startsWith("/journal") : pathname === href;

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
          {LINKS.map((l) => (
            <Link
              href={l.href}
              className={isActive(l.href) ? "is-active" : undefined}
              aria-current={isActive(l.href) ? "page" : undefined}
              data-hover=""
              key={l.href}
            >
              {l.label}
            </Link>
          ))}
        </div>
        {/* Contact lives at the foot of every page, so this always scrolls in-page. */}
        <a className="nav__cta" href="#contact" data-hover="">
          Let’s talk
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
            <Link
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              key={l.href}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="navmenu__foot">
          <a href="#contact">Let’s talk</a>
        </div>
      </div>
    </>
  );
}
