import { Box, Button, Typography } from "@mui/material";

import { priceParser } from "@/app/utils/priceParser";
import { useProductsOnCart } from "@/app/utils/useProductsOnCart";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { DialogReusable } from "../reusable/DialogReusable";
import { title } from "process";
import FormEnviarWp from "@/app/mi-pedido/FormEnviarWp";
import { PedirWp } from "../Buttons/PedirWp";

export const FooterDrawerPedido: React.FC = () => {
  const { subtotal } = useProductsOnCart();
  const [openModalWp, setOpenModalWp] = React.useState<boolean>(false);

  return (
    <>
      <Box pt={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          gap={4}
          p={2}
          border="1px solid black" // Agregamos un borde negro
          borderRadius={8} // Añadimos bordes redondeados para un aspecto más suave
        >
          <Typography fontWeight={"bold"} variant="h5">
            Total:
          </Typography>

          <Typography fontFamily={"initial"} fontWeight={"bold"} variant="h6">
            ${priceParser(subtotal)}
          </Typography>
        </Box>
        <Box pt={2}>
          <PedirWp openModal={() => setOpenModalWp(true)} />
        </Box>
      </Box>
      {openModalWp && (
        <DialogReusable
          open={openModalWp}
          onClose={() => setOpenModalWp(false)}
          title="¡El último paso!"
        >
          <FormEnviarWp />
        </DialogReusable>
      )}
    </>
  );
};
