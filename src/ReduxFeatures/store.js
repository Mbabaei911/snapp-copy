import { configureStore } from '@reduxjs/toolkit';
import toggleNavbarReducer from './toggleNavbarSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    toggleNavbar: toggleNavbarReducer,
  },
});

export default store;