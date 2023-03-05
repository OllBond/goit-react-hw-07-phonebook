import axios from 'axios';

export const contactsInstance = axios.create({
  baseURL: 'https://64020c423779a8626263fc94.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const data = await contactsInstance.delete(`/${id}`);
  return data;
};
