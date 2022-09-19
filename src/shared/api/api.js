import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const removeContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
