import axios, { AxiosInstance } from 'axios';
const API_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5050'
    : 'https://pokeapi-production-5f83.up.railway.app';
// const foo = import.meta.env?.REACT_APP_ENV;

console.log('import.meta.env', import.meta.env);
// console.log('process.env', process?.env);

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
