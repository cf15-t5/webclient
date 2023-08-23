import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ loggedIn: false , data:null });
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("SE_TIKET")) {
      setLoading(true);
      axios
        .get(`/auth/me`)
        .then((res) => {
          setCurrentUser({ loggedIn: true, data: res.data.data });
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
    navigate('/')
    window.location.reload()
  }

  function getData() {
    return currentUser.data;
  }

  const value = {
    signOut,
    getData,
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
