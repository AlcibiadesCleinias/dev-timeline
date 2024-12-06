import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../components/Constants/themes';

const ThemeContext = createContext({
  themeMode: 'system',
  setThemeMode: () => {},
  activeTheme: lightTheme
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('system');
  const [activeTheme, setActiveTheme] = useState(lightTheme);

  useEffect(() => {
    const handleThemeChange = () => {
      if (themeMode === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setActiveTheme(prefersDark ? darkTheme : lightTheme);
      } else {
        setActiveTheme(themeMode === 'dark' ? darkTheme : lightTheme);
      }
    };

    handleThemeChange();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(handleThemeChange);

    return () => mediaQuery.removeListener(handleThemeChange);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, activeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 