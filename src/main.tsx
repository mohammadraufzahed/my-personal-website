import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Loading from "react-loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="w-full h-[96vh] flex items-center justify-center">
          <Loading type="spin" color="rgb(9, 46, 32)" width={24} height={24} />
        </div>
      }
    >
      <RouterProvider router={routes} />
    </Suspense>
  </React.StrictMode>
);
