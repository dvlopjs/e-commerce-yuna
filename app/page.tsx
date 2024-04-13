import React from "react";
import { Container } from "@mui/material";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import CustomCarousel from "./components/Carrousel";

export default function Home() {
  return (
    <>
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
