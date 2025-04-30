"use client";

export default function Page2() {
  return (
    <div>
      <br />
      <div style={{ color: "#81f136" }} className="text-2xl">
        Čaj o 5
      </div>
      <br />V roce 2024 jsme v rámci akce "Čaj o 5" uspořádali pro důchodce
      přednášku o houbách. Na této přednášce nás navštívil náš kamarád Roman
      Maňák, který vyprávěl o houbách obecně, ale také se podělil o různé
      kuriozity a zajímavosti. Během přednášky se rozpoutala živá debata, kdy
      účastníci sdíleli své vlastní zkušenosti a poznatky. K poslechu jsme
      připravili malé občerstvení – houbovou paštiku a smažené žampiony. Na
      konci přednášky se z původní přednášky stala spíše zábavná beseda a nikomu
      se nechtělo domů. S Romanem jsme se domluvili na další spolupráci a
      věříme, že to rozhodně nebyla poslední přednáška.
      <br />
      <br />
      <div className="flex  flex-wrap gap-3">
        <div
          className="p-3 rounded overflow-hidden shadow-medium"
          style={{
            width: "20rem",
            height: "20rem",
            backgroundImage: "url('/pictures/2024/caj/1.jpg')",
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
            backgroundImage: "url('/pictures/2024/caj/2.jpg')",
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
            backgroundImage: "url('/pictures/2024/caj/3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 80%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
