"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";

interface ButtonProps {
  text: string;
  urlDirection: string;
}

export default function ButtonCreateAccount({
  text,
  urlDirection,
}: ButtonProps): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link href={urlDirection}>
      <Button
        style={{
          color: "white",
          textDecoration: hovered ? "underline" : "none", // Aplica subrayado si el mouse está sobre el botón
        }}
        size="small"
        variant="text"
        onMouseEnter={() => setHovered(true)} // Establece el estado como verdadero cuando el mouse entra
        onMouseLeave={() => setHovered(false)} // Establece el estado como falso cuando el mouse sale
      >
        {text}
      </Button>
    </Link>
  );
}
