import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface OrderState {
  deviceType: string;
  model: string;
  problem: string;
  solution: string;
  previous: string;
}

const initialState: OrderState = {
  deviceType: "",
  model: "",
  problem: "",
  solution: "",
  previous: "",
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
    updatePrevious: (state, action: PayloadAction<any>) => {
      state.previous = action.payload.previous;
    },
  },
});

export const {
  updateDeviceType,
  updateModel,
  updateProblem,
  updateSolution,
  updatePrevious,
} = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order;
export default orderSlice.reducer;
