export const endPoint = {
  popular: "/movie/popular",
  top_rated: "movie/top_rated",
  searchMovie: (quary) => "/search/movie?query=${quary}",
  upComing: "movie/upcoming",
  ganresList: "/genre/movie/list",
  getSingle: (movieID) => "/movie/${movieID}",
  getVideo: (movieID) => "/movie/${movieID}/videos",
  getSingleSimilar: (movieID) => "/movie/${movieID}/similar",
  generalSearch: (...param) => "/discover/movie?${param}",
};
