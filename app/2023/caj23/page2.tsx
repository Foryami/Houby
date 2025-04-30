"use client";

export default function Page2() {
  return (
    <div>
      <br />
      <div style={{ color: "#81f136" }} className="text-2xl">
        Čaj o 5
      </div>
      <br />
      21. 9. jsme uspořádali "Čaj o 5". Předcházela tomu domluva s paní
      Moulisovou, která s námi spolupracovala, a společně jsme připravili
      přednášku o léčivých a jedovatých bylinách. Vlasta přinesla řadu známých i
      méně známých bylinek, a na její přednášce jsme se dozvěděli spoustu
      užitečných informací. Čaj jsme podávali z lipového květu slazený medem, k
      tomu marmeládu z aronie a likér ze zeměžluče. I když účast nebyla vysoká,
      těm, kteří přišli, se přednáška líbila.
      <br />
      <br />
      <div className="flex  flex-wrap gap-3">
        <div
          className="p-3 rounded overflow-hidden shadow-medium"
          style={{
            width: "20rem",
            height: "20rem",
            backgroundImage: "url('/pictures/2023/caj/1.jpg')",
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
            backgroundImage: "url('/pictures/2023/caj/2.jpg')",
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
            backgroundImage: "url('/pictures/2023/caj/3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 80%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
