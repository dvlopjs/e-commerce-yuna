import React, { useEffect } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box pb={2} pt={5}>
          <Typography variant="h3">Nuestros productos...</Typography>
        </Box>
        <Products />
      </Container>
      <ToastContainer position="top-right" autoClose={560} />
    </>
  );
}
