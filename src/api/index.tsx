import Axios from 'axios';

const baseUrl = 'https://swapi.dev';

export const Api = Axios.create({
  baseURL: `${baseUrl}/api/`,
  timeout: 10000,
});
