import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import alfajorCookieImage from "../assets/images/alfajor_cookie.jpg";
import alfajorCordobesImage from "../assets/images/alfajor_cordobes.jpg";
import alfajorNuezAvellanaImage from "../assets/images/alfajor_nuez_pasta_avellana.jpg";
import alfajorCacaoBlockImage from "../assets/images/cacao_blanco.jpg";
import alfajorMaicenaImage from "../assets/images/maicenita.jpg";
import alfajorMarplatenseImage from "../assets/images/marplatense_negro.jpg";
import alfajorSantafesinoImage from "../assets/images/santafesinos.jpg";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  addedToCart: boolean;
  image: string;
}

interface PasteleriaState {
  products: Product[];
}

const initialState: PasteleriaState = {
  products: [
    {
      id: 1,
      name: "Alfajor Cookie",
      price: 400,
      quantity: 0,
      addedToCart: false,
      image: alfajorCookieImage,
    },
    {
      id: 2,
      name: "Alfajor Cordobes",
      price: 500,
      quantity: 0,
      addedToCart: false,
      image: alfajorCordobesImage,
    },
    {
      id: 3,
      name: "Alfajor de Nuez con Pasta de Avellanas",
      price: 600,
      quantity: 0,
      addedToCart: false,
      image: alfajorNuezAvellanaImage,
    },
    {
      id: 4,
      name: "Alfajor de Cacao Block",
      price: 2,
      quantity: 0,
      addedToCart: false,
      image: alfajorCacaoBlockImage,
    },
    {
      id: 5,
      name: "Alfajor de Maicena",
      price: 2.5,
      quantity: 0,
      addedToCart: false,
      image: alfajorMaicenaImage,
    },
    {
      id: 6,
      name: "Alfajor Marplatense",
      price: 2,
      quantity: 0,
      addedToCart: false,
      image: alfajorMarplatenseImage,
    },
    {
      id: 8,
      name: "Alfajor Santafesino",
      price: 2.5,
      quantity: 0,
      addedToCart: false,
      image: alfajorSantafesinoImage,
    },

    // Agrega los otros tipos de alfajores aquí
  ],
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
