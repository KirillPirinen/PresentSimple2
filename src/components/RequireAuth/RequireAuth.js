import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  const user = useSelector(state=>state.user)
  let location = useLocation();

  return (
    user ? <Outlet /> : <Navigate to="auth/login" state={{ from: location }} /> 
  )

}
