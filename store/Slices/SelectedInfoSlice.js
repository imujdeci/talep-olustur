import { createSlice } from "@reduxjs/toolkit";

export const selectedInfoSlice = createSlice({
  name: "selectedInfo",
  initialState: {
    selectedCategory: null,
    selectedCity: null,
    selectedCounty: null,
    selectedSubCategory: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setSelectedCounty: (state, action) => {
      state.selectedCounty = action.payload;
    },
    setSelectedSubcategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedCity,
  setSelectedCounty,
  setSelectedSubcategory,
} = selectedInfoSlice.actions;

export default selectedInfoSlice.reducer;
