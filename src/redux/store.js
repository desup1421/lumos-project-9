import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// Slice reducer
import userSlice from "./slices/userSlice";
import portfolioSlice from "./slices/portfolioSlice";
import blogSlice from "./slices/blogSlice";

const rootReducer = combineReducers({
  user: userSlice,
  portfolio: portfolioSlice,
  blog: blogSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
