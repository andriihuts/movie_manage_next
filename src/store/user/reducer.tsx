import { createReducer } from "@reduxjs/toolkit";
import { addUser, deleteUser } from "./actions";
import { IUser } from "@/types";

export type UserState = {
  user: IUser | null;
};

const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, { payload }: any) => {
      state.user = { ...payload };
    })
    .addCase(deleteUser, (state) => {
      state.user = null;
    });
});

export default userReducer;
