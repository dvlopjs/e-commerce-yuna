import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "../components.css";
import { Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ButtonCreateAccount from "../Buttons/ButtonCreateAccount";
import LogoApp from "./LogoApp";
import AnimatedBadge from "./AnimatedBadge";
import ReusableDrawer from "../DrawerPedido";

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
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

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
            <LogoApp />
            <Box flexGrow={1} />
            <Box
              display={"flex"}
              alignContent={"center"}
              alignItems={"center"}
              gap={4}
            >
              <ButtonCreateAccount
                text={"Crear cuenta"}
                urlDirection="/auth/register"
              />
              {/* <Badge
                badgeContent={3}
                color="error"
                style={{ cursor: "pointer" }}
              >
                <ShoppingCartIcon style={{ color: "#ffff" }} />

              </Badge> */}
              <AnimatedBadge setOpenDrawer={setOpenDrawer} />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <ReusableDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </React.Fragment>
  );
}
