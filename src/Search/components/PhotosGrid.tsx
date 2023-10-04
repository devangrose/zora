import { Photo } from "../../utils/types/Search";

interface Props {
  photos: Photo[];
  loading: boolean;
}

const PhotosGrid = ({ photos, loading }: Props) => {
  if(loading) return (<div>Loading...</div>)
  return (
    <div>
      {
        photos.map((photo) => (
          <img src={photo.urls.small} alt="unsplash image" />
        ))
      }
    </div>
  )
}

export default PhotosGrid;

