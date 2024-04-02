import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { productsData } from "../data/productsData";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  addedToCart: boolean;
  image: string | StaticImageData;
}

interface PasteleriaState {
  products: Product[];
}

const initialState: PasteleriaState = {
  products: productsData,
};

const pasteleriaSlice = createSlice({
  name: "pasteleria",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const productIndex = state.products.findIndex((x) => x.id === productId);

      const updatedProducts = [...state.products];
      const productInCart = updatedProducts[productIndex];

      updatedProducts[productIndex] = {
        ...productInCart,
        quantity: productInCart.quantity + 1,
        addedToCart: true,
      };

      return { ...state, products: updatedProducts };
    },
    decreaseQuantityProductOnCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const productIndex = state.products.findIndex((x) => x.id === productId);

      const updatedProducts = [...state.products];
      const productInCart = updatedProducts[productIndex];

      if (productInCart.quantity > 0) {
        updatedProducts[productIndex] = {
          ...productInCart,
          quantity: productInCart.quantity - 1,
        };
      }

      return { ...state, products: updatedProducts };
    },

    increaseQuantityProductOnCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const productIndex = state.products.findIndex((x) => x.id === productId);

      const updatedProducts = [...state.products];
      const productInCart = updatedProducts[productIndex];

      if (productInCart.quantity > 0) {
        updatedProducts[productIndex] = {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        };
      }

      return { ...state, products: updatedProducts };
    },
  },
});

export const {
  addProductToCart,
  decreaseQuantityProductOnCart,
  increaseQuantityProductOnCart,
} = pasteleriaSlice.actions;
export default pasteleriaSlice.reducer;
