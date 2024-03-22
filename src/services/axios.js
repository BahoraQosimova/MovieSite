import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzg3ZTdkZjQ1MGExYTUxODcxYjE3N2QzYzExMGZmZiIsInN1YiI6IjY1YzRiMzc1NzEzZWQ0MDE2YzE3M2QyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaXwFoaovO90qQTxjY5qtQKAgOrnw9d4ULobSPpz3d4";
const baseURL = "https://api.themoviedb.org/3";
export const privateApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
privateApi.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
});

privateApi.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    if (error.response) {
      throw error.response.data;
    }
    return Promise.reject(error);
  }
);
