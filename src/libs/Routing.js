import { useLocation, useRoutes } from "react-router";
import { useEffect } from "react";
import { routes } from "../routers";

export const Routing = () => {
  const route = useRoutes(routes);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return route;
};
