import {
  Product,
  decreaseQuantityProductOnCart,
  increaseQuantityProductOnCart,
} from "@/app/redux/pasteleriaSlice";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  p: Product;
}

export const SecondaryContent: React.FC<Props> = ({ p }) => {
  const dispatch = useDispatch();
  return (
    <>
      <IconButton
        color="primary"
        onClick={() => dispatch(decreaseQuantityProductOnCart(p.id))}
      >
        <RemoveIcon />
      </IconButton>
      <span style={{ fontFamily: "initial" }}>{p.quantity}</span>
      <IconButton
        color="primary"
        onClick={() => dispatch(increaseQuantityProductOnCart(p.id))}
      >
        <AddIcon />
      </IconButton>
    </>
  );
};
