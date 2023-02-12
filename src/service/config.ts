import axios, { AxiosInstance } from 'axios';
const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5050'
    : 'https://pokeapi-production-5f83.up.railway.app';

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
