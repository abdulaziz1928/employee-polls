import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./models/user";

export const initialState: Record<string, User> = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveUsers(state, action: PayloadAction<Record<string, User>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { receiveUsers } = usersSlice.actions;

export default usersSlice.reducer;
