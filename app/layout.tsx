import type { Metadata } from "next";
import "./globals.css";
// TEMPORARY — copy-review overlay (Supabase-backed). Remove before launch.
import ReviewLayer from "@/components/review/ReviewLayer";
// TEMPORARY — client before/after comparison tool. Remove before launch.
import BeforeAfter from "@/components/BeforeAfter";

export const metadata: Metadata = {
  title: "Madalena Beça Knitwear — Quiet Excellence in Contemporary Knitwear",
  description:
    "Madalena Beça Knitwear — a specialized, certified knitwear manufacturing partner since 1998. From yarn to garment, made in Portugal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ReviewLayer />
        <BeforeAfter />
      </body>
    </html>
  );
}
