import { Pagination } from "@mui/material";
import styled from "styled-components";
import useGridState from "../utils/hooks/useGridState";
import Filter from "./components/Filter";
import PhotosGrid from "./components/PhotosGrid";
import SearchInput from "./components/SearchInput";

const SearchWrapper = styled.div`

`

const Search = () => {

  const { loading, updateSearchParameters, photos, searchParameters, pageCount } = useGridState();

  return (<SearchWrapper>
    <SearchInput updateGridState={updateSearchParameters} />

    <Filter updateGridState={updateSearchParameters} />
    <PhotosGrid photos={photos} loading={loading} />
    <Pagination count={pageCount} page={searchParameters.page} onChange={(event, page) => updateSearchParameters({ page })} />
  </SearchWrapper>)
}

export default Search;
