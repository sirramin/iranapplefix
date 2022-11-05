import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../store";

interface AuthState {
    deviceType: string,
  }

  const initialState: AuthState = {
    deviceType: ''
  };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateOrder: (state, action: PayloadAction<any>) => {
        state.deviceType = action.payload.deviceType
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateOrder } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;


export default authSlice.reducer