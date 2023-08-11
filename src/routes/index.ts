import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [],
  },
]);
