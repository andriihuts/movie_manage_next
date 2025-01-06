import { createAction } from "@reduxjs/toolkit";

export const addUser = createAction<object>("addUser");
export const deleteUser = createAction("deleteUser");
