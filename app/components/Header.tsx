import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import LogoNegocio from "../assets/images/yuna_logo.jpg";
import Image from "next/image";
import "./components.css";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger =
    window &&
    useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props: Props) {
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
            <Box pr={1} pt={1}>
              <Image className="logo" src={LogoNegocio} alt="logo" />
            </Box>
            <Typography variant="h5">Yuna pastelería</Typography>
            <Box flexGrow={1} />
            <h4>Mi pedido</h4>
            <ShoppingCartIcon style={{ color: "#ffff" }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
