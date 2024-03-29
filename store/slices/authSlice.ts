import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AuthState {
  isAuthenticated: boolean;
  mobile: string;
  firstname: string;
  lastname: string;
  token: string | null;
  comeFromOrder: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  mobile: "",
  firstname: "",
  lastname: "",
  token: null,
  comeFromOrder: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.mobile = action.payload.mobile;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.mobile = "";
      state.firstname = "";
      state.lastname = "";
      state.token = null;
    },
    updateName: (state, action: PayloadAction<any>) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, updateName } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
