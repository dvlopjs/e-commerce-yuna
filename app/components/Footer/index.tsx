import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      style={{
        backgroundColor: "#fcece6", // Color de fondo marrón claro
        height: 100, // Espacio interno
        // textAlign: "center", // Alineación del texto al centro
        color: "#333", // Color del texto
        marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Ancho completo
      }}
    >
      <Typography variant="body1">Made by Cris 🖤</Typography>
    </Box>
  );
};

export default Footer;
