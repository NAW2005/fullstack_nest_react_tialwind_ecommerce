import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const prodcutsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3010/" }),
  tagTypes: ["productsAPI"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ["productsAPI"],
    }),
    getDetailProduct: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["productsAPI"],
    }),
  }),
});

export const { useGetProductsQuery, useGetDetailProductQuery } = prodcutsAPI;
