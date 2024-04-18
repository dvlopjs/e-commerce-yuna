import { Box, Typography } from "@mui/material";
import React from "react";
import CardRegisterLogin from "../CardRegisterLogin";

const LoginPage: React.FC = async () => {
  return (
    <>
      <Box pt={5} pb={10}>
        <Typography variant="h3" align="center">
          Inicia sesión para ver tus pedidos.
        </Typography>
      </Box>
      <CardRegisterLogin isRegister={false} />
    </>
  );
};

export default LoginPage;
