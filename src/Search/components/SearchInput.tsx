import { AccountCircle } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";
import { useState } from "react";
import { SearchParameters } from "../../utils/types/Search";

interface Props {
  updateGridState: (newState: Partial<SearchParameters>) => void;
}

const SearchInput = ({updateGridState}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateGridState({ query: event.target.value });
  };

  return (
  <Input
    id="input-with-icon-adornment"
    onChange={handleChange}
    endAdornment={
      <InputAdornment position="end">
        <AccountCircle />
      </InputAdornment>
    }
  />
  )
}

export default SearchInput;
