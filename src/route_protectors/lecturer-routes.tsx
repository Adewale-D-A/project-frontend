import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../layouts/NavMenus";
import lecturerNavItems from "../assets/menus/lecturerMenu";
import { useAppSelector } from "../store/hooks";

export default function LecturersRoutes() {
  const { user } = useAppSelector((state) => state?.userAuthentication?.value);

  return user?.role === "lecturer" ? (
    <main className="w-full">
      <MainLayout navDataset={{ navDataset: lecturerNavItems }}>
        <Outlet />
      </MainLayout>
    </main>
  ) : (
    <Navigate to="/" />
  );
}
