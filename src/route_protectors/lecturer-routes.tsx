import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/NavMenus";
import lecturerNavItems from "../assets/menus/lecturerMenu";

export default function LecturersRoutes() {
  return (
    <main className="w-full">
      <MainLayout navDataset={{ navDataset: lecturerNavItems }}>
        <Outlet />
      </MainLayout>
    </main>
  );
}
