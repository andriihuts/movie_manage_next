import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const selectData = (state: RootState) => state.user;

export const userSelector = createSelector(selectData, (state) => state);
