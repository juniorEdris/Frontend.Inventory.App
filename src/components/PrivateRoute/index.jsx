import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { toast } from "react-toastify";

const PrivateRoute = () => {
  const location = useLocation();
  const auth = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!auth) {
      toast.error("You have to login first!");
    }
  }, []);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ form: location }} replace />
  );
};

export default PrivateRoute;
