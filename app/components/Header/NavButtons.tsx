"use client";
import { Button } from "@mui/material";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useBreakpoints } from "@/app/utils/useBreakpoints";

const NavButtons: React.FC = () => {
  const pathname = usePathname();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const handleMouseEnter = (button: string) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const { upSm, upMd } = useBreakpoints();
  return (
    <>
      {/* Botones adicionales */}
      {upMd ? (
        <>
          <Button
            color="inherit"
            href="/"
            startIcon={<WarehouseIcon />}
            onMouseEnter={() => handleMouseEnter("productos")}
            onMouseLeave={handleMouseLeave}
            style={{
              color:
                hoveredButton === "productos" || pathname === "/"
                  ? "#8B4513"
                  : "inherit",
              backgroundColor: "transparent",
            }}
          >
            PRODUCTOS
          </Button>
          <Button
            color="inherit"
            href="/mi-pedido"
            startIcon={<ProductionQuantityLimitsIcon />}
            onMouseEnter={() => handleMouseEnter("pedido")}
            onMouseLeave={handleMouseLeave}
            style={{
              color:
                hoveredButton === "pedido" || pathname === "/mi-pedido"
                  ? "#8B4513"
                  : "inherit",
              backgroundColor: "transparent",
            }}
          >
            MI PEDIDO
          </Button>
          <Button
            color="inherit"
            href="/contact"
            startIcon={<PersonIcon />}
            onMouseEnter={() => handleMouseEnter("contacto")}
            onMouseLeave={handleMouseLeave}
            style={{
              color:
                hoveredButton === "contacto" || pathname === "/contact"
                  ? "#8B4513"
                  : "inherit",
              backgroundColor: "transparent",
            }}
          >
            CONTACTO
          </Button>
        </>
      ) : null}
    </>
  );
};

export default NavButtons;
