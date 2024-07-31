const parseValue = (value, defaultValue) => {
  const isString = typeof value === 'string';
  if (!isString) return defaultValue;

  const parsedValue = parseInt(value);
  if (Number.isNaN(parsedValue)) {
    return defaultValue;
  }

  return parsedValue;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseValue(page, 1);
  const parsedPerPage = parseValue(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
