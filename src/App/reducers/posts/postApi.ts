import { apiSlice } from "../../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (page = 1) => ({ url: `/posts?page=${page}` }),
      providesTags: ["Post"],
    }),
  }),
});
