import axios, { AxiosInstance } from 'axios';
const API_URL = 'https://pokeapi-production-5f83.up.railway.app';
// const API_URL = 'http://localhost:5050';

export const instance = (): AxiosInstance =>
  axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });

const fetcher = (url: string) =>
  instance()
    .get(url)
    .then((res) => res.data);

export default fetcher;
