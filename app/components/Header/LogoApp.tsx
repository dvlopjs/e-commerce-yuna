import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "../../components/components.css";

import LogoNegocio from "../../assets/images/yuna_logo.jpg";
import { useBreakpoints } from "@/app/utils/useBreakpoints";

export default function LogoApp(): JSX.Element {
  const { upSm, upMd } = useBreakpoints();

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

          {upMd ? <Typography variant="h4">Yuna pastelería</Typography> : null}
        </Box>
      </Link>
    </>
  );
}
