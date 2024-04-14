import { RootState } from "../redux/store";

import { useSelector } from "react-redux";

export const useProductsOnCart: Function = () => {
  const cart = useSelector((state: RootState) => state.pasteleria.cart);

  const subtotal = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  if (cart.length) {
    return { cart: cart, subtotal: subtotal };
  } else {
    return { cart: [], subtotal: 0 };
  }
};
