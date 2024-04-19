import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SubmitHandler, useForm } from "react-hook-form";
import { postUser } from "./services";
import { useRouter } from "next/navigation";

type InputsRegister = {
  name: string;
  email: string;
  password: string;
};

const TextFieldsRegister: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<InputsRegister>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<InputsRegister> = async (data) => {
    const responsePost = await postUser(data);

    if (responsePost.ok) {
      router.push("/auth/login");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState: boolean) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction={"column"}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={5} md={4}>
            <Typography align="left" fontWeight="700" sx={{ pb: 2 }}>
              NOMBRE
            </Typography>
            <TextField
              label="Nombre"
              fullWidth
              error={errors.name && touchedFields ? true : false}
              helperText={
                <span style={{ fontSize: 20 }}>{errors.name?.message}</span>
              }
              {...register("name", {
                required: { value: true, message: "Campo requerido" },
              })}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={5} md={4}>
            <Typography align="left" fontWeight="700" sx={{ pb: 2, pt: 2 }}>
              EMAIL
            </Typography>
            <TextField
              label="Correo electrónico"
              error={errors.email && touchedFields ? true : false}
              helperText={
                <span style={{ fontSize: 20 }}>{errors.email?.message}</span>
              }
              fullWidth
              {...register("email", {
                required: { value: true, message: "Campo requerido" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresa un correo electrónico válido",
                },
              })}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={5} md={4}>
            <Typography align="left" fontWeight="700" sx={{ pb: 2, pt: 2 }}>
              CONTRASEÑA
            </Typography>
            <TextField
              label="Contraseña"
              {...register("password", {
                required: { value: true, message: "Campo requerido" },
              })}
              fullWidth
              error={errors.password && touchedFields ? true : false}
              helperText={
                <span style={{ fontSize: 20 }}>{errors.password?.message}</span>
              }
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={5} md={4}>
            <Box pt={2}>
              <Button
                style={{ backgroundColor: "#ffb4a2" }}
                variant="contained"
                fullWidth
                type="submit"
              >
                Registrarse
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default TextFieldsRegister;
