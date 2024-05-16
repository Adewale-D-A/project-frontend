import { Outlet } from "react-router-dom";
import NavBar from "../components/menus/publicMenu";
import Footer from "../components/footer/Footer";

export default function NonAuthWrapper() {
  return (
    <main className="w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
