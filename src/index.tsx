import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material";
//import redux
import StoreProvider from "./store/StoreProvider";

import "./index.css";
import Loader from "./pages/loader";
import themeOne from "./layouts/themes";

const AppRoute = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={themeOne}>
        <HelmetProvider>
          <Suspense fallback={<Loader />}>
            <AppRoute />
          </Suspense>
        </HelmetProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
