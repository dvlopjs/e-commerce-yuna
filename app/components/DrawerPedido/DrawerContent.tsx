import { useProductsOnCart } from "@/app/utils/useProductsOnCart";
import {
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { Product, deleteProductFromCart } from "@/app/redux/pasteleriaSlice";
import "./drawer.css";

import React from "react";
import { useDispatch } from "react-redux";

import { PrimaryContent } from "./PrimaryContent";
import { SecondaryContent } from "./SecondaryContent";
import { FooterDrawerPedido } from "./FooterDrawerPedido";
import { ScrollBox } from "../reusable/ScrollBox";
const DrawerContentPedido: React.FC = () => {
  const { cart: products } = useProductsOnCart();
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <List>
          {/* <ScrollBox maxHeight={"650px"}> */}
          <Box pt={2} pb={2}>
            <Typography fontFamily={"cursive"} variant="h4">
              Carrito de compras
            </Typography>
          </Box>
          <Box pb={1}>
            <Divider />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} pl={2} pr={2}>
            <Typography fontWeight={"bold"}>PRODUCTO</Typography>
            <Typography fontWeight={"bold"}>SUBTOTAL</Typography>
          </Box>
          <Box pt={1}>
            <Divider />
          </Box>
          <ScrollBox maxHeight={"550px"}>
            {products.map((p: Product) => (
              <React.Fragment key={p.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch(deleteProductFromCart(p.id))}
                    >
                      <DeleteIcon style={{ color: "#ffb4a2" }} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Image className="avatar-img" alt="img" src={p.image} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={<PrimaryContent p={p} />}
                    secondary={<SecondaryContent p={p} />}
                  />
                </ListItem>

                <Divider />
              </React.Fragment>
            ))}
          </ScrollBox>
          {/* </ScrollBox> */}
        </List>
        <FooterDrawerPedido />
      </Container>
    </>
  );
};

export default DrawerContentPedido;
