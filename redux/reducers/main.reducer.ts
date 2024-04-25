import { createSlice } from "@reduxjs/toolkit";

export interface IInitialstate {
  authState: boolean;
}
const initialState: IInitialstate = {
  authState: false,
};
const userSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
