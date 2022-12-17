import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";
import { postApi } from "../app/reducers/posts/postApi";
import { boxStyleReducer } from "./reducers/boxStyle/boxStyleSlice";
import { loginReducer } from "./reducers/login/loginSlice";
import { notificationReducer } from "./reducers/notification/notificationSlice";
import { searchReducer } from "./reducers/search/searchSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [postApi.reducerPath]: postApi.reducer,
  login: loginReducer,
  notification: notificationReducer,
  boxStyle: boxStyleReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, postApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
