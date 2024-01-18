import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import CategorySlice from "./Slices/CategorySlice";
import CitySlice from "./Slices/CitySlice";
import CountySlice from "./Slices/CountySlice";
import SelectedInfoSlice from "./Slices/SelectedInfoSlice";

const store = () =>
  configureStore({
    reducer: {
      category: CategorySlice,
      city: CitySlice,
      county: CountySlice,
      selectedCategory: SelectedInfoSlice,
      selectedCity: SelectedInfoSlice,
      selectedCounty: SelectedInfoSlice,
      selectedSubcategory: SelectedInfoSlice,
    },
  });

export const wrapper = createWrapper(store);
