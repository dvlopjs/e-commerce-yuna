import { useHoveredButtons } from "@/app/utils/useHoveredButtons";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import React from "react";

export const ButtonInSession: React.FC = () => {
  const nameButton: string = "closeSession";
  //   const [hovered, setHovered] = React.useState<boolean>(false);
  const { hovered, handleMouseEnter, onHoverExit } = useHoveredButtons({
    button: nameButton,
  });

  return (
    <>
      <Button
        style={{
          color: hovered === "closeSession" ? "#8B4513" : "white", // Aplica subrayado si el mouse está sobre el botón
        }}
        size="small"
        variant="text"
        onClick={() => signOut()}
        onMouseEnter={handleMouseEnter} // Establece el estado como verdadero cuando el mouse entra
        onMouseLeave={onHoverExit} // Establece el estado como falso cuando el mouse sale
      >
        Cerrar sesión
      </Button>
    </>
  );
};
