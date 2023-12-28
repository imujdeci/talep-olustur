import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cityUrl = process.env.NEXT_PUBLIC_CITY_URL;

const initialState = {
  city: [],
};

export const getCity = createAsyncThunk("getCity", async () => {
  const { data } = await axios.get(cityUrl);
  return data;
});

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCity.fulfilled, (state, action) => {
      state.city = action.payload;
    });
  },
});

export default citySlice.reducer;
