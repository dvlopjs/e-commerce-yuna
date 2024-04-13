import React from "react";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import DrawerContent from "./DrawerContent";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ReusableDrawer: React.FC<Props> = ({ open, onClose }) => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  const isMD = useMediaQuery(theme.breakpoints.up("md"));

  let drawerWidth = "60%"; // Ancho por defecto para pantallas extra pequeñas (XS)
  if (isMD) {
    drawerWidth = "30%"; // Ancho para pantallas medianas (MD)
  } else if (isLG) {
    drawerWidth = "30%"; // Ancho para pantallas grandes (LG)
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: drawerWidth },
      }}
    >
      <DrawerContent />
    </Drawer>
  );
};

export default ReusableDrawer;
