import type { Metadata } from "next";
import Page2 from "./page2";

export const metadata: Metadata = {
  title: "stranka1 title",
  description: "stranka1 popis",
};

export default function Page() {
  return <Page2 />;
}
