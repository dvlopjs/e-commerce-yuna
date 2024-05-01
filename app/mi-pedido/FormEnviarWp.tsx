"use client";
import { Box, Divider, SvgIcon, TextField, Typography } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { priceParser } from "../utils/priceParser";
import { useProductsOnCart } from "../utils/useProductsOnCart";
import { PedirWp } from "../components/Buttons/PedirWp";
import { useMessageWp } from "../utils/useMessageWp";

type InputsRegister = {
  name: string;
  cellphone: string;
};

const FormEnviarWp: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields },
  } = useForm<InputsRegister>();
  const { subtotal, cart } = useProductsOnCart();

  const { sendMessageWhatsApp } = useMessageWp(getValues);
  console.log(getValues("name"));

  const router = useRouter();

  const onSubmit: SubmitHandler<InputsRegister> = async (data) => {
    sendMessageWhatsApp();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box gap={2} display={"flex"} flexDirection={"column"}>
        <Box justifyContent={"center"} display={"flex"}>
          <SvgIcon fontSize="large" sx={{ minWidth: 50, minHeight: 50 }}>
            <WhatsAppIcon fontSize="large" color="success" />
          </SvgIcon>
        </Box>
        <TextField
          label="Nombre y Apellido *"
          placeholder="Por favor indicanos tu nombre."
          fullWidth
          error={errors.name && touchedFields ? true : false}
          helperText={errors.name?.message}
          {...register("name", {
            required: { value: true, message: "Campo requerido" },
          })}
        />

        <TextField
          label="Teléfono *"
          placeholder="Necesitamos una forma de contacto."
          error={errors.cellphone && touchedFields ? true : false}
          helperText={errors.cellphone?.message}
          fullWidth
          {...register("cellphone", {
            required: { value: true, message: "Campo requerido" },
            pattern: {
              value: /^[0-9]{10}$/, // Expresión regular para números de teléfono de 10 dígitos
              message: "Ingresa un número de teléfono válido",
            },
          })}
        />
        <Divider />
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography variant="h6" fontWeight={"bold"}>
            TOTAL:
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            ${priceParser(subtotal)}
          </Typography>
        </Box>
        <Box pt={2}>
          <PedirWp />
        </Box>
      </Box>
    </form>
  );
};
export default FormEnviarWp;
