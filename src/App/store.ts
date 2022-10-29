import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/login/loginSlice";
import { notificationReducer } from "../features/notification/notificationSlice";

export const store = configureStore({
    reducer:{
        // data: dataReducer,
        // posts: postReducer,
        login: loginReducer,
        notification: notificationReducer,
    }
})


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

