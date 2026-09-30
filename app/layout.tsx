import type { Metadata } from "next";
import "./globals.css";
// TEMPORARY — copy-review overlay (Supabase-backed). Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";
// TEMPORARY — client before/after comparison tool. Remove before launch.
import BeforeAfter from "@/components/BeforeAfter";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const DEFAULT_TITLE =
  "Madalena Beça Knitwear — Quiet Excellence in Contemporary Knitwear";
const DEFAULT_DESCRIPTION =
  "Madalena Beça Knitwear — a specialized, certified knitwear manufacturing partner since 1998. From yarn to garment, made in Portugal.";
const DEFAULT_OG_IMAGE = "/images/craft-women.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Penafiel",
    addressCountry: "PT",
  },
  sameAs: [
    "https://www.instagram.com/madalenabecaknitwear",
    "https://www.linkedin.com/company/madalenabecaknitwear",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <ReviewLayer />
        <BeforeAfter />
      </body>
    </html>
  );
}
