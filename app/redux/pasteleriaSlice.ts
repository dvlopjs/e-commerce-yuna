import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { productsData } from "../data/productsData";
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  addedToCart: boolean;
  image: string | StaticImageData;
}

interface CartProduct extends Product {
  quantity: number;
}
interface PasteleriaState {
  products: Product[];
  cart: CartProduct[];
}

const initialState: PasteleriaState = {
  products: productsData,
  cart: [],
};

const pasteleriaSlice = createSlice({
  name: "pasteleria",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<any>) {
      const productSelected = action.payload;
      const indexProduct = state.cart.findIndex(
        (x) => x.id === productSelected.id
      );
      const cartCopy = [...state.cart];

      console.log(indexProduct);
      // Chequear si el articulo se encuentra en el carrito
      if (indexProduct !== -1) {
        cartCopy[indexProduct].quantity += 1;
      } else {
        cartCopy.push({ ...productSelected, quantity: 1 });
      }

      state.cart = cartCopy;
    },
    decreaseQuantityProductOnCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const productIndex = state.cart.findIndex((x) => x.id === productId);

      const updatedProducts = [...state.cart];
      const productInCart = updatedProducts[productIndex];

      if (productInCart.quantity > 0) {
        updatedProducts[productIndex] = {
          ...productInCart,
          quantity: productInCart.quantity - 1,
        };
      }

      if (productInCart.quantity === 1) {
        updatedProducts.splice(productIndex, 1);
      }

      state.cart = updatedProducts;
    },

    increaseQuantityProductOnCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const productIndex = state.cart.findIndex((x) => x.id === productId);

      const updatedProducts = [...state.cart];
      const productInCart = updatedProducts[productIndex];

      if (productInCart.quantity > 0) {
        updatedProducts[productIndex] = {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        };
      }

      state.cart = updatedProducts;
    },
  },
});

export const {
  addProductToCart,
  decreaseQuantityProductOnCart,
  increaseQuantityProductOnCart,
} = pasteleriaSlice.actions;
export default pasteleriaSlice.reducer;
