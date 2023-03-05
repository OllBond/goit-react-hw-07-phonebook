import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'redux/filter/filter-selectors';

export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
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
  }
);
