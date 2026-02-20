import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LogoutPage() {
  const navigate = useNavigate();
  useEffect(() => {
    // No auth logic yet - just redirect to login
    navigate("/admin/login", { replace: true });
  }, [navigate]);
  return null;
}
