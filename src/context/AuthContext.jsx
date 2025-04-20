import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const EmployerLogin = () => {
    setUser({ type: 'employer', id: 'emp1', name: 'Demo Employer' });
  };

  const SeekerLogin = () => {
    setUser({ type: 'jobseeker', id: 'js1', name: 'Demo Job Seeker' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, EmployerLogin, SeekerLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };