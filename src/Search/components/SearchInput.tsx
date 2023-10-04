import { AccountCircle } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";
import { SearchParameters } from "../../utils/types/Search";

interface Props {
  updateGridState: (newState: Partial<SearchParameters>) => void;
}

const SearchInputWrapper = styled.div`
  margin-top: 20px;
`

const SearchInput = ({updateGridState}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateGridState({ query: event.target.value, page: 1});
  };

  return (
    <SearchInputWrapper>
      <Input
        style={{ width: "250px", fontSize: "1.5rem"}}
        id="input-with-icon-adornment"
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </SearchInputWrapper>
  )
}

export default SearchInput;
