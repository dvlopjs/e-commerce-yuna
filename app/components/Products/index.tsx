"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import "../components.css";
import Image from "next/image";
import { truncateTitle } from "../../utils/truncateTitle";
import AddToCartButton from "./AddToCartButton";
import { priceParser } from "@/app/utils/priceParser";
export default function Products() {
  const { products } = useSelector((state: RootState) => state.pasteleria);

  return (
    <Grid
      container
      spacing={6}
      sx={{
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
      }}
    >
      {products.map((p, i) => (
        <Grid item key={i} xs={12} sm={6} md={3}>
          <article>
            <Image className="img-product" src={p.image} alt="logoImg" />
            <Tooltip title={<Typography>{p.name}</Typography>}>
              <Typography
                fontFamily={"cursive"}
                variant="h6"
                sx={{ paddingTop: 1, minHeight: 72 }}
              >
                {truncateTitle({ text: p.name })}
              </Typography>
            </Tooltip>
            <p>Precio: ${priceParser(p.price)}</p>
            <AddToCartButton product={p} />
          </article>
        </Grid>
      ))}
    </Grid>
  );
}
