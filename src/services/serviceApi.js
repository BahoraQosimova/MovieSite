import { components } from "react";
import { privateApi } from "./axios";
class Movie extends components {
  async getNewMovies(id) {
    try {
      const response = await privateApi.get(endPoint.getNewMovies(id));
      return { response };
    } catch (error) {
      return error;
    }
  }

  async getTopData(id) {
    try {
      const response = await privateApi.get(endPoint.getTopData(id));
    } catch (error) {
      return error;
    }
  }

  async getPopularData(id) {
    try {
      const response = await privateApi.get(endPoint.getPopularData(id));
    } catch (error) {
      throw error;
    }
  }

  async getSimilar(id) {
    try {
      const response = await privateApi.get(endPoint.getSimilar(id));
      return { response };
    } catch (error) {
      return error;
    }
  }
  async getSeachResult(quary) {
    try {
      const response = await privateApi.get(endPoint.getSeachResult(quary));
      return { response };
    } catch (error) {
      return error;
    }
  }
}
export { Movie };
