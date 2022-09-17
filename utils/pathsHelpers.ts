import { UnsplashResponse } from "./types";

export async function getPathsData(
  pageNumber: string = "1"
): Promise<UnsplashResponse> {
  const unsplashApi = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=mineral&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
  const { total, total_pages, results } = await (
    await fetch(unsplashApi, {
      headers: {
        "Accept-Version": "v1",
        "X-Per-Page": "24",
      },
    })
  ).json();
  return { total, total_pages, results };
}
