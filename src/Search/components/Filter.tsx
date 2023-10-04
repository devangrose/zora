import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import { UnsplashColors, UnsplashSorting } from "../../utils/enums/Unsplash";
import { SearchParameters } from "../../utils/types/Search";

interface FilterProps {
  updateGridState: (newState: Partial<SearchParameters>) => void;
}

const FilterWrapper = styled.div`
  witdh: 100%;
`

const Filter = ({updateGridState}: FilterProps) => {
  const handleColorChange = (event: SelectChangeEvent) => {
    updateGridState({ color: event.target.value as UnsplashColors });
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    updateGridState({ order_by: event.target.value as UnsplashSorting });
  };
  
  return (
    <FilterWrapper>
      <FormControl>
        <InputLabel id="color-filter-label">Color</InputLabel>
        <Select
          labelId="color-filter-label"
          id="color-filter"
          label="Age"
          onChange={handleColorChange}
        >
          {
            Object.values(UnsplashColors).map((color) => (
              <MenuItem value={color}>{color}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="sort-label">Orientation</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-filter"
          label="Age"
          onChange={handleSortChange}
        >
          {
            Object.values(UnsplashSorting).map((sort) => (
              <MenuItem value={sort}>{sort}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </FilterWrapper>
  )
}

export default Filter;
