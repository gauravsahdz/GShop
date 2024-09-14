import { ThemeContext } from '@context/ThemeProvider';
import { useContext } from 'react';

interface Theme {
  colors: {
    primary: string;
    red: string;
    black: string;
    shadow: string;
    white: string;
    lightGrey: string;
    gray: string;
    placeholder: string;
    lightGray: string;
    lightBrown: string;
    darkBlue: string;
    green: string;
  };
}

const useThemedStyles = (styles: (theme: Theme) => any = () => ({})) => {
  const theme = useContext(ThemeContext);
  return styles(theme);
};

export default useThemedStyles;
