import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoApp from "../Header/LogoApp";

const drawerWidth = 350;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DrawerMenu({ open, onClose }: Props) {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const activeRoute = (routeName: string, currentRoute: string) => {
    return routeName === currentRoute ? true : false;
  };

  const routes = [
    {
      id: 1,
      label: "PRODUCTOS",
      path: "/",
      icon: <WarehouseIcon color="primary" />,
    },
    {
      id: 2,
      label: "MI PEDIDO",
      path: "/mi-pedido",
      icon: <ProductionQuantityLimitsIcon color="primary" />,
    },
    {
      id: 3,
      label: "CONTACTO",
      path: "/contact",
      icon: <PersonIcon color="primary" />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(255, 180, 162)",
          },
        }}
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <LogoApp />
          <IconButton onClick={onClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "white" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {routes.map((route, index) => (
            <Link
              onClick={onClose}
              href={route.path}
              style={{ textDecoration: "none", color: "white" }}
              key={index}
            >
              <ListItem disablePadding>
                <ListItemButton selected={activeRoute(route.path, pathname)}>
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        {activeRoute(route.path, pathname) ? (
                          <span style={{ fontWeight: "bold" }}>
                            {route.label}
                          </span>
                        ) : (
                          route.label
                        )}
                      </>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
