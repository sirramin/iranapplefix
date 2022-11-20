import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface OrderState {
  deviceType: string;
  model: string;
  problem: string;
  solution: string;
}

const initialState: OrderState = {
  deviceType: "",
  model: "",
  problem: "",
  solution: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateDeviceType: (state, action: PayloadAction<any>) => {
      state.deviceType = action.payload.deviceType;
    },
    updateModel: (state, action: PayloadAction<any>) => {
      state.model = action.payload.model;
    },
    updateProblem: (state, action: PayloadAction<any>) => {
      state.problem = action.payload.problem;
    },
    updateSolution: (state, action: PayloadAction<any>) => {
      state.solution = action.payload.solution;
    },
  },
});

export const { updateDeviceType, updateModel, updateProblem, updateSolution } =
  orderSlice.actions;
export const selectOrder = (state: RootState) => state.order;
export default orderSlice.reducer;
