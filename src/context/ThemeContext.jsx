import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    document.body.className = darkTheme ? 'dark' : 'light';
  }, [darkTheme]);

  const toggleTheme = () => setDarkTheme(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
