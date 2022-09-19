import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getRegister = async user => {
  const { data } = await instance.post('/users/signup', user);
  instance.defaults.headers.authorization = `Bearer ${data.token}`;
  return data;
};

export const getLogin = async user => {
  const { data } = await instance.post('/users/login', user);
  instance.defaults.headers.authorization = `Bearer ${data.token}`;
  return data;
};

export const getLogout = async () => {
  const { data } = await instance.post('/users/logout');
  instance.defaults.headers.authorization = '';
  return data;
};

export const geCurrent = async token => {
  try {
    instance.defaults.headers.authorization = `${token}`;
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    instance.defaults.headers.authorization = '';
    throw error;
  }
};

export default instance;
