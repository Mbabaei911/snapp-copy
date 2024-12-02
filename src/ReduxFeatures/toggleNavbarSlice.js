import { createSlice } from '@reduxjs/toolkit';

const toggleNavbarSlice = createSlice({
  name: 'toggleNavbar',
  initialState: {
    navbarIsToggled: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.navbarIsToggled = !state.navbarIsToggled; // Toggle the boolean state
    }
  },
});

export const { toggleNavbar } = toggleNavbarSlice.actions;
export default toggleNavbarSlice.reducer;