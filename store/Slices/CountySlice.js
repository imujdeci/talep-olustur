import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const countyUrl = process.env.NEXT_PUBLIC_COUNTY_URL;
const initialState = {
  county: [],
};

export const getCountyById = createAsyncThunk(
  "getCountyById",
  async (cityId) => {
    const { data } = await axios.get(`${countyUrl}${cityId}/counties`);
    return data;
  }
);

export const countySlice = createSlice({
  name: "county",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountyById.fulfilled, (state, action) => {
      state.county = action.payload;
    });
  },
});

export default countySlice.reducer;
