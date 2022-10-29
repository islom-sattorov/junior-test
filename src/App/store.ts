import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/posts/loginSlice";

export const store = configureStore({
    reducer:{
        // data: dataReducer,
        // posts: postReducer,
        login: loginReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

