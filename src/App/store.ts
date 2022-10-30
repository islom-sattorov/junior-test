import { configureStore } from "@reduxjs/toolkit";
import { boxStyleReducer } from "../features/boxStyle/boxStyleSlice";
import { loginReducer } from "../features/login/loginSlice";
import { notificationReducer } from "../features/notification/notificationSlice";
import { searchReducer } from "../features/search/searchSlice";

export const store = configureStore({
    reducer:{
        // data: dataReducer,
        // posts: postReducer,
        login: loginReducer,
        notification: notificationReducer,
        boxStyle: boxStyleReducer,
        search: searchReducer,
    }
})


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

