import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../layouts/NavMenus";
import studentNavItems from "../assets/menus/studentMenu";
import { useAppSelector } from "../store/hooks";

export default function StudentRoutes() {
  const { user } = useAppSelector((state) => state?.userAuthentication?.value);

  return user?.role === "student" ? (
    <main className="w-full">
      <MainLayout navDataset={{ navDataset: studentNavItems }}>
        <Outlet />
      </MainLayout>
    </main>
  ) : (
    <Navigate to="/" />
  );
}
