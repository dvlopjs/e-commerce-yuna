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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type InputsLogin = {
  email: string;
  password: string;
};

const TextFieldsLogin: React.FC = ({}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<InputsLogin>();
  const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log("HOLA");
    if (response?.error) {
      alert(response.error);
    } else {
      router.push("/");
    }

    console.log(response);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState: boolean) => !prevState);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} sm={5} md={4}>
              <Typography align="left" fontWeight="700" sx={{ pb: 2, pt: 2 }}>
                EMAIL
              </Typography>
              <TextField
                label="Correo electrónico"
                fullWidth
                autoComplete="username"
                error={errors.email && touchedFields ? true : false}
                helperText={
                  <span style={{ fontSize: 20 }}>{errors.email?.message}</span>
                }
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
              <Typography align="left" fontWeight="700" sx={{ pb: 2, pt: 4 }}>
                CONTRASEÑA
              </Typography>
              <TextField
                autoComplete="current-password"
                label="Contraseña"
                fullWidth
                error={errors.password && touchedFields ? true : false}
                helperText={
                  <span style={{ fontSize: 20 }}>
                    {errors.password?.message}
                  </span>
                }
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
                {...register("password", {
                  required: true,
                })}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid container justifyContent={"center"}>
              <Grid item xs={12} md={4} sm={5}>
                <Box pt={2}>
                  <Button
                    style={{ backgroundColor: "#ffb4a2" }}
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Ingresar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default TextFieldsLogin;
