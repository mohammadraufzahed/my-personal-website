import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const HomePage = lazy(() => import("../pages"));

export default createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);
