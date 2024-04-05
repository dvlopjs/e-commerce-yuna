import React from "react";
import Header from "./components/Header";
import { Container } from "@mui/material";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <h1>Nuestros productos...</h1>
          <Products />
        </div>
      </Container>
      <ToastContainer position="top-right" autoClose={560} />
    </>
  );
}
