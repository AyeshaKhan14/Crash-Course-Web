import React, { createContext, useState } from 'react';

const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ auth: false, name: null })

  const handleLogin = (name) => {
      setIsAuth({ auth: true, name: name })
  }
  const handleLogout = (name) => {
      setIsAuth({ auth: false, name: null })
  }


  return (
    <AuthContext.Provider value={{ handleLogin,handleLogout ,isAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };