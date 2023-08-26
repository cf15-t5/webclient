import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import loadingCircle from "../Assets/loading.svg";
import { getAuth } from "./getAuth";

const ProtectedRoutes = ({ role, redirectPage = "/" }) => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    async function getRole() {
      try {
        const role = await getAuth();
        setUserRole(role);
      } catch (error) {
        setUserRole("UNREGISTERED");
      }
    }
    getRole();
  }, []);

  if (userRole === "") {
    return (
      <div className="flex justify-center">
        <img src={loadingCircle} alt="loadingCircle" />
      </div>
    );
  } else {
    return role.includes(userRole) ? (
      <Outlet />
    ) : (
      <Navigate to={redirectPage} />
    );
  }
};

export default ProtectedRoutes;
