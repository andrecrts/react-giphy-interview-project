import axios from "axios";

const BASE_URL = "https://api.giphy.com";
const API_KEY = `YOUR_API_KEY`;

export const getTrending = () => {
  const url = `${BASE_URL}/v1/gifs/trending?api_key=${API_KEY}`;
  return axios.get(url).then(response => response.data);
};
