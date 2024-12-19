import { configureStore } from '@reduxjs/toolkit';
import toggleNavbarReducer from './toggleNavbarSlice'; // Adjust the path as necessary
import startSignupReducer from './startSignupSlice';

const store = configureStore({
  reducer: {
    toggleNavbar: toggleNavbarReducer,
    startSignup: startSignupReducer, // Add the new slice here
  },
});

export default store;