import Category from "@/components/Category";
import City from "@/components/City";
import County from "@/components/County";
import { Formik, Form, ErrorMessage, Field } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";

const ShowForm = () => {
  const { selectedCategory } = useSelector((state) => state.selectedCategory);
  const { selectedSubcategory } = useSelector(
    (state) => state.selectedSubcategory
  );
  const { selectedCity } = useSelector((state) => state.selectedCity);
  const { selectedCounty } = useSelector((state) => state.selectedCounty);

  return (
    <Box>
      <Typography sx={{ marginBottom: 1 }}>Kategori</Typography>
      <Category />

      <Typography sx={{ marginBottom: 3 }}>Konum</Typography>
      <Grid container spacing={2} sx={{ marginLeft: 0.2 }}>
        <Grid>
          <City />
        </Grid>
        <Grid>
          <County />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShowForm;
