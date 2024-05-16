import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import SnackBar from "./components/snackbars";
import PageNotFound from "./pages/404";
import Home from "./pages/home";
import NonAuthWrapper from "./route_protectors/non-auth-wrapper";
import AboutUs from "./pages/about-us";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NonAuthWrapper />}>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-our-system" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {<SnackBar />}
    </>
  );
}

export default App;
