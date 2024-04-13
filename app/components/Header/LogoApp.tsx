import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "../../components/components.css";

import LogoNegocio from "../../assets/images/yuna_logo.jpg";
import { useSpring, animated } from "@react-spring/web";

export default function LogoApp(): JSX.Element {
  return (
    <>
      <Link href="/" style={{ textDecoration: "none", color: "white" }}>
        <Box
          pr={1}
          pt={1}
          pb={1}
          gap={2}
          display={"flex"}
          alignItems={"center"}
          style={{ cursor: "pointer" }}
          className="text-logo"
        >
          <Image className="logo" src={LogoNegocio} alt="logo" />

          <Typography variant="h5">Yuna pastelería</Typography>
        </Box>
      </Link>
    </>
  );
}
