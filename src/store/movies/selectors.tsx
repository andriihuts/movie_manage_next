import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const selectData = (state: RootState) => state.allMovies;

export const moviesSelector = createSelector(selectData, (state) => state);
