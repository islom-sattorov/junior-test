import { createSlice } from "@reduxjs/toolkit";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  category: string;
  subtitle: string;
};

// Server Actions
// const JSON_SERVER = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
// const JSON_SERVER = 'https://dsafd' // Throw a error
// const JSON_SERVER = "http://localhost:3001/posts"; // All post
// const JSON_SERVER = "http://localhost:3001/posts?category=IT"; // only IT
// const JSON_SERVER = "http://localhost:3001/posts?q=medicine"; // Search
// const JSON_SERVER = "http://localhost:3001/posts?category_like=medicine"; // Search in category
// const JSON_SERVER = "http://localhost:3001/posts?_sort=category "; // Sort by category
// const JSON_SERVER = "http://localhost:3001/posts?_sort=category&_order=desc "; // Reverse sort by category
// Pagination
// const JSON_SERVER = "http://localhost:3001/posts?_limit=2"; // Limit 2
// const JSON_SERVER = "http://localhost:3001/posts?_limit=10&_page=1"; // Limit with pages

// Action
// export const getPosts = createAsyncThunk(
//   "posts/getPosts",
//   async (data, thunkApi) => {
//     try {
//       const response = await fetch(JSON_SERVER);
//       const resJson = await response.json();
//       const data = await resJson;
//       return data;
//     } catch (err: any) {
//       console.error("ALERT ALERT ALERT", err);
//       return thunkApi.rejectWithValue(err.message);
//     }
//   }
// );

interface PostState {
  loading: boolean;
  error: null | string;
  data: null | Post[];
}

const initialState: PostState = {
  loading: false,
  error: null,
  data: null,
};

// Slice
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  // extraReducers(builder){
  //     builder
  //     .addCase(getPosts.pending, (state,action) =>{
  //        state.loading = true;
  //     })
  //     .addCase(getPosts.fulfilled, (state, action:PayloadAction<Post[]>) =>{
  //         state.loading = false;
  //         state.data = action.payload;
  //     })
  //     .addCase(getPosts.rejected, (state, action:PayloadAction<any>) =>{
  //         state.loading = false;
  //         state.error = action.payload
  //     })
  // },
});

export const postReducer = postSlice.reducer;
// export const {} = postSlice.actions
