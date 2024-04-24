import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import { VerPedidoButton } from "./components/Buttons/VerPedidoButton";

export default function Home() {
  return (
    <>
      <Container>
        <Box pb={2} pt={2}>
          <Typography variant="h3" align="center">
            Nuestros productos...
          </Typography>
        </Box>
        <VerPedidoButton />

        <Products />
      </Container>
      <ToastContainer position="top-right" autoClose={560} />
    </>
  );
}
