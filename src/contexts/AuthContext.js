import { createContext, useState,  useEffect } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  id: 0,
  name: '',
  firstName: '',
  lastName: '',
  userType: 1,
  token: null
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    id: 0,
    name: '',
    firstName: '',
    lastName: '',
    userType: 1,
    token: null
  });

  return (
    <AuthContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
};