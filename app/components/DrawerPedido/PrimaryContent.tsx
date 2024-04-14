import { Product } from "@/app/redux/pasteleriaSlice";
import { truncateTitle } from "@/app/utils/truncateTitle";
import { Box, Typography } from "@mui/material";

interface Props {
  p: Product;
}

export const PrimaryContent: React.FC<Props> = ({ p }) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignContent={"center"}
        pt={4}
      >
        <Typography variant="h6">{truncateTitle({ text: p.name })}</Typography>
        <Typography variant="body1">$ {p.price * p.quantity}</Typography>
      </Box>
    </>
  );
};
