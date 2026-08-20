import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import BaseEffects from "@/components/BaseEffects";

/**
 * Shared chrome for the institutional pages (Studio, About, How We Work,
 * Sustainability, Contact). Mirrors the Journal layout: custom cursor, nav,
 * reused footer and the lightweight `.rv` / cursor / Lenis effects — minus the
 * home-only WebGL hero. The home route (app/page.tsx) lives outside this group
 * and keeps its own composition untouched.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Cursor />
      <Nav />
      <main>{children}</main>
      <Contact />
      <BaseEffects />
    </>
  );
}
