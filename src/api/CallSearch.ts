import axios from "axios";
import { SearchParameters, SearchResult } from "../utils/types/Search";

const callSearch = async (searchQuery: SearchParameters) => {
  const result = await axios<SearchResult>('https://api.unsplash.com/search/photos', { params: { ...searchQuery } });
  return result;
}

export default callSearch;
