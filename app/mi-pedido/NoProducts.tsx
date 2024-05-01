"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Typography } from "@mui/material";
import { useProductsOnCart } from "../utils/useProductsOnCart";

export const NoProducts: React.FC = () => {
  const { cart } = useProductsOnCart();
  return (
    <>
      {!cart.length ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={4}
          gap={4}
        >
          <Typography variant="h5">No hay productos en el carrito.</Typography>
          <Button
            href="/"
            startIcon={<AddShoppingCartIcon />}
            variant="text"
            style={{ fontWeight: "bold" }}
          >
            AGREGAR
          </Button>
        </Box>
      ) : null}
    </>
  );
};
