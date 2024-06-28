// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const checkUserLoggedIn = async () => {
      try {
        const res = await axios.get('/api/auth/me');
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };
    checkUserLoggedIn();
  }, []);

  const signup = async (fullname, email, password, confirmPassword) => {
    try {
      const res = await axios.post('http://localhost:1818/api/auth/signup', {
        fullname,
        email,
        password,
        confirmPassword
      });
      setUser(res.data.user);
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', {
        email,
        password
      });
      setUser(res.data.user);
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout');
      setUser(null);
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
