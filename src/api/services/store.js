import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { prodcutsAPI } from "./products";

export const store = configureStore({
  reducer: {
    [prodcutsAPI.reducerPath]: prodcutsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prodcutsAPI.middleware),
});
