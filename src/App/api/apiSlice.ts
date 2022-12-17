import { createApi } from "@reduxjs/toolkit/dist/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3500";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
