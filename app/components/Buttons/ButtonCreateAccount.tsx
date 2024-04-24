"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useBreakpoints } from "@/app/utils/useBreakpoints";

export default function ButtonCreateAccount(): JSX.Element {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();
  const handleMouseEnter = (button: string) => {
    setHovered(button);
  };
  const { upXs } = useBreakpoints();

  return (
    <>
      {upXs ? (
        <>
          <Button
            style={{
              color: hovered === "session" ? "#8B4513" : "white",
            }}
            size="small"
            variant="text"
            onClick={() => router.push("/auth/register")}
            onMouseEnter={() => handleMouseEnter("session")} // Establece el estado como verdadero cuando el mouse entra
            onMouseLeave={() => setHovered(null)} // Establece el estado como falso cuando el mouse sale
          >
            Crear cuenta
          </Button>

          <Button
            style={{
              color: hovered === "iniciar" ? "#8B4513" : "white",
            }}
            size="small"
            variant="text"
            onClick={() => router.push("/auth/login")}
            onMouseEnter={() => handleMouseEnter("iniciar")} // Establece el estado como verdadero cuando el mouse entra
            onMouseLeave={() => setHovered(null)} // Establece el estado como falso cuando el mouse sale
          >
            Iniciar sesión
          </Button>
        </>
      ) : null}
    </>
  );
}
