import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";

const store = configureStore({
  reducer: {
    movie: moviesReducer,
  },
});

export default store;
