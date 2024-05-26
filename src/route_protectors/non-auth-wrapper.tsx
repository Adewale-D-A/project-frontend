import { Outlet } from "react-router-dom";
import NavBar from "../components/menus/publicMenu";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop";

export default function NonAuthWrapper() {
  return (
    <ScrollToTop>
      <main className="w-full">
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </ScrollToTop>
  );
}
