"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const BADGES = [
  { name: "GOTS", year: "2017" },
  { name: "RWS", year: "2022" },
  { name: "GRS", year: "2022" },
  { name: "OCS", year: "2023" },
];

export default function Certs() {
  const router = useRouter();
  const pathname = usePathname();

  function openCert(name: string) {
    const slug = name.toLowerCase();
    if (pathname === "/sustainability") {
      window.dispatchEvent(new CustomEvent("cert:open", { detail: { slug } }));
    } else {
      router.push(`/sustainability#cert-${slug}`);
    }
  }

  return (
    <section className="certs section" id="responsibility">
      <div className="certs__bg" id="certsBg">
        <Image
          src="/images/certs-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
        />
      </div>
      <div className="certs__veil"></div>
      <div className="certs__inner">
        <div
          className="label"
          style={{ color: "rgba(250,247,241,.82)", marginBottom: "4vh" }}
        >
          Responsibility
        </div>
        <h2 className="certs__quote rv">
          Certified standards. <em>Responsible manufacturing.</em>
        </h2>
        <p className="certs__lede rv">
          MBK is certified to GOTS, GRS, RWS and OCS, providing recognised
          frameworks for traceability and environmental and social requirements
          across certified production.
        </p>
        <Link href="/sustainability" className="certs__link" data-hover="">
          Explore responsibility
        </Link>
        <div className="certs__badges">
          {BADGES.map((b, i) => (
            <button
              className="badge rv"
              data-hover=""
              key={i}
              onClick={() => openCert(b.name)}
            >
              <b>{b.name}</b>
              <span>{b.year}</span>
            </button>
          ))}
        </div>
        <div className="certs__lic rv">
          Certified by Ecocert Greenlife — License 270713
        </div>
      </div>
    </section>
  );
}
