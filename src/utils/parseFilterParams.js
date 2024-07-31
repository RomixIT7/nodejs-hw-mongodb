const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';

  if (!isString) return;

  const isValidContactType = ['work', 'home', 'personal'].includes(contactType);

  if (isValidContactType) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if (isFavourite === 'true') return true;

  if (isFavourite === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
