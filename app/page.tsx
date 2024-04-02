import React from "react";
import Header from "./components/Header";
import { Chunk } from "./chunk";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h1>Nuestros productos...</h1>
        <Chunk />
      </div>
    </>
  );
}
