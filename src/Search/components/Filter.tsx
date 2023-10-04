import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import { UnsplashColors, UnsplashSorting } from "../../utils/enums/Unsplash";
import { SearchParameters } from "../../utils/types/Search";

interface FilterProps {
  updateGridState: (newState: Partial<SearchParameters>) => void;
}

const FilterWrapper = styled.div`
  margin: 20px 0;
  witdh: 100%;
  display: flex;
  gap: 20px;
`

const ColorToLabel: { [key in UnsplashColors]: string} = {
  [UnsplashColors.BLACK_AND_WHITE]: "Black and White",
  [UnsplashColors.BLACK]: "Black",
  [UnsplashColors.WHITE]: "White",
  [UnsplashColors.YELLOW]: "Yellow",
  [UnsplashColors.ORANGE]: "Orange",
  [UnsplashColors.RED]: "Red",
  [UnsplashColors.PURPLE]: "Purple",
  [UnsplashColors.MAGENTA]: "Magenta",
  [UnsplashColors.GREEN]: "Green",
  [UnsplashColors.TEAL]: "Teal",
  [UnsplashColors.BLUE]: "Blue",
}

const SortToLabel: { [key in UnsplashSorting]: string} = {
  [UnsplashSorting.LATEST]: "Latest",
  [UnsplashSorting.RELEVANT]: "Relevant",
}

const Filter = ({updateGridState}: FilterProps) => {
  const handleColorChange = (event: SelectChangeEvent) => {
    updateGridState({ color: event.target.value as UnsplashColors, page: 1 });
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    updateGridState({ order_by: event.target.value as UnsplashSorting, page: 1 });
  };
  
  return (
    <FilterWrapper>
      <FormControl fullWidth style={{minWidth: "250px"}}>        
        <InputLabel id="color-filter-label">Color</InputLabel>
        <Select
          labelId="color-filter-label"
          id="color-filter"
          label="Color"
          onChange={handleColorChange}
        >
          {
            Object.values(UnsplashColors).map((color) => (
              <MenuItem value={color}>{ColorToLabel[color]}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-filter"
          label="sort"
          defaultValue={UnsplashSorting.RELEVANT}
          onChange={handleSortChange}
        >
          {
            Object.values(UnsplashSorting).map((sort) => (
              <MenuItem value={sort}>{SortToLabel[sort]}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </FilterWrapper>
  )
}

export default Filter;
