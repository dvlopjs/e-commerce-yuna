import { RootState } from "../redux/store";

import { useSelector } from "react-redux";

export const useProductsOnCart: Function = () => {
  const cart = useSelector((state: RootState) => state.pasteleria.cart);

  if (cart.length) {
    return cart;
  } else {
    return [];
  }
};
