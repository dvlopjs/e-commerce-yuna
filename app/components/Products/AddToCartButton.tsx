import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import "react-toastify/dist/ReactToastify.css";
import successNotification from "../../utils/notifications/successNotification";

const AddToCartButton: React.FC = ({}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const springProps = useSpring({
    transform: clicked ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
    successNotification({
      message: <Typography>¡Producto agregado al carrito.!</Typography>,
    });
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
    </animated.div>
  );
};

export default AddToCartButton;
