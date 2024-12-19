import { createSlice } from "@reduxjs/toolkit";

const startSignupSlice = createSlice({
  name: "startSignup",
  initialState: {
    isVisible: true, // Initial state for visibility
    isClicked: false,
  },
  reducers: {
    showStartSignup: (state) => {
      state.isVisible = true; // Set visibility to true
    },
    hideStartSignup: (state) => {
      state.isVisible = false; // Set visibility to false
    },
    startSignupIsClicked: (state) => {
      state.isClicked = state.isClicked = true;
    },resetStartSignupIsClicked: (state) => {
      state.isClicked = false; 
    },
  },
});

export const { showStartSignup, hideStartSignup, startSignupIsClicked ,resetStartSignupIsClicked} =
  startSignupSlice.actions;
export default startSignupSlice.reducer;
