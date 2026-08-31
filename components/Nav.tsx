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
            <a
              className="nav__logo"
              href="#top"
              aria-label="Madalena Beça Knitwear — Home"
              data-hover=""
            >
              <span className="nav__logoMark" aria-hidden="true" />
            </a>
          ) : (
            <Link
              className="nav__logo"
              href="/"
              aria-label="Madalena Beça Knitwear — Home"
              data-hover=""
            >
              <span className="nav__logoMark" aria-hidden="true" />
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
        <Link className="nav__cta" href="/start-a-project" data-hover="">
          Let’s talk
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
          <Link href="/start-a-project">Let’s talk</Link>
        </div>
      </div>
    </>
  );
}
