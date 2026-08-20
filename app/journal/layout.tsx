import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import BaseEffects from "@/components/BaseEffects";

export default function JournalLayout({
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
