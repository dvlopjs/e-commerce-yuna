"use client";

import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { priceParser } from "../utils/priceParser";
import { useProductsOnCart } from "../utils/useProductsOnCart";
import React from "react";
import { DialogReusable } from "../components/reusable/DialogReusable";
import FormEnviarWp from "./FormEnviarWp";

export const FooterPedido: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const { subtotal } = useProductsOnCart();

  return (
    <>
      {subtotal !== 0 ? (
        <Grid container justifyContent={"center"}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={6} sx={{ pr: 2, pt: 1 }}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h5" fontWeight={"bold"}>
                  Total:
                </Typography>

                <Typography variant="h5" fontWeight={"bold"}>
                  ${priceParser(subtotal)}
                </Typography>
              </Box>
              <Divider />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} sx={{ pt: 1, pr: 2 }}>
            <Button
              fullWidth
              variant="contained"
              style={{ color: "white" }}
              onClick={() => setOpenModal(true)}
            >
              Confirmar pedido
            </Button>
            <DialogReusable
              title="¡El último paso!"
              open={openModal}
              onClose={() => setOpenModal(false)}
            >
              <FormEnviarWp />
            </DialogReusable>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};
