"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import "./components.css";
import Image from "next/image";
import { truncateTitle } from "../utils/truncateTitle";
export default function Products() {
  const products = useSelector((state: RootState) => state.pasteleria.products);
  console.log(products);
  return (
    <Grid container spacing={4}>
      {products.map((p, i) => (
        <Grid item key={i} xs={12} sm={6} md={3}>
          <article>
            <Image className="img-product" src={p.image} alt="logoImg" />
            <Tooltip title={p.name}>
              <Typography variant="h6">
                {truncateTitle({ text: p.name })}
              </Typography>
            </Tooltip>
            <p>Precio: $500</p>
            <Button style={{ backgroundColor: "#ffb4a2" }} variant="contained">
              Agregar al carrito
            </Button>
          </article>
        </Grid>
      ))}
    </Grid>
  );
}
