import { Box, Container, Typography } from "@mui/material";
import React from "react";

import { CardPedido } from "./CardPedido";
import { ArrowGoBack } from "../components/Buttons/ArrowGoBack";
import { ScrollBox } from "../components/reusable/ScrollBox";
import { FooterPedido } from "./FooterPedido";
import { NoProducts } from "./NoProducts";

export default function MiPedidoPage() {
  return (
    <Container sx={{ paddingTop: 2, paddingBottom: 3 }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pb={3}
      >
        <Typography fontFamily={"cursive"} variant="h4">
          Mi pedido...
        </Typography>

        <ArrowGoBack size="large" />
      </Box>
      <ScrollBox maxHeight={"650px"} style={{ paddingBottom: 2 }}>
        <CardPedido />
      </ScrollBox>
      <Box>
        <NoProducts />
      </Box>

      <FooterPedido />
    </Container>
  );
}
