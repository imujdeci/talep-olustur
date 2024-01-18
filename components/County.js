import React from "react";
import styles from "@/styles/Home.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { setSelectedCounty } from "@/store/Slices/SelectedInfoSlice";

const County = () => {
  const dispatch = useDispatch();
  const { county } = useSelector((state) => state.county);
  const { selectedCounty } = useSelector((state) => state.selectedCounty);
  console.log(selectedCounty);

  const handleCountyChange = (event, value) => {
    dispatch(setSelectedCounty(value));
  };
  return (
    <div>
      <Autocomplete
        disablePortal
        selectOnFocus
        id="combo-box-demo"
        options={county.data || []}
        getOptionLabel={(option) => option.name}
        value={selectedCounty}
        onChange={handleCountyChange}
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="İlçe seçiniz" />}
      />
    </div>
  );
};

export default County;
