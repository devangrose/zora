import axios from "axios";
import { SearchParameters, SearchResult } from "../utils/types/Search";

const callSearch = async (searchQuery: SearchParameters) => {
  const result = await axios<SearchResult>('https://api.unsplash.com/search/photos', 
    { 
      params: { ...searchQuery },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      }
    });
  return result;
}

export default callSearch;
