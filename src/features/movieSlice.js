import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchingMovies = createAsyncThunk(
  "movie/fetchingMovies",
  async (query) => {
    const KEY = "f84fc31d";
    const apiUrl = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

    const response = await axios(apiUrl);
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
// export const moviesActions = moviesSlice.actions;

// export const { createCustomer } = movieSlice.actions;

export default moviesSlice.reducer;
