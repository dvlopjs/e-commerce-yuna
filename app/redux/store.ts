import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pasteleriaSlice from "./pasteleriaSlice";

const rootReducer = combineReducers({
  // Agrega tus reducers aquí
  pasteleria: pasteleriaSlice,
});

const store = configureStore({
  reducer: rootReducer,
  // Opcional: aquí puedes agregar middlewares, enhancers, etc.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
