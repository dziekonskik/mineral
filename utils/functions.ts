import type { UnsplashResult } from "./types";

export function getPhotoGridData(fetchResult: UnsplashResult[]) {
  return fetchResult.map((result) => ({
    alt_description: result.alt_description,
    blur_hash: result.blur_hash,
    likes: result.likes,
    urls: result.urls,
    user: result.user,
  }));
}
