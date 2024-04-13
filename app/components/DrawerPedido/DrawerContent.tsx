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
import {
  Product,
  decreaseQuantityProductOnCart,
  increaseQuantityProductOnCart,
} from "@/app/redux/pasteleriaSlice";
import "./drawer.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useDispatch } from "react-redux";
const DrawerContent: React.FC = () => {
  const products = useProductsOnCart();
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <List>
          <Box pt={2} pb={2}>
            <Typography variant="h4">Carrito de compras</Typography>
          </Box>
          <Divider />
          {products.map((p: Product) => (
            <React.Fragment key={p.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#ffb4a2" }} />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Image className="avatar-img" alt="img" src={p.image} />
                </ListItemAvatar>

                <ListItemText
                  primary={<Typography variant="h6">{p.name}</Typography>}
                  secondary={
                    <>
                      <IconButton
                        onClick={() =>
                          dispatch(decreaseQuantityProductOnCart(p.id))
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                      {p.quantity}
                      <IconButton
                        onClick={() =>
                          dispatch(increaseQuantityProductOnCart(p.id))
                        }
                      >
                        <AddIcon />
                      </IconButton>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Container>
    </>
  );
};

export default DrawerContent;
