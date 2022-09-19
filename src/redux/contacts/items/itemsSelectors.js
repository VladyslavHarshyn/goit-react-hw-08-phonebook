export const getLoading = state => state.items.loading;

export const getError = state => state.items.error;

export const getFilteredContacts = state => {
  const {
    items: { items },
    filter,
  } = state;

  if (!filter) {
    return items;
  }
  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
};
