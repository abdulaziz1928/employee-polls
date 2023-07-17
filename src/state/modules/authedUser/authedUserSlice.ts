import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string | null = null;

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState: initialState as string | null,
  reducers: {
    setAuthedUser: (_, action: PayloadAction<string>) => action.payload,
    logoutAuthedUser: () => null,
  },
});

export const { setAuthedUser, logoutAuthedUser } = authedUserSlice.actions;

export default authedUserSlice.reducer;
