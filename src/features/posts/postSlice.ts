import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

// Action
export const getPosts = createAsyncThunk("posts/getPosts", async (data, thunkApi) =>{
        try{
            const response = await fetch(JSON_PLACEHOLDER_API);
            const resJson = await response.json();
            const data = await resJson;
            return data;
        }catch(err: any){
            console.error("ALERT ALERT ALERT",err)
            return thunkApi.rejectWithValue(err.message)
        }
    })

interface PostState {
    loading: boolean;
    error: null| string;
    data: null | Post[];
}

const initialState: PostState = {
    loading: false,
    error: null,
    data: null,
}

// Slice
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getPosts.pending, (state,action) =>{
           state.loading = true; 
        })
        .addCase(getPosts.fulfilled, (state, action:PayloadAction<Post[]>) =>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getPosts.rejected, (state, action:PayloadAction<any>) =>{
            state.loading = false;
            state.error = action.payload
        })
    },
})


export const postReducer = postSlice.reducer;
// export const {} = postSlice.actions
