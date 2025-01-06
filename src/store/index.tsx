import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { userReducer } from "./user";
import { moviesReducer } from "./movies";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      allMovies: moviesReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
