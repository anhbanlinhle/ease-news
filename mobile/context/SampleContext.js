import React, { createContext, useState } from 'react';

export const SampleContext = createContext(null);

export const SampleProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Light mode by default
  const [fontScale, setFontScale] = useState(1); // Default scale value

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const updateFontScale = (scale) => {
    setFontScale(scale);
  };

  return (
    <SampleContext.Provider value={{ isDarkMode, fontScale, toggleDarkMode, updateFontScale }}>
      {children}
    </SampleContext.Provider>
  );
};
