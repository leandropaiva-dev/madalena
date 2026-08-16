import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import JournalFooter from "@/components/journal/JournalFooter";
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
      <JournalFooter />
      <BaseEffects />
    </>
  );
}
