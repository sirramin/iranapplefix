import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AuthState {
  deviceType: string;
  model: string;
  problem: string;
}

const initialState: AuthState = {
  deviceType: "",
  model: "",
  problem: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateOrder: (state, action: PayloadAction<any>) => {
      state.deviceType = action.payload.deviceType;
      state.model = action.payload.model;
      state.problem = action.payload.problem;
    },
  },
});

export const { updateOrder } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
