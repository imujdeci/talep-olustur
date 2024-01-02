import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/store/Slices/CategorySlice";
import {
  setSelectedCategory,
  updateSelectedSubcategories,
} from "@/store/Slices/SelectedInfoSlice";

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { selectedCategory } = useSelector((state) => state.selectedCategory);
  const { selectedSubcategories } = useSelector(
    (state) => state.selectedSubcategories
  );

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleSetCategory = (event, value) => {
    dispatch(setSelectedCategory(value));
  };

  const handleCheckBoxChange = (subCategoryId) => (event) => {
    const newSelectedSubcategories = event.target.checked
      ? [...selectedSubcategories, subCategoryId]
      : selectedSubcategories.filter((id) => id !== subCategoryId);

    dispatch(updateSelectedSubcategories(newSelectedSubcategories));
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        disableCloseOnSelect
        id="combo-box-demo"
        options={category}
        getOptionLabel={(option) => option.name}
        value={selectedCategory}
        onChange={handleSetCategory}
        renderOption={(props, option) => (
          <li {...props}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${option.id}-content`}
                id={`panel-${option.id}-header`}
              >
                <Typography>{option.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {option.subCategories && option.subCategories.length > 0 ? (
                  <ul className={styles.list}>
                    {option.subCategories.map((subCategory) => (
                      <li key={subCategory.id}>
                        <Checkbox
                          checked={
                            selectedSubcategories &&
                            Array.isArray(selectedSubcategories) &&
                            selectedSubcategories.includes(subCategory.id)
                          }
                          onChange={handleCheckBoxChange(subCategory.id)}
                        />
                        {subCategory.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography>Alt kategori bulunamadı.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </li>
        )}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Kategori" />}
      />
    </div>
  );
};

export default Category;
