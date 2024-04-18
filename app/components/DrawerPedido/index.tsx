"use client";
import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerContent from "./DrawerContent";
import CloseIcon from "@mui/icons-material/Close";
import { useProductsOnCart } from "@/app/utils/useProductsOnCart";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ReusableDrawer: React.FC<Props> = ({ open, onClose }) => {
  const { cart } = useProductsOnCart();
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));

  let drawerWidth = "100%"; // Ancho por defecto para pantallas extra pequeñas (XS)
  if (isMD) {
    drawerWidth = "30%"; // Ancho para pantallas medianas (MD)
  } else if (isSM) {
    drawerWidth = "50%";
  } else if (isLG) {
    drawerWidth = "30%"; // Ancho para pantallas grandes (LG)
  }

  React.useEffect(() => {
    if (!cart.length) onClose();
  }, [cart, onClose]);
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: drawerWidth, backgroundColor: "rgb(252, 247, 248)" },
      }}
    >
      <Box display={"flex"} justifyContent={"flex-end"} pr={2} pt={2}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DrawerContent />
    </Drawer>
  );
};

export default ReusableDrawer;
