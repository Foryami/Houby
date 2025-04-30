"use client";
import { LucideFacebook } from "lucide-react";
import { Link } from "@heroui/react";

export default function Navigationss() {
  return (
    <div
      style={{ backgroundColor: "#f5deb3" }} // Světle hnědé pozadí pro celou stránku
      className="p-3 gap-3 flex flex-col"
    >
      <div>
        <div
          style={{
            height: "15rem", // Zkrácení výšky
            backgroundImage: "url('/pictures/picture1.jpg')", // Cesta k obrázku
            backgroundSize: "cover", // Pokrytí celého divu obrázkem
            backgroundPosition: "center 30%", // Obrázek bude lépe umístěn, ne tak moc přiblížený
            backgroundRepeat: "no-repeat", // Zajišťuje, že obrázek se nebude opakovat
          }}
          className="z-50 flex h-16 flex-row items-center gap-2 bg-content1 p-3 rounded shadow-medium"
        >
          <div className="flex flex-col flex-auto">
            <div
              className="font-semibold flex justify-between"
              style={{ color: "#81f136", fontSize: "3rem" }}
            >
              <p>Mykologický kroužek Nivnice</p>
            </div>
            <p className="italic" style={{ color: "#e72777" }}>
              „Hřib je jedna z mála věcí před, kterou člověk rád a ochotně ohne
              hřbet“
            </p>

            <div style={{ height: "5rem" }}></div>

            <div className="justify-end flex">
              <button
                className="mr-0 flex border p-1 rounded"
                style={{
                  backgroundColor: "#081875",
                  color: "#ffffff",
                  borderColor: "061150",
                }} // Modré pozadí s bílým textem
              >
                <LucideFacebook />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div
          className="p-3 rounded overflow-hidden shadow-medium"
          style={{
            width: "12rem",
            height: "41rem",
            backgroundColor: "#ffffff",
          }} // Bílé pozadí pro tento div
        >
          {/* Přidáme třídu shadow-scroll pro přizpůsobení scrollbarů */}
          <div className="justify-center overflow-auto flex flex-col items-center gap-2 shadow-scroll">
            <Link href="uvod">Úvod</Link>
            <p>Aktuality</p>
            <p>Fotogalerie</p>
            <p>Kontakty</p>
            <p>Rok 2025</p>
            <div>
              <Link href="2012">Výstava</Link>
            </div>
            <div>
              <Link href="2012/kost">Košt</Link>
            </div>
            <p>Rok 2024</p>
            <div>
              <Link href="2012">Výstava</Link>
            </div>
            <div>
              <Link href="2012/kost">Košt</Link>
            </div>
            <div>
              <Link href="2012">Výstava</Link>
            </div>
            <div>
              <Link href="2012/kost">Košt</Link>
            </div>
            <div>
              <Link href="2012">Výstava</Link>
            </div>
            <div>
              <Link href="2012/kost">Košt</Link>
            </div>
            <div>
              <Link href="2012">Výstava</Link>
            </div>
            <div>
              <Link href="2012/kost">Košt</Link>
            </div>
            <p>Rok 2023</p>
            <p>Rok 2022</p>
            <p>Rok 2021</p>
            <p>Rok 2020</p>
            <p>Rok 2019</p>
            <p>Rok 2018</p>
            <p>Rok 2017</p>
            <p>Rok 2016</p>
            <p>Rok 2015</p>
            <p>Rok 2014</p>
            <p>Rok 2013</p>
            <p>Rok 2012</p>
          </div>
        </div>

        <div
          className="rounded w-full p-3 shadow-medium"
          style={{ backgroundColor: "#ffffff" }}
        >
          {" "}
          {/* Bílé pozadí pro tento div */}
          <div className="flex justify-between">
            <div className="justify-center flex items-center">nazev ?</div>

            <div
              style={{ maxWidth: "16rem" }}
              className="flex border p-1 rounded justify-center items-center shadow-medium"
            >
              <p>
                Nejbližší akce: Nivnice
                <br /> Výstava hub 16.7.2025
              </p>
            </div>
          </div>
          sss
        </div>
      </div>
    </div>
  );
}
