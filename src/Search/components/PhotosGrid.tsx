import styled from "styled-components";
import { Photo } from "../../utils/types/Search";

interface Props {
  photos: Photo[];
  loading: boolean;
}

const PhotosGridWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;

  .div-wrapper { 
    width: 100%;
    flex: 0 0 28%;
    display: flex;
    align-items: center;
    min-width: 300px;
  }
`

const PhotosGrid = ({ photos, loading }: Props) => {
  if(!photos.length) return (<div>No photos found</div>);
  if(loading) return (<div>Loading...</div>)
  return (
    <PhotosGridWrapper>
      {
        photos.map((photo) => (
          <div className="div-wrapper">
            <img width="100%" src={photo.urls.small} alt="unsplash image" />
          </div>
        ))
      }
    </PhotosGridWrapper>
  )
}

export default PhotosGrid;

