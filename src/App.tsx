import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import SnackBar from "./components/snackbars";
import PageNotFound from "./pages/404";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {<SnackBar />}
    </>
  );
}

export default App;
