"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useProductsOnCart } from "../utils/useProductsOnCart";
import { CartProduct } from "../redux/pasteleriaSlice";
import ItemCardPedido from "./ItemCardPedido";

export const CardPedido: React.FC = () => {
  const { cart } = useProductsOnCart();
  return (
    <>
      <Grid container justifyContent={"center"} direction={"column"}>
        {cart.length !== 0 &&
          cart.map((c: CartProduct) => (
            <Grid container key={c.id} justifyContent={"center"}>
              <Grid item xs={12} md={6} sx={{ pb: 3, pr: 1 }}>
                <ItemCardPedido product={c} />
              </Grid>
            </Grid>
          ))}
      </Grid>
    </>
  );
};
