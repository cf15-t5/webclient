import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ loggedIn: false });

  useEffect(() => {
    if (localStorage.getItem("SE_TIKET")) {
      setLoading(true);
      axios
        .get(`/auth/me`)
        .then((res) => {
          setCurrentUser({ loggedIn: true, role: res.data.data.role });
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            localStorage.removeItem("SE_TIKET");
          }
          setCurrentUser({ loggedIn: false });
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  function signOut() {
    setCurrentUser({ loggedIn: false });
    localStorage.removeItem("SE_TIKET");
    window.location.href("/");
  }

  function getRole() {
    return currentUser.role;
  }

  const value = {
    signOut,
    getRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
