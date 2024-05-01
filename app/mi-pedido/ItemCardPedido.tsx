import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import {
  CartProduct,
  decreaseQuantityProductOnCart,
  deleteProductFromCart,
  increaseQuantityProductOnCart,
} from "../redux/pasteleriaSlice";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

interface Props {
  product: CartProduct;
}

export default function ItemCardPedido({ product }: Props) {
  const dispatch = useDispatch();

  return (
    <Card
      elevation={4}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex" }}>
        <Image
          alt=""
          src={product.image}
          style={{ maxWidth: "100%", width: 120, height: 120 }}
        />
        <CardContent>
          <Typography
            component="div"
            variant="h6"
            fontSize={18}
            fontFamily={"cursive"}
          >
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton
              color="primary"
              aria-label="Quitar un artículo"
              onClick={() =>
                dispatch(decreaseQuantityProductOnCart(product.id))
              }
            >
              <RemoveIcon />
            </IconButton>
            <span style={{ fontFamily: "initial" }}>{product.quantity}</span>
            <IconButton
              color="primary"
              aria-label="Sumar un artículo"
              onClick={() =>
                dispatch(increaseQuantityProductOnCart(product.id))
              }
            >
              <AddIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Box>
      <Box>
        <IconButton
          sx={{ color: "rgb(255, 180, 162)" }}
          onClick={() => dispatch(deleteProductFromCart(product.id))}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Card>
  );
}
