// дістаємо зі store contacts
export const getAllContacts = store => store.contacts;
// відфільтровані контакти
export const getFilteredContacts = ({ contacts, filter }) => {
  // якщо фільтр пустий - повертати масив контактів не фільтрувати
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name, phone }) => {
    return (
      // якщо у name є ці кілька літер - вертає true
      name.toLowerCase().includes(normalizedFilter) ||
      // або якщо у phone є ці кілька цифр - вертає true
      phone.toLowerCase().includes(normalizedFilter)
    );
  });
  return result;
};
export const getFilter = ({ filter }) => filter;
