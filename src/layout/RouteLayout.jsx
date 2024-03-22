import { Outlet } from "react-router-dom";
import { Header } from "../components";

const RouteLayout = () => {
  return (
    <>
      <Outlet />;
    </>
  );
};

export default RouteLayout;
