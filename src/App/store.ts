import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../features/posts/postSlice";

export const store = configureStore({
    reducer:{
        // data: dataReducer,
        posts: postReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch;

