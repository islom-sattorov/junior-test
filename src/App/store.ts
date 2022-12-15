import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";
import { boxStyleReducer } from "./reducers/boxStyle/boxStyleSlice";
import { loginReducer } from "./reducers/login/loginSlice";
import { notificationReducer } from "./reducers/notification/notificationSlice";
import { searchReducer } from "./reducers/search/searchSlice";

export const store = configureStore({
  reducer: {
    // data: dataReducer,
    // posts: postReducer,
    login: loginReducer,
    notification: notificationReducer,
    boxStyle: boxStyleReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
