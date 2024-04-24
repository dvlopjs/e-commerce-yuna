"use client";

import { RootState } from "@/app/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { Badge, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import { useHoveredButtons } from "@/app/utils/useHoveredButtons";

export const VerPedidoButton: React.FC = () => {
  const nameButton: string = "hoveredButton";

  const { hovered, handleMouseEnter, onHoverExit } = useHoveredButtons({
    button: nameButton,
  });
  const { cart } = useSelector((state: RootState) => state.pasteleria);
  const router = useRouter();
  const showButton = cart.length;

  const buttonAnimation = useSpring({
    opacity: showButton ? 1 : 0, // Si showButton es true, establece la opacidad en 1, de lo contrario en 0
    scale: hovered === "hoveredButton" ? 1.1 : 1,
    color: hovered === "hoveredButton" ? "#8B4513" : "white",
    transform: showButton ? "translateY(0)" : "translateY(100px)", // Si showButton es true, establece la transformación en translateY(0), de lo contrario en translateY(100px)
  });

  return showButton ? (
    <Box pt={2} display={"flex"} justifyContent={"flex-end"}>
      <animated.div style={buttonAnimation}>
        <Button
          // color="primary"
          // variant=''
          onMouseEnter={handleMouseEnter}
          onMouseLeave={onHoverExit}
          onClick={() => router.push("/mi-pedido")}
          sx={{
            backgroundColor: "#E6BAA3", // Cambia el color de fondo del botón
            color: hovered === "hoveredButton" ? "#8B4513" : "#ffffff", // Cambia el color del texto del botón a blanco
            padding: "12px 24px", // Aumenta el padding para aumentar el tamaño del botón
            fontSize: "1.2rem", // Aumenta el tamaño del texto del botón
            borderRadius: 999, // Hace que el botón tenga bordes redondeados
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Agrega una sombra para hacer que el botón se destaque más
            "&:hover": {
              backgroundColor: "#E6BAA3", // Cambia el color de fondo del botón al pasar el ratón sobre él
            },
          }}
          endIcon={
            <Badge
              color="error"
              badgeContent={
                <span style={{ fontFamily: "initial" }}>{cart.length}</span>
              }
            >
              <ShoppingCartIcon />
            </Badge>
          }
        >
          Ver pedido
        </Button>
      </animated.div>
    </Box>
  ) : null;
};
