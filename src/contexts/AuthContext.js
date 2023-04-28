import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const AuthContext = createContext({
  isAuthenticated: false,
  isAdmin: false,
  token: null
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    isAdmin: false,
    token: null
  });

  return (
    <AuthContext.Provider value={{ ...auth }}>
      {children}
    </AuthContext.Provider>
  )
};