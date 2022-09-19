import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getPathsData } from "../../utils/pathsHelpers";
import { PictureGrid } from "../../components/Pictures/PictureGrid";
import { FilterForm } from "../../components/PicturesFilter/FilterForm";
import { Pagination } from "../../components/Pagination/Pagination";
import { getPhotoGridData } from "../../utils/functions";
import { pageNumbersArray } from "../../utils/constants";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

const PhotoGridPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filteredPictures, setFilteredPictures] = useState(
    getPhotoGridData(results)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (router.query.pageNumber) {
      setCurrentPage(Number(router.query.pageNumber));
      setFilteredPictures(getPhotoGridData(results));
    }
  }, [router.query, results]);

  return (
    <main className="lg:container mx-auto flex flex-col min-h-screen justify-between relative">
      <FilterForm
        pictures={getPhotoGridData(results)}
        setPictures={setFilteredPictures}
      />
      <PictureGrid pictures={filteredPictures} />
      <Pagination currentPage={currentPage} />
    </main>
  );
};

export default PhotoGridPage;

export const getStaticPaths = async () => {
  return {
    paths: pageNumbersArray,
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
