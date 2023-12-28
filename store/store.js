import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import CategorySlice from "./Slices/CategorySlice";
import CitySlice from "./Slices/CitySlice";

const store = () =>
  configureStore({
    reducer: {
      category: CategorySlice,
      city: CitySlice,
    },
  });

export const wrapper = createWrapper(store);
