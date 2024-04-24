"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import "../components.css";
import Image from "next/image";
import { truncateTitle } from "../../utils/truncateTitle";
import AddToCartButton from "./AddToCartButton";
export default function Products() {
  const { products } = useSelector((state: RootState) => state.pasteleria);

  return (
    <Grid
      container
      spacing={6}
      sx={{ paddingTop: 5, paddingBottom: 10, textAlign: "center" }}
    >
      <Grid item xs={12}></Grid>
      {products.map((p, i) => (
        <Grid item key={i} xs={12} sm={6} md={3}>
          <article>
            <Image className="img-product" src={p.image} alt="logoImg" />
            <Tooltip title={<Typography>{p.name}</Typography>}>
              <Typography variant="h5" sx={{ paddingTop: 1 }}>
                {truncateTitle({ text: p.name })}
              </Typography>
            </Tooltip>
            <p>Precio: $500</p>
            <AddToCartButton product={p} />
          </article>
        </Grid>
      ))}
    </Grid>
  );
}
