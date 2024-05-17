import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/NavMenus";
import studentNavItems from "../assets/menus/studentMenu";

export default function StudentRoutes() {
  return (
    <main className="w-full">
      <MainLayout navDataset={{ navDataset: studentNavItems }}>
        <Outlet />
      </MainLayout>
    </main>
  );
}
