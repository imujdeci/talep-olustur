import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const categoryUrl = process.env.NEXT_PUBLIC_CATEGORY_URL;

const initialState = {
  category: [],
};

export const getCategory = createAsyncThunk("getCategory", async () => {
  const { data } = await axios.get(categoryUrl);
  return data.data;
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export default categorySlice.reducer;
