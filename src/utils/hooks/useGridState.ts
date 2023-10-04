import { useEffect, useState } from "react";
import callSearch from "../../api/CallSearch";
import { UnsplashSorting } from "../enums/Unsplash";
import { Photo, SearchParameters } from "../types/Search";

const defaultSearchParameters: SearchParameters = {
  query: '',
  page: 1,
  per_page: 9,
  order_by: UnsplashSorting.RELEVANT,
  color: null,
}

const useGridState = () => {
  const [ searchParameters, setSearchParameters ] = useState<SearchParameters>(defaultSearchParameters);
  const [ photos, setPhotos ] = useState<Photo[]>([]);
  const [ pageCount, setPageCount ] = useState<number>(0);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ requeryOnLoad, setRequeryOnLoad ] = useState<boolean>(false);

  const updateSearchParameters = (newParameters: Partial<SearchParameters>) => {
    setSearchParameters({ ...searchParameters, ...newParameters });
  }

  const fetchPhotos = async () => {
    if(!loading) { 
        try {
          setLoading(true);
          const result = await callSearch(searchParameters);
          setPhotos(result.data.results);
          setPageCount(result.data.total_pages);
          setLoading(false);

        } catch (e) {
          // TODO: nice little toast message or something
          alert(`Error fetching photos`);
          if(process.env.NODE_ENV !== 'production') {
            console.dir(e);
          }
          setLoading(false);
        }
    }
    // debounce and requery if changes made while api is being calld
    else {
      setRequeryOnLoad(true);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, [searchParameters]);

  // if requeryOnLoad is true, we need to requery
  useEffect(() => {
    if(!loading && requeryOnLoad) {
      setRequeryOnLoad(false);
      fetchPhotos();
    }
  }, [loading]);

  return {
    photos,
    searchParameters,
    updateSearchParameters,
    loading,
    pageCount,
  }
}

export default useGridState
