import { Component } from "react";
import { endPoint } from "./endPoint";
import { privateApi } from "./Axios";

class Movie extends Component {
  async getNewMovies(id) {
    try {
      const response = await privateApi.get(endPoint.getNewMovies(id));
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getTopData(id) {
    try {
      const response = await privateApi.get(endPoint.top_rated);
      return { response };
    } catch (error) {
      throw { error };
    }
  }

  async getPopularData(id) {
    try {
      const response = await privateApi.get(endPoint.getPopularData(id));
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSimilar(id) {
    try {
      const response = await privateApi.get(endPoint.getSimilar(id));
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSearchResult(query) {
    try {
      const response = await privateApi.get(endPoint.searchMovie(query));
      return { response };
    } catch (error) {
      throw [error];
    }
  }
}

export default Movie;
