import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

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
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
