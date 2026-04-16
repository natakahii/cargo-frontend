import React, { createContext, useState, useContext, useEffect, useRef, useCallback } from 'react';
import api from '../services/api';

const AuthContext = createContext();

const SESSION_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionWarning, setSessionWarning] = useState(false);
  const timeoutRef = useRef(null);
  const warningRef = useRef(null);

  // --- Core logout logic ---
  const logout = useCallback(async () => {
    clearTimeout(timeoutRef.current);
    clearTimeout(warningRef.current);
    setSessionWarning(false);
    try {
      await api.post('/auth/logout');
    } catch (e) {
      console.warn('Logout request failed, clearing local state anyway.');
    }
    localStorage.removeItem('cargo_token');
    setUser(null);
  }, []);

  // --- Reset the inactivity timers ---
  const resetTimers = useCallback(() => {
    if (!localStorage.getItem('cargo_token')) return;

    clearTimeout(timeoutRef.current);
    clearTimeout(warningRef.current);
    setSessionWarning(false);

    // Show warning at 4 min (1 min before logout)
    warningRef.current = setTimeout(() => {
      setSessionWarning(true);
    }, SESSION_TIMEOUT_MS - 60 * 1000);

    // Auto logout at 5 min
    timeoutRef.current = setTimeout(() => {
      logout();
    }, SESSION_TIMEOUT_MS);
  }, [logout]);

  // --- Listen for any user activity ---
  useEffect(() => {
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];
    const handleActivity = () => resetTimers();

    events.forEach(e => window.addEventListener(e, handleActivity, { passive: true }));
    return () => {
      events.forEach(e => window.removeEventListener(e, handleActivity));
      clearTimeout(timeoutRef.current);
      clearTimeout(warningRef.current);
    };
  }, [resetTimers]);

  // --- Check existing session on mount ---
  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('cargo_token');
      if (token) {
        try {
          const res = await api.get('/auth/me');
          setUser(res.data.user);
          resetTimers(); // Start inactivity timer
        } catch (error) {
          localStorage.removeItem('cargo_token');
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkUser();
  }, [resetTimers]);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('cargo_token', res.data.token);
    setUser(res.data.user);
    resetTimers(); // Start inactivity timer after login
    return res.data.user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user, sessionWarning, resetTimers }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
