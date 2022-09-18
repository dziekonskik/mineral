export type PhotoGridEssentials = Pick<
  UnsplashResult,
  "alt_description" | "blur_hash" | "likes" | "urls" | "user"
>;

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashResult[];
}

export interface UnsplashResult {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: null;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  user: User;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface TopicSubmissions {}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: null;
  bio: string;
  location: null;
  links: null[];
  profile_image: null[];
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: null[];
}
