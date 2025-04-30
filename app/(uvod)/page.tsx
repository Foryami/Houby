import type { Metadata } from "next";

import Page2 from "./page2";
import Uvod from "../uvod/page";

export const metadata: Metadata = {
  title: "Home title",
  description: "Home popis",
};

export default function Home() {
  return <Uvod />;
}
