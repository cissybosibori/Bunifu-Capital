import { Outlet } from "react-router-dom";

/**
 * Wraps admin routes. When backend auth is added, check session here
 * and redirect to /admin/login if unauthenticated.
 */
export function ProtectedRoute() {
  return <Outlet />;
}
