import { Container, Pagination, Typography } from "@mui/material";
import styled from "styled-components";
import useGridState from "../utils/hooks/useGridState";
import Filter from "./components/Filter";
import PhotosGrid from "./components/PhotosGrid";
import SearchInput from "./components/SearchInput";

const SearchWrapper = styled.div`
  #title {
    margin-top: 20px;
  } 
`

const Search = () => {
  const { loading, updateSearchParameters, photos, searchParameters, pageCount } = useGridState();

  return (<SearchWrapper>
    <Container>
      <Typography id="title" variant="h3" gutterBottom>Unsplash Search Engine</Typography>
      <SearchInput updateGridState={updateSearchParameters} />

      <Filter updateGridState={updateSearchParameters} />
      <PhotosGrid photos={photos} loading={loading} />
      <Pagination size="large" style={{display: 'flex', justifyContent: "center", margin: '20px'}} count={pageCount} page={searchParameters.page} onChange={(event, page) => updateSearchParameters({ page })} />
    </Container>
  </SearchWrapper>)
}

export default Search;
