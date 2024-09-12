import colors from '@styles/colors';
import { typography } from '@styles/typography';
import React, { createContext, ReactNode } from 'react';

export const ThemeContext = createContext(
  {} as {
    colors: typeof colors;
    typography: typeof typography;
  },
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = {
    colors: colors,
    typography,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
