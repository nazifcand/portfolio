import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
