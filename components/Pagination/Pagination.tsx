import Link from "next/link";
import { pageNumbersArray } from "../../utils/constants";

interface PaginationProps {
  currentPage: number;
}

export const Pagination = ({ currentPage }: PaginationProps) => {
  const numberOfPages = pageNumbersArray.length;
  const notLessThanFirst = Math.max(currentPage - 1, 1);
  const noFurtherThanLast = Math.min(currentPage + 1, numberOfPages);

  return (
    <section className="flex justify-center relative z-50">
      <ul className="flex my-10 p-4 justify-between items-center w-full max-w-md">
        <Link href={`/page/${notLessThanFirst}`}>
          <a>Prev</a>
        </Link>
        {pageNumbersArray.map(({ params }) => (
          <li key={params.pageNumber}>
            <Link href={`/page/${params.pageNumber}`}>
              <a>{params.pageNumber}</a>
            </Link>
          </li>
        ))}
        <Link href={`/page/${noFurtherThanLast}`}>
          <a>Next</a>
        </Link>
      </ul>
    </section>
  );
};
