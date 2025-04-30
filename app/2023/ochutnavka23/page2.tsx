"use client";

export default function Page2() {
  return (
    <div>
      <br />
      <div style={{ color: "#81f136" }} className="text-2xl">
        Ochutnávka houbových specialit 1. 4. 2023
      </div>
      <br />
      Po třech letech jsme se rozhodli obnovit tradici ochutnávky houbových
      specialit. Někteří nebyli příliš optimističtí, ale věřili jsme, že lidé po
      dvou covidových letech budou rádi za akci, která byla v minulosti hojně
      navštěvována. Domluvili jsme přednášku s Romanem Maňákem a pozvali kolegy
      z Ratíškovic a Zlína. Pořádali jsme plakátovou kampaň v okolí a doufali v
      hojnou účast. Bohužel na samotnou akci dorazilo pouze 70 lidí, což bylo
      zklamání, protože jsme připravili stoly pro 100 lidí. Když jsme se začali
      připravovat, věřili jsme, že přijdou.
      <br />
      <br />
      V pátek jsme připravili různé pokrmy, jako pláštíky s houbami a pomazánku.
      V sobotu jsme se sešli v 8:30, abychom začali vařit guláš a připravovat
      další jídla. Na ochutnávce jsme nakonec měli 44 vzorků hub, což byl
      opravdu hodně. Přednáška Romana Maňáka o jedlých, nejedlých a jedovatých
      houbách byla velmi přínosná a po ní nás pobavila děvčátka z Hurikánku.
      Všichni, kteří se zúčastnili, si pochvalovali jídlo i atmosféru. Po akci
      jsme provedli losování vstupenek, což přineslo úsměvy na tvářích
      návštěvníků.
      <br />
      <br />
      <div className="flex  flex-wrap gap-3">
        <div
          className="p-3 rounded overflow-hidden shadow-medium"
          style={{
            width: "20rem",
            height: "20rem",
            backgroundImage: "url('/pictures/2023/kost/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 80%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="p-3 rounded overflow-hidden shadow-medium"
          style={{
            width: "20rem",
            height: "20rem",
            backgroundImage: "url('/pictures/2023/kost/2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 80%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="p-3 rounded overflow-hidden shadow-medium"
          style={{
            width: "20rem",
            height: "20rem",
            backgroundImage: "url('/pictures/2023/kost/3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 80%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
