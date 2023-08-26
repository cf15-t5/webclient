import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ role, redirectPage = "/" }) => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    axios
      .get(`/auth/me`)
      .then((res) => {
        setUserRole(res.data.data.role);
      })
      .catch(() => {
        setUserRole("UNREGISTERED");
      });
  }, []);

  if (userRole === "") {
    return <div>Loading...</div>;
  } else {
    return role.includes(userRole) ? (
      <Outlet />
    ) : (
      <Navigate to={redirectPage} />
    );
  }
};

export default ProtectedRoutes;
