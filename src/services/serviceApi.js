import { components } from "react";
import { privateApi } from "./axios";
import { endPoint } from "./endPoint";

class Movie extends components {
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
      const response = await privateApi.get(endPoint.getTopData(id));
      return response.data;
    } catch (error) {
      throw error;
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
      const response = await privateApi.get(endPoint.getSearchResult(query));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Movie;
