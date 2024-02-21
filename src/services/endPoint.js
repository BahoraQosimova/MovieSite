import { components } from "react";

class endPoint extends components {
  topRated = () => {
    return "movie/top_rated";
  };

  upComing = () => {
    return "movie/upcoming";
  };

  popular = () => {
    return "/movie/popular";
  };
}

export default endPoint;
