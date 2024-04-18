import { Box, Typography } from "@mui/material";
import CardRegisterLogin from "../CardRegisterLogin";

const RegisterPage: React.FC = () => {
  return (
    <>
      <Box pt={5} pb={10}>
        <Typography variant="h3" align="center">
          Registrate y llevá un orden de tus pedidos.
        </Typography>
      </Box>
      <CardRegisterLogin isRegister={true} />
    </>
  );
};

export default RegisterPage;
