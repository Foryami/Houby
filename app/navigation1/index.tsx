"use client";

import { LucideFacebook, LucideInstagram } from "lucide-react";

export default function Navigation1() {
  return (
    <div>
      <div
        style={{
          height: "15rem",
          backgroundImage: "url('/pictures/picture1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
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
          <p style={{ color: "#e72777" }}>
            „Hřib je jedna z mála věcí před, kterou člověk rád a ochotně ohne
            hřbet“
          </p>

          <div style={{ height: "5rem" }}></div>

          <div className="justify-end flex gap-2">
            <a href="https://www.instagram.com/mykokrouzeknivnice/">
              <button
                className="mr-0 flex border p-1 rounded"
                style={{
                  backgroundColor: "#A52A2A",
                  color: "#ffffff",
                  borderColor: "#A52A2A",
                }}
              >
                <LucideInstagram />
              </button>
            </a>
            <a href="https://www.facebook.com/MykologickyKrouzekNivnice">
              <button
                className="mr-0 flex border p-1 rounded"
                style={{
                  backgroundColor: "#081875",
                  color: "#ffffff",
                  borderColor: "#061150",
                }}
              >
                <LucideFacebook />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
