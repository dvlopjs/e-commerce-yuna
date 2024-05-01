"use client";
import { Box, Grid } from "@mui/material";
import { useProductsOnCart } from "../utils/useProductsOnCart";
import { CartProduct } from "../redux/pasteleriaSlice";
import ItemCardPedido from "./ItemCardPedido";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/navigation";
export const CardPedido: React.FC = () => {
  const { cart } = useProductsOnCart();
  const router = useRouter();
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

        {cart.length ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <AddCircleOutlineIcon
              onClick={() => router.push("/")}
              titleAccess="Agregar más productos"
              fontSize="large"
              color="primary"
              sx={{ cursor: "pointer", fontSize: 40 }}
            />
          </Box>
        ) : null}
      </Grid>
    </>
  );
};
