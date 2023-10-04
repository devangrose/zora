import { useEffect, useState } from "react";
import callSearch from "../../api/CallSearch";
import { Photo, SearchParameters } from "../types/Search";

const defaultSearchParameters: SearchParameters = {
  query: '',
  page: 1,
  per_page: 10,
  order_by: 'relevant',
  color: null,
}

const useGridState = () => {
  const [ searchParameters, setSearchParameters ] = useState<SearchParameters>(defaultSearchParameters);
  const [ photos, setPhotos ] = useState<Photo[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);

  const updateSearchParameters = (newParameters: Partial<SearchParameters>) => {
    setSearchParameters({ ...searchParameters, ...newParameters });
  }

  const fetchPhotos = async () => {
    if(loading) return;
    try {
      setLoading(true);
      const result = await callSearch(searchParameters);
      setPhotos(result.data.results);
      setLoading(false);

    } catch (e) {
      // TODO: nice little toast message or something
      alert(`Error fetching photos`);
      if(process.env.NODE_ENV !== 'production') {
        console.dir(e);
      }
    }
  }

  // first fetch of default values
  useEffect(() => {
    fetchPhotos();
  }, [searchParameters]);

  return {
    photos,
    searchParameters,
    updateSearchParameters,
    loading,
  }

}

export default useGridState
