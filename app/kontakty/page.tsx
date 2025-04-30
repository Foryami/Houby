import type { Metadata } from "next";
import Page2 from "./page2";

export const metadata: Metadata = {
  title: "Kontakty title",
  description: "Kontakty popis",
};

export default function Page() {
  return <Page2 />;
}
