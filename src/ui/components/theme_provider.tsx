import { ThemeProvider, responsiveFontSizes } from "@mui/material";
import { ReactNode } from "react";
import { useAppSelector } from "../..";
import { darkTheme, theme } from "../styles/theme/theme";

export interface IDarkThemeProviderProps {
  children?: ReactNode;
}

const DarkThemeProvider = (props: IDarkThemeProviderProps) => {
  const { children } = props;
  const darkThemeEnabled = useAppSelector(
    (state) => state.prefrences.darkthemeEnabled
  );
  return (
    <ThemeProvider
      theme={responsiveFontSizes(darkThemeEnabled ? darkTheme : theme)}
    >
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
