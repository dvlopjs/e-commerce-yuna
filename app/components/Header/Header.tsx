"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "../components.css";
import { Box, IconButton } from "@mui/material";
import LogoApp from "./LogoApp";
import AnimatedBadge from "./AnimatedBadge";
import ReusableDrawer from "../DrawerPedido";

// import { useSession } from "next-auth/react";

import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "../DrawerMenu";
import DrawerContentPedido from "../DrawerPedido/DrawerContent";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: any;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props: Props) {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [openDrawerMenu, setOpenDrawerMenu] = React.useState<boolean>(false);
  // const { data: session } = useSession();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          style={{
            backgroundColor: "#ffb4a2",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
          }}
          elevation={2}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "white" }}
              onClick={() => setOpenDrawerMenu(true)}
            >
              <MenuIcon />
            </IconButton>

            <LogoApp />

            <Box flexGrow={1} />

            <Box display={"flex"} alignContent={"center"} gap={2}>
              {/* {!session ? <ButtonCreateAccount /> : <ButtonInSession />} */}

              <AnimatedBadge setOpenDrawer={setOpenDrawer} />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <DrawerMenu
        open={openDrawerMenu}
        onClose={() => setOpenDrawerMenu(false)}
      />
      {openDrawer ? (
        <ReusableDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <DrawerContentPedido />
        </ReusableDrawer>
      ) : null}
    </React.Fragment>
  );
}
