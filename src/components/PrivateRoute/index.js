import { useLocation, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const auth = localStorage.getItem("accessToken");

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ form: location }} replace />
  );
};

export default PrivateRoute;
