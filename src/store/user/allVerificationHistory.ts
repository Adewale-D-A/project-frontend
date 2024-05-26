import { createSlice } from "@reduxjs/toolkit";
import { verificationHistory } from "../../types/api/verificationHistory";

export const myVerificationHistory = createSlice({
  name: "my-verification-history",
  initialState: {
    value: {
      status: false,
      data: [] as verificationHistory,
    },
  },
  reducers: {
    updateVerificationHistory: (state, action) => {
      state.value.status = true;
      state.value.data = action?.payload;
    },
    clearVerificationHistory: (state) => {
      state.value.status = false;
      state.value.data = [];
    },
  },
});

export const { updateVerificationHistory, clearVerificationHistory } =
  myVerificationHistory.actions;

export default myVerificationHistory.reducer;
