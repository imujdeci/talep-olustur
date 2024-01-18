import React from "react";
import styles from "@/styles/Home.module.css";
import { getCity } from "@/store/Slices/CitySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { getCountyById } from "@/store/Slices/CountySlice";
import { setCity } from "@/store/Slices/SelectedInfoSlice";
import { setSelectedCity } from "@/store/Slices/SelectedInfoSlice";
import { setSelectedCounty } from "@/store/Slices/SelectedInfoSlice";

const City = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.city);
  const { selectedCity } = useSelector((state) => state.selectedCity);

  useEffect(() => {
    dispatch(getCity());
  }, []);

  const handleCityChange = (event, value) => {
    dispatch(setSelectedCity(value));
    if (value) {
      dispatch(getCountyById(value.id));
      dispatch(setSelectedCounty(null));
    }
  };
  console.log(selectedCity);
  return (
    <div>
      <Autocomplete
        disablePortal
        selectOnFocus
        id="combo-box-demo"
        options={city.data || []}
        getOptionLabel={(option) => option.name}
        value={selectedCity}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        onChange={handleCityChange}
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="İl seçiniz" />}
      />
    </div>
  );
};

export default City;
