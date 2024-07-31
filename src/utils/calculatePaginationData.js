export const calculatePaginationData = (totalItems, page, perPage) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const hasPreviousPage = page !== 1 && page - 1 <= totalPages;
  const hasNextPage = Boolean(totalPages > page);

  return {
    page,
    perPage,
    totalItems,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};
