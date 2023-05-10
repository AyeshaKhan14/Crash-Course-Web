import React, { createContext, useState } from 'react';

const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  let x=JSON.parse(localStorage.getItem("Login")) || null
  console.log(x,"x")

  const userName=x?.name ? x.name : null
  const Authuser=x? true : false

  const [isAuth, setIsAuth] = useState({ auth: Authuser, name: userName })

  const handleLogin = (name) => {
      setIsAuth({ auth: true, name: name })
  }
  const handleLogout = (name) => {
      setIsAuth({ auth: false, name: null })
      localStorage.removeItem("Login")
  }


  return (
    <AuthContext.Provider value={{ handleLogin,handleLogout ,isAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };