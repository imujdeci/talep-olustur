import { createSlice } from "@reduxjs/toolkit";

export const selectedInfoSlice = createSlice({
  name: "selectedInfo",
  initialState: {
    selectedCategory: null,
    selectedCity: null,
    selectedCounty: null,
    selectedSubCategories: [],
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
    updateSelectedSubcategories: (state, action) => {
      state.selectedSubCategories = action.payload;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedCity,
  setSelectedCounty,
  updateSelectedSubcategories,
} = selectedInfoSlice.actions;

export default selectedInfoSlice.reducer;
