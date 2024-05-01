import { Box, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useProductsOnCart } from "@/app/utils/useProductsOnCart";
import { CartProduct } from "@/app/redux/pasteleriaSlice";

interface Props {
  openModal?: () => void;
  name?: string;
}

export const PedirWp: React.FC<Props> = ({ openModal }) => {
  return (
    <Box pt={2}>
      <Button
        type="submit"
        onClick={openModal ? openModal : () => {}}
        sx={{
          fontWeight: "bold",
          gap: 1,
          flex: "direction",
          alignItems: "center",
          borderRadius: 20,
        }}
        fullWidth
        color="success"
        variant="outlined"
      >
        Pedir por WhatsApp
        <WhatsAppIcon />
      </Button>
    </Box>
  );
};
