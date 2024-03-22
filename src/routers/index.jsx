import RouteLayout from "../layout/RouteLayout";
import AboutPage from "../pages/About/AboutPage";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import Search from "../pages/Search/Search";
import SinglePage from "../pages/SinglePage/SinglePage";

import { routeNames } from "./const";

export const routes = [
  {
    element: <RouteLayout />,
    path: routeNames.HOME,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <AboutPage />, // Bu joyda id berilgan
        path: routeNames.ABOUT,
      },
      {
        element: <SinglePage />,
        path: routeNames.SINGLE,
      },
      {
        element: <Search />,
        path: routeNames.SEARCH,
      },
      {
        element: <NotFoundPage />,
        path: routeNames.NOT_FOUND,
      },
    ],
  },
];
