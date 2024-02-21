import { components } from "react";

class Movie extends components {
  getNewMovies = async () => {
    try {
      const movies = await privateApi.get("movie/upcoming");
      return movies.results;
    } catch (error) {
      throw error;
    }
  };

  getTopData = async () => {
    try {
      const datas = await privateApi.get("movie/top_rated");
      return datas.results;
    } catch (error) {
      throw error;
    }
  };

  getPopularData = async () => {
    try {
      const response = await privateApi.get("/movie/popular");
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export { Movie };
