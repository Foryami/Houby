import type { Metadata } from "next";
import Page2 from "./page2";

export const metadata: Metadata = {
  title: "Fotogalerie title",
  description: "Fotogalerie popis",
};

export default function Page() {
  return <Page2 />;
}
