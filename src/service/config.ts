import axios, { AxiosInstance } from 'axios';
const instance = (): AxiosInstance =>
  axios.create({
    baseURL: 'http://localhost:5050'
  });

const fetcher = (url: string) =>
  instance()
    .get(url)
    .then((res) => res.data);

export default fetcher;
