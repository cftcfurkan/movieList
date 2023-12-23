import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (query) => {
    const KEY = "f84fc31d";
    const apiUrl = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

    const response = await axios(apiUrl);
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    console.log(response.data);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "An error occurred.";
    },
  },
});

export const { createCustomer } = movieSlice.actions;

export default movieSlice.reducer;
