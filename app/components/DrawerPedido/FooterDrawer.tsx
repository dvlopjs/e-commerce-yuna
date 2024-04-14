import { Product } from "@/app/redux/pasteleriaSlice";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { priceParser } from "@/app/utils/priceParser";
import { useProductsOnCart } from "@/app/utils/useProductsOnCart";

export const FooterDrawer: React.FC = () => {
  const dispatch = useDispatch();
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
        <Typography variant="h5">Subtotal:</Typography>

        <Typography variant="h6">${priceParser(subtotal)}</Typography>
      </Box>
    </Box>
  );
};
