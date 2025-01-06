import { createReducer } from "@reduxjs/toolkit";

import { addMovies } from "./actions";
import { IMovie } from "@/types";

export type MoviesState = {
  allMovies: IMovie[] | null;
};

const initialState: MoviesState = {
  allMovies: null,
};

export const moviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMovies, (state, { payload }: any) => {
    state.allMovies = payload;
  });
});

export default moviesReducer;
