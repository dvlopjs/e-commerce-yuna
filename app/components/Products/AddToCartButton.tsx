import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import "react-toastify/dist/ReactToastify.css";
import { Product, addProductToCart } from "@/app/redux/pasteleriaSlice";
import { useDispatch } from "react-redux";
import ReusableDrawer from "../DrawerPedido";

interface Props {
  product: Product;
}

const AddToCartButton: React.FC<Props> = ({ product }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const dispatch = useDispatch();

  const springProps = useSpring({
    transform: clicked ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
    dispatch(addProductToCart(product.id));
    setOpenDrawer(true);
  };

  return (
    <animated.div style={springProps}>
      <Button
        disabled={clicked}
        style={{ backgroundColor: "#ffb4a2" }}
        variant="contained"
        onClick={handleClick}
      >
        Agregar al carrito
      </Button>
      <ReusableDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </animated.div>
  );
};

export default AddToCartButton;
