import { Box, Typography } from "@mui/material";

import { priceParser } from "@/app/utils/priceParser";
import { useProductsOnCart } from "@/app/utils/useProductsOnCart";

export const FooterDrawerPedido: React.FC = () => {
  const { subtotal } = useProductsOnCart();

  return (
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
    </Box>
  );
};
