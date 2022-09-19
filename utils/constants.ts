export const pagesCount = 7;

export const pageNumbersArray = Array.from({ length: pagesCount }, (_, i) => ({
  params: { pageNumber: (i + 1).toString() },
}));
