import UnsplashColors from "../enums/UnsplashColors";

type SearchParameters = {
  query: string;
  page: number;
  per_page: number = 10;
  order_by: 'relevant' | 'latest';
  color: UnsplashColors | null;
}

type SearchResult = {
  total: number;
  total_pages: number;
  results: Photo[];
}

type UserProfile = {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string | null;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
  }

};

type Photo = {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string | null;
  user: UserProfile;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
};


