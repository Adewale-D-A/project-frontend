import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/NavMenus";
import adminNavItems from "../assets/menus/adminMenu";

export default function AdminRoutes() {
  return (
    <main className="w-full">
      <MainLayout navDataset={{ navDataset: adminNavItems }}>
        <Outlet />
      </MainLayout>
    </main>
  );
}
