import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const prodcutsAPI = createApi({
  reducerPath: "prodcutsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getdefalultItems: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetdefalultItemsQuery } = prodcutsAPI;
