"use client";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextFieldsRegister from "./TextFieldsRegister";
import TextFieldsLogin from "./TextFieldsLogin";

interface Props {
  isRegister: boolean;
}

const CardRegisterLogin: React.FC<Props> = ({ isRegister }) => {
  const theme = useTheme();

  const isSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container style={{ textAlign: "center" }}>
      {isRegister ? <TextFieldsRegister /> : <TextFieldsLogin />}

      <Typography variant="h6" pt={2}>
        {isRegister ? "¿Ya tenés una cuenta?" : "¿Todavía no tenés cuenta?"}{" "}
        <Link
          style={{ textDecoration: "none", color: "#8B4513" }}
          href={isRegister ? "/auth/login" : "/auth/register"}
        >
          {isRegister ? "Iniciá sesión" : "Creá tu cuenta"}
        </Link>
      </Typography>
    </Container>
  );
};

export default CardRegisterLogin;
