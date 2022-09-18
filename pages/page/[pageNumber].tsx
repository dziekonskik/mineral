import { useState } from "react";
import { getPathsData } from "../../utils/pathsHelpers";
import { PictureGrid } from "../../components/Pictures/PictureGrid";
import { FilterForm } from "../../components/PicturesFilter/FilterForm";
import { getPhotoGridData } from "../../utils/functions";
import { pagesCount } from "../../utils/constants";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

const PhotoGridPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filteredPictures, setFilteredPictures] = useState(
    getPhotoGridData(results)
  );

  return (
    <main className="lg:container mx-auto flex flex-col min-h-screen ">
      <FilterForm
        pictures={getPhotoGridData(results)}
        setPictures={setFilteredPictures}
      />
      <PictureGrid pictures={filteredPictures} />
    </main>
  );
};

export default PhotoGridPage;

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: pagesCount }, (_, i) => ({
      params: { pageNumber: (i + 1).toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{
  pageNumber: string;
}>) => {
  const safePageNumber = params?.pageNumber ? params.pageNumber : "1";
  const { results } = await getPathsData(safePageNumber);

  return {
    props: {
      results,
    },
  };
};
