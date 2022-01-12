import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  let auth = true
  let location = useLocation();

  return (
    auth ? <Outlet /> : <Navigate to="auth/login" state={{ from: location }} /> 
  )

}
