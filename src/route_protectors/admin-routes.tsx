import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../layouts/NavMenus";
import adminNavItems from "../assets/menus/adminMenu";
import { useAppSelector } from "../store/hooks";

export default function AdminRoutes() {
  const { user } = useAppSelector((state) => state?.userAuthentication?.value);

  return user?.role === "admin" ? (
    <main className="w-full">
      <MainLayout navDataset={{ navDataset: adminNavItems }}>
        <Outlet />
      </MainLayout>
    </main>
  ) : (
    <Navigate to="/" />
  );
}
