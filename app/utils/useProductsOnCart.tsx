import { RootState } from "../redux/store";

import { useSelector } from "react-redux";

export const useProductsOnCart: Function = () => {
  const products = useSelector((state: RootState) => state.pasteleria.products);

  return products.filter((p) => p.addedToCart);
};
