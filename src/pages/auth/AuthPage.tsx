import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/auth/login");
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthPage;
