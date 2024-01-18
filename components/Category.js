import React, { useState, useEffect, Fragment } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  TextField,
  Typography,
  Checkbox,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/store/Slices/CategorySlice";
import {
  setSelectedCategory,
  setSelectedSubcategory,
} from "@/store/Slices/SelectedInfoSlice";

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { selectedSubcategory } = useSelector(
    (state) => state.selectedSubcategory
  );
  const [checkedSubcategoryId, setCheckedSubcategoryId] = useState(null);
  const [selectedSub, setSelectedSub] = useState("");

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleCheckBoxChange = (subCategory) => (event) => {
    setCheckedSubcategoryId(event.target.checked ? subCategory.id : "");
    setSelectedSub(event.target.checked ? subCategory : null);
  };
  dispatch(setSelectedSubcategory(selectedSub));

  console.log(category);
  console.log(selectedSub);
  return (
    <div>
      <Autocomplete
        disablePortal
        id="form-demo"
        options={category}
        value={selectedSub ? selectedSub.name : ""}
        renderOption={(props, option) => (
          <Fragment key={option.id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${option.id}-content`}
                id={`panel-${option.id}-header`}
                sx={{ width: "350px", border: "none", marginBottom: 0 }}
              >
                <Typography>{option.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {option.subCategories && option.subCategories.length > 0 ? (
                  <ul>
                    {option.subCategories.map((subCategory) => (
                      <li key={subCategory.id}>
                        <Checkbox
                          checked={subCategory.id === checkedSubcategoryId}
                          onChange={handleCheckBoxChange(subCategory)}
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
          </Fragment>
        )}
        sx={{ width: 375 }}
        renderInput={(params) => <TextField {...params} label="Kategori ara" />}
      />
    </div>
  );
};

export default Category;
