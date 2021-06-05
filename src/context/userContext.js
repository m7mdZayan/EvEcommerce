import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userToken: "",
    authenticated: false,
    userName: "",
    userCart: [],
  });

  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setUserData({
        userToken: localStorage.getItem("userToken"),
        userName: localStorage.getItem("userName"),
        authenticated: !!localStorage.getItem("authenticated"),
        userCart: JSON.parse(localStorage.getItem("userCart")),
      });
    }
  }, []);

  return (
    <userContext.Provider value={[userData, setUserData]}>
      {children}
    </userContext.Provider>
  );
};
