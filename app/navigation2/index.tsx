"use client";

import Link from "next/link";

export default function Navigation2() {
  return (
    <div
      className="p-3 rounded overflow-hidden shadow-medium"
      style={{
        width: "16rem",
        height: "41rem",
        backgroundImage: "url('/pictures/picture2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 80%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="shadow-scroll" style={{ height: "100%" }}>
        <div
          style={{ color: "#81f136" }}
          className="justify-center overflow-auto text-white flex flex-col items-center gap-2"
        >
          <Link href="/uvod">
            <p>Úvod</p>
          </Link>
          <Link href="/aktuality">Aktuality</Link>
          <Link href="/fotogalerie">Fotogalerie</Link>
          <Link href="/kontakty">Kontakty</Link>
          <Link href="/desatero">Desatero houbaře</Link>

          {/* rok */}

          <p className="text-white">Rok 2025</p>

          {/* rok */}

          {/* rok */}

          <p className="text-white">Rok 2024</p>

          {/* rok */}

          <div>
            <Link href="/2024/caj24">Čaj o páté</Link>
          </div>

          <div>
            <Link href="/2024/vystava24">Výstava hub</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2023</p>

          {/* rok */}

          <div>
            <Link href="/2023/uklid23">Ukliďme Nivnici</Link>
          </div>

          <div>
            <Link href="/2023/ochutnavka23">Ochutnávka hub</Link>
          </div>

          <div>
            <Link href="/2023/caj23">Čaj o páté</Link>
          </div>

          <div>
            <Link href="/2023/vystava23">Výstava hub</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2022</p>

          {/* rok */}

          <div>
            <Link href="/2022/vystava22">Výstava hub</Link>
          </div>

          {/* rok */}

          {/* <p className="text-white">Rok 2021</p> */}

          {/* rok */}

          {/* rok */}

          {/* <p className="text-white">Rok 2020</p> */}

          {/* rok */}

          {/* rok */}

          <p className="text-white">Rok 2019</p>

          {/* rok */}

          <div>
            <Link href="/2019/ochutnavka19">Ochutnávka hub</Link>
          </div>

          <div>
            <Link href="/2019/vystava19">Výstava hub</Link>
          </div>

          <div>
            <Link href="/2019/vyslap19">Výšlap do Lipin</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2018</p>

          {/* rok */}

          <div>
            <Link href="/2018/ochutnavka18">Ochutnávka hub</Link>
          </div>

          <div>
            <Link href="/2018/vyslap18">Výšlap do Lipin</Link>
          </div>

          <div>
            <Link href="/2018/vystava18">Výstava hub</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2017</p>

          {/* rok */}

          <div>
            <Link href="/2017/ochutnavka17">Ochutnávka hub</Link>
          </div>

          <div>
            <Link href="/2017/vystava17">Výstava hub</Link>
          </div>

          <div>
            <Link href="/2017/deti17">Odpoledne pro děti</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2016</p>

          {/* rok */}

          <div>
            <Link href="/2016/ochutnavka16">Ochutnávka hub</Link>
          </div>

          <div>
            <Link href="/2016/vyslap16">Výšlap do Lipin</Link>
          </div>

          <div>
            <Link href="/2016/vystava16">Výstava hub</Link>
          </div>

          <div>
            <Link href="/2016/prednaska16">Přednáška</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2015</p>

          {/* rok */}

          <div>
            <Link href="/2015/ochutnavka15">Ochutnávka hub</Link>
          </div>

          <div>
            <Link href="/2015/prednaska15">Přednáška </Link>
          </div>

          <div>
            <Link href="/2015/gulasovani15">Gulášování v Lipinách </Link>
          </div>

          <div>
            <Link href="/2015/vystava">Výstava hub</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2014</p>

          {/* rok */}

          <div>
            <Link href="/2014/ochutnavka14">Ochutnávka hub</Link>
          </div>

          <div>
            <Link href="/2014/gulasovani14">Nivnické gulášování</Link>
          </div>

          <div>
            <Link href="/2014/odmykani14">Odmykání lesa</Link>
          </div>

          <div>
            <Link href="/2014/vyslap14">Výšlap do Lipin</Link>
          </div>

          <div>
            <Link href="/2014/vystava14">Výstava hub</Link>
          </div>

          <div>
            <Link href="/2014/zamykani14">Zamykání lesa</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2013</p>

          {/* rok */}

          <div>
            <Link href="/2013/prednaska13">Přednáška s ochutnávkou</Link>
          </div>

          <div>
            <Link href="/2013/odmykani13">Odmykání lesa</Link>
          </div>

          <div>
            <Link href="/2013/ciruvka13">První čirůvka</Link>
          </div>

          <div>
            <Link href="/2013/vyslap13">Výšlap do Lipin</Link>
          </div>

          <div>
            <Link href="/2013/vystava13">Výstava hub</Link>
          </div>

          <div>
            <Link href="/2013/zamykani13">Zamykání lesa</Link>
          </div>

          {/* rok */}

          <p className="text-white">Rok 2012</p>

          {/* rok */}

          <div>
            <Link href="/2012/vystava12">Výstava</Link>
          </div>

          <div>
            <Link href="/2012/zamykani12">Zamykání lesa</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
