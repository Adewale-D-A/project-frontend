import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export default function RequireAuth() {
  const { access_token } = useAppSelector(
    (state) => state?.userAuthentication?.value
  );
  return access_token ? <Outlet /> : <Navigate to="/login" />;
}
